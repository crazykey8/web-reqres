import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import signUpReducer from "./slices/SignUpReducer";
import pageReducer from "./slices/pageReducer";

export const store = configureStore({
    reducer: {
        signup: signUpReducer,
        page: pageReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector