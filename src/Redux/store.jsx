import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './Slices/userSlice'
import TodosReducer from './Slices/todosSlice'

export default configureStore({
    reducer: {
        user: UserReducer,
        todos: TodosReducer
    }
});