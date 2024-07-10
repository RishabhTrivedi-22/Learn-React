import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      taskName: 'Todo msg',
      completeStatus: false
    }
  ],
  addTask: (taskItem) => {},
  updateTask: (id, taskItem) => {},
  deleteTasks: (id) => {},
  toggleStatus: (id) => {}
})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider