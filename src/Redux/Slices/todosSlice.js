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
        addUser: (state, action) => {
            const user = {
                user: {
                    id: state.list[state.list.length - 2].user.id + 1,
                    name: action.payload.name
                },
                todos: []
            }
            state.list.splice(state.list.length - 1, 0, user);
        },
        deleteCompleted: (state) => {
            state.list[1].todos = state.list[1].todos.filter(todo => todo.status !== 'completed')
        },
        deleteUser: (state, action) => {
            let indexToDelete = state.list.findIndex(column => column.user.id == action.payload && column.user.id !== 1 && column.user.id !== 2)
            state.list.splice(indexToDelete, 1)
        },
        updateUser: (state, action) => {
            let index = state.list.findIndex(column => column.user.id === action.payload.id)
            let updatedUser = state.list[index]
            for (let key in action.payload) {
                updatedUser[key] = action.payload[key]
            }
        }
    },
})
export const { setTodos, addUser, updateUser, deleteUser } = todosSlice.actions;
export default todosSlice.reducer;