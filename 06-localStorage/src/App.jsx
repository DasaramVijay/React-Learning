import React from 'react'

function App() {
  localStorage.setItem('age','22');
  localStorage.setItem('rollno','18');
  const name = localStorage.getItem('name');
  const age = localStorage.getItem('age');
  console.log(name,age);
  localStorage.removeItem('e');

  localStorage.clear();
  
  return (
    <div>
      app
    </div>
  )
}

export default App
