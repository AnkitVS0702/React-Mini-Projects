import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <UserContextProvider>
        <h2>Ankit V Shiksharthi</h2>
        <Login />
        <Profile />
      </UserContextProvider>
  
  )
}

export default App
