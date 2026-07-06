import React from 'react'
import { useState } from 'react';

const App = () => {
  const[name, changeName] = useState('');

  const formHandler = (e)=>{
    e.preventDefault();
    console.log("form sunbmitted by",name)
    changeName('')
  }

  return (
    <div>
<form onSubmit={(e)=>{
  formHandler(e);
}}>
  <input type="text" value={name} placeholder='Enter your name' 
  onChange={(e)=>{
    changeName(e.target.value);
  }  
  }/>
  <button>Submit</button>
</form>    
  </div>
  )
}

export default App
