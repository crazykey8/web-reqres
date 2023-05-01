import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pagePeopleState} from "../../interface/actionState";

export const responsePage = createAsyncThunk(
    'page/responsePage',
    async function (id: number, {rejectWithValue}) {
        try {
            const response = await fetch(`https://reqres.in/api/users?page=${id || 1}`)

            if (!response.ok) {
                throw new Error()
            }

            const data = response.json()

            return data

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export interface pageState {
    filter: pagePeopleState[],
    error: any,
    status?: string,
}

const initialState: pageState = {
    error: null,
    filter: []
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        likedPosts(state, action) {
            state.filter = state.filter.map((i: any) => i.id === action.payload.id ? {
                ...i,
                like: action.payload.like
            } : i)
        }
    },
    extraReducers: (fetch) => {
        fetch.addCase(responsePage.pending, (state, action) => {
            state.status = 'loading';
            state.error = null
        })
        fetch.addCase(responsePage.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.filter = action.payload.data
            state.filter.map(el => {
                el['like'] = false;
                return el
            })
        })
        fetch.addCase(responsePage.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        })
    }
})

export const {likedPosts} = pageSlice.actions

export default pageSlice.reducer