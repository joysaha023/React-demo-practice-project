import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const bgChange = () => {
    console.log('clicked')
  }

  return (
    <>
      <div>
        <button onClick={bgChange}>Button</button>
      </div>
      
      
     
    </>
  )
}

export default App
