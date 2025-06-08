import { useState } from 'react'
import Home from './page/Home'

function App() {
  const [count, setCount] = useState(0)
  const URL  = import.meta.env.VITE_HOME
  return (
    <>
      <div>
       <h1> Welcome Home page - Tran van hung</h1>
       <h2>[{URL}]</h2>
       <Home />
       </div>
    </>
  )
}

export default App
