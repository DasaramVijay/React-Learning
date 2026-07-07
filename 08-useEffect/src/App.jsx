import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log("A changing");
  }
  function bChanging(){
    console.log("B changing");
  }

  useEffect(()=>{
    bChanging();
  },[b])

  return (
    <div>
      <h1>A is: {a}</h1>
      <h1>B is: {b}</h1>
      <button onClick={()=>{
        setA(a+1);
      }}>ChangeA</button>
      <button onClick={()=>{
        setB(b+2);
      }}>ChangeB</button>
    </div>
  )
}

export default App
