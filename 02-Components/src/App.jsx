import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card name = "Vijay" p = "hello i am vijay, how are you." img = 'https://plus.unsplash.com/premium_photo-1742455147775-4f5f6c09011b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card name = "Harish" p = "hello i am harish, how are you." img = 'https://images.unsplash.com/photo-1782830791542-c11c587b03af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App
