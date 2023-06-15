import { createSlice } from "@reduxjs/toolkit";
import { fakeData } from "../../assets/fakeData";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        list: [],
    },
    reducers: {
        setTodos: (state, action) => {
            state.list = action.payload;
        },
    },
})
export const { setTodos, testStore } = todosSlice.actions;
export default todosSlice.reducer;