import React from 'react'
import Input from './Input'

function Search({type, placeholder, value, onChange}) {
  return (
    <div >
        <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        className='border border-gray-300 px-3 py-1 bg-white text-gray-800 rounded w-full'
        />
    </div>
  )
}

export default Search
