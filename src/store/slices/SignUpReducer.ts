import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {actionState} from "../../interface/actionState";

export const responseRegister = createAsyncThunk(
    'signUp/responseRegister',
    async function (body: object, {rejectWithValue}) {
        try {
            const response = await fetch('https://reqres.in/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error;
            }


            const data = await response.json();

            localStorage.setItem('token', data.token)

            return data

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState: actionState = {
    action: '',
    error: null
}

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {},
    extraReducers: (fetch) => {
        fetch.addCase(responseRegister.pending, (state, action) => {
            state.status = 'loading';
            state.error = null
        })
        fetch.addCase(responseRegister.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.action = action.payload
        })
        fetch.addCase(responseRegister.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        })
    }
})

export const {} = signUpSlice.actions

export default signUpSlice.reducer