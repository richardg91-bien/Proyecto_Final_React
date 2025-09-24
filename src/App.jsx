import { useState } from 'react'
import ReactDOM from "react-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
