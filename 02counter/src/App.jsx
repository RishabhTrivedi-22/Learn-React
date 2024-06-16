
import './App.css'

function App() {

  let count = 0
  const addCount = () => {
    console.log('Clicked', Math.random())
  }
  return (
    <>
      <h1>Vite React Counter Project</h1>
      <h2>Counter Value : {count}</h2>
      <br />
      <button onClick={addCount}>Increase</button>
      <button>Decrease</button>
    </>
  )
}

export default App
