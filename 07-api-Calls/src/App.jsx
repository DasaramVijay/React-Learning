import React from 'react'
import axios from 'axios'

// data fetching through fetch api
function App() {
  async function getData(){
    const respone =await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await respone.json();
    console.log(data);
  }
  // data getting through axios
const getData1 =async ()=>{  
 const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(response.data);
  
}

  return (
    <div>
      <button onClick={getData}>GetData</button>
      <button onClick={getData1}>GetData</button>
    </div>
  )
}

export default App
