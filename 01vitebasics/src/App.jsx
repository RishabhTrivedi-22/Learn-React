import Tea from "./Chai"

function App() {
  //* Using variables in jsx
  const userName = 'Rishabh Trivedi' 
  return (
    <>
      <h1>Chai aur React | Vite method</h1>
      <Tea />
      <h1>my name is {userName}</h1>
    </>
  )
}

export default App
