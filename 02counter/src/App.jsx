import {useState} from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  const addCount = () => {
    if (count == 20){
      setCount(20)
    }
    else {
      setCount(count + 1)
    }
  }

  const removeCount = () => {
    if(count == 0){
      setCount(0)
    }
    else {
      setCount(count - 1)
    }
  }
  return (
    <>
      <h1>Vite React Counter Project</h1>
      <h2>Counter Value : {count}</h2>
      <p>{count}</p>
      <br />
      <button onClick={addCount}>Increase {count}</button>
      <button onClick={removeCount}>Decrease {count}</button>
    </>
  )
}

export default App
