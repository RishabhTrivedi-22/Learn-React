import { useState } from 'react'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AddTodo />
  )
}

export default App
