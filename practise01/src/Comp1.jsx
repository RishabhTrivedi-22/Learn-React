import React from 'react'
import { useState } from 'react'

function Comp1() {
  const [count, setCount] = useState(0)
  return (
    <button onClick = {() => setCount(count+1)}>Count: {count}</button>
  )
}

export default Comp1
