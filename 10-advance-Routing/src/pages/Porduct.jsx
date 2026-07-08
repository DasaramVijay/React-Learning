import React from 'react'
import { Link } from 'react-router-dom'

const Porduct = () => {
  return (
    <div>
      <div className='flex gap-8 text-white justify-center m-3'>
        <Link className='font-medium text-2xl ' to="Mobile">Mobile</Link>
        <Link className='font-medium text-2xl ' to="Laptop">Laptop</Link>
      </div>
    </div>
  )
}

export default Porduct
