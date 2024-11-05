import React from 'react'

const Card = () => {
  return (
    <div className="max-w-xs mx-auto border-2 rounded-md  overflow-hidden">

  <div className="relative">
    <img src="https://via.placeholder.com/300x200" alt="Product Image" className="w-full h-48 object-cover"/>

    <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 1 0 7.78L12 21.23l-8.84-8.84a5.5 5.5 0 1 1 7.78-7.78L12 5.29l1.06-1.06a5.5 5.5 0 0 1 7.78 0z"/>
      </svg>
    </button>
  </div>


  <div className="p-4">
    <p className="text-xl font-bold text-gray-800">₹ 10,500</p>
    <p className="text-gray-600">iPhone 12</p>


    <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
      <span>SAMUDRAPUR, MAHARASHTRA</span>
      <span>2 DAYS AGO</span>
    </div>
  </div>
</div>

  )
}

export default Card