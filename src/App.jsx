import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const URL  = import.meta.env.VITE_HOME
  return (
    <>
      <div>
       <h1> Welcome Home page</h1>
       <h2>[{URL}]</h2>
       </div>
    </>
  )
}

export default App
