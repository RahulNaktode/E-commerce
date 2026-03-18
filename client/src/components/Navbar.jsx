import React from 'react'
import { Link } from 'react-router'
import Location from './Location'
import Search from './Search';

function Navbar() {
  return (
    <div className='bg-gray-300 text-white p-4 flex justify-between items-center'>
      <h1>E-commerce</h1>

      <Location />

      <Search type={"text"} placeholder={"Search products..."} />

      <div className="relative cursor-pointer text-lg">
            <Link to="/cart">🛒</Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              
            </span>
          </div>
    </div>
  )
}

export default Navbar
