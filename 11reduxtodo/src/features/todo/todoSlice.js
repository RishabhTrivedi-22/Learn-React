import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: 'Hello' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const task = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(task);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    }
  },

});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;