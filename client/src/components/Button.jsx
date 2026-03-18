import React from 'react'

function Button({ title, size, variant, onClick }) {

    const SIZE_CLASSES = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg"
    }

    const VARIANT_CLASSES = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600"
    }
  return (
    <div>
      <button
        className={`${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} rounded shadow cursor-pointer`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
