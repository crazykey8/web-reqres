import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {actionState} from "../../interface/actionState";

export const responsePage = createAsyncThunk(
    'page/responsePage',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://reqres.in/api/users')

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

const initialState: actionState = {
    error: null,
    action: []
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {},
    extraReducers: (fetch) => {
        fetch.addCase(responsePage.pending, (state, action) => {
            state.status = 'loading';
            state.error = null
        })
        fetch.addCase(responsePage.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.action = action.payload.data
        })
        fetch.addCase(responsePage.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        })
    }
})

export const {} = pageSlice.actions

export default pageSlice.reducer