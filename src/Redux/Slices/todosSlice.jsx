import { createSlice } from "@reduxjs/toolkit";
import { fakeData } from "../../assets/fakeData";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        list: fakeData,
    },
    reducers: {
    }
})
export const { add_todo } = todosSlice.actions;
export default todosSlice.reducer;