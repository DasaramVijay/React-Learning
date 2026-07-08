import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-cyan-900 text-white justify-between px-10 py-5'>
      <h1 className='font-bold text-2xl'>Vijay</h1>
      <div className='flex gap-5'>
      <Link className='font-medium text-2xl ' to="/">Home</Link>
      <Link className='font-medium text-2xl ' to="/about">About</Link>
      <Link className='font-medium text-2xl ' to="/contact">Contact</Link>
      <Link className='font-medium text-2xl ' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
