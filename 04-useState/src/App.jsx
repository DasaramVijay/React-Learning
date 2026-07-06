import React from 'react'
import { useState } from 'react'

const App = () => {
  const [val, changeVal] = useState(0);
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={
        ()=>{
          changeVal(val+1);
        }
      }>Increse</button>
      <button onClick={
        ()=>{
          if(val > 0) return changeVal(val-1);
        }
      }>Decrese</button>
      <button onClick={
        ()=>{
          changeVal(0);
        }
      }>Reset</button>
    </div>
  )
}

export default App
