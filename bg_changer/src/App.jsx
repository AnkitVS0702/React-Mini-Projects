import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {

  let [color, setColor] = useState("black")

  function handleColor(color) {
    return (
      () => {
        setColor(color)
      }
    )
  }

  const arr = ["red", "cyan", "green", "yellow"]
  const buttonList = []
  for (const item of arr) {
    buttonList.push(
      <button id={item} style={{ backgroundColor: item, color:'black' }} className="px-4 py-2" onClick={() => {return setColor(item) }} >
        {item}
      </button>
    );
  }

  return (
    <>
      <div style={{
        backgroundColor: color,
        minHeight: '100vh',
        width: '100%',
        color: 'white',
        margin: 0,
        padding: 0
      }}>
        <div className="flex gap-2">
          {buttonList} {/* Inject the pre-built array here */}
        </div>
      </div>
    </>
  )
}

export default App
