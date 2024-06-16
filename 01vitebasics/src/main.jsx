import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// * Using funtion directly in main.jsx to create element:
/* 
function MyApp() {
  return (
    <h1>Custom react element</h1>
  )
}
*/

// * Creating a custom element rather than the conventional function method:
/*
const anElement = (
  <a href="https://google.com" target='_blank'>CLick me</a>
)
*/

// * Using the react createElement method:
/*
const createReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'I am react element'
)
*/



ReactDOM.createRoot(document.getElementById('root')).
render(

    <App />

)
