import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Input />
    </>
  )
}

export default App
