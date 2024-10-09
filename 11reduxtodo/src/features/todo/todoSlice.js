import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  taskList: [{ id: 1, task: 'shopping' }]
};

export const todoSlice = createSlice({
  name: 'Task List',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const task = {
        id: nanoid(),
        task: action.payload
      };
      state.taskList.push(task);
    },
    removeTodo: (state, action) => {
      state.taskList = state.taskList.filter((task) => task.id !== action.payload);
    },
    // updateTodo: (state, action) => {
    //   const newTask = state.taskList.find((task) => task.id === action.payload.id);
    //   if (newTask) {
    //     newTask.task = action.payload.task;
    //   }
    // }
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;