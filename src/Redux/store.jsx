import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './Slices/userSlice'
import generalReducer from './Slices/generalSlice'

export default configureStore({
    reducer: {
        general: generalReducer,
        user: UserReducer
    }
});