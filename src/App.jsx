import { useState } from 'react'
import './App.css'
import { Header,DisplayTask,AddTask } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AddTask />
      <DisplayTask />
      
    </>
  )
}

export default App
