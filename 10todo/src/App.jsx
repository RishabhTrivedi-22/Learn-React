import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (taskItem) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...taskItem }]);
  };

  const updateTask = (id, taskItem) => {
    setTodos((prev) =>
      prev.map((prevTask) => (prevTask.id === id ? taskItem : prevTask))
    );
  };

  const deleteTasks = (id) => {
    setTodos((prev) => prev.filter((prevTask) => prevTask.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, completeStatus: !prevTask.completeStatus }
          : prevTask
      )
    );
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todos"));

    if(todoList && todoList.length > 0) {
      setTodos(todoList)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTask, updateTask, deleteTasks, toggleStatus }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}
                  className="w-full">
                    <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
