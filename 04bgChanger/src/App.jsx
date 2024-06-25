import { useState } from 'react'

function App() {
  const [color, setColor] = useState('pink')
  const [textColor, setTextColor] = useState('black')
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    > <h1 
      className='flex items-center justify-center h-screen text-7xl'
      style={{color: textColor}}>
      Background Changer</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl'>
          <button
          onClick={() => {setColor('red'), setTextColor('black')}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'red'}}>
            Red</button>
          <button 
          onClick={() => {setColor('green'), setTextColor('black')}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'green'} }>
            Green</button>
          <button 
          onClick={() => {setColor('Blue'), setTextColor('black')}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'blue'}}>
            Blue</button>
          <button 
          onClick={() => {setColor('yellow'), setTextColor('black')}} 
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'yellow'}}>
            Yellow</button>
          <button 
          onClick={() => {setColor('orange'), setTextColor('black')}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'orange'}}>
            Orange</button>
          <button 
          onClick={() => {setColor('indigo'), setTextColor('black')}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'indigo'}}>
            Indigo</button>
          <button 
          onClick={() => {setColor('white'), setTextColor('black')}} 
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'white'}}>
            White</button>
          <button 
          onClick={() => {setColor('black'), setTextColor('white')}} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'black'}}>
            Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
