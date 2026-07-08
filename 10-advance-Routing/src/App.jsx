import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Porduct from './pages/Porduct'
import Laptop from './pages/Laptop'
import Mobile from './pages/Mobile'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
       <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/About' element = {<About />} />
          <Route path='/Contact' element = {<Contact />} />
          <Route path='/Product' element = {<Porduct />} />
          <Route path='/Product/Mobile' element = {<Mobile />} />
          <Route path='/Product/Laptop' element = {<Laptop />} />
          <Route path='*' element = {<NotFound />} />
        </Routes>
      <Footer /> 
    </div>
  )
}

export default App
