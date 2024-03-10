import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple)

  const bgChange = () => {
    // console.log('clicked')
    let newBg = '#34495e'
    setBg(newBg)
  }

  return (
    <>
      <div style={ {backgroundColor: bg}}>
        <button onClick={bgChange}>Button</button>
      </div>
      
      
     
    </>
  )
}

export default App
