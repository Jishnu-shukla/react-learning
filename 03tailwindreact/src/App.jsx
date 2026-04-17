import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl'>Tailwind test</h1>
      <div className='flex my-3.5 mx-3.5 px'>
        <Card username="Jishnu" btntext="Click Me!!" />
        <Card username="Jishnu" />
      </div>
    </>

  )
}

export default App