import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  const add = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const sub = () => {
    setCounter(--counter)
  }
  

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={add}>Inc</button>
      <button onClick={sub}>Dec</button>
    </>
  )
}

export default App