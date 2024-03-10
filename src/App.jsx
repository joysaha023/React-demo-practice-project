import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState('click me');

  const bgChange = () => {
    // console.log('clicked')
    let newBg = '#34495e'
    setBg(newBg)
    setName("Ouch!! : 😲")
  }

  const bgBack = () => {
    setBg(purple);
    setName("Ayyo!! : 😎")
  }

  return (
    <>
      <div style={ {backgroundColor: bg}}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
      </div>
      
      
     
    </>
  )
}

export default App
