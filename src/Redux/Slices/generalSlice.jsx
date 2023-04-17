import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
    name: "general",
    initialState: {
        db: null,
    },
    reducers: {
        setDB: (state, action) => {
            state.db = action.payload;
        }
    }
})
export const { setDB } = generalSlice.actions;
export default generalSlice.reducer;