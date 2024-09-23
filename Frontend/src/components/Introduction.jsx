import React from 'react'

function Introduction() {
    function handleLoginClick(){
        window.location.href="/"
    }
  return (
    <div>
      <h1 className="text-5xl font-bold text-purple-700 mb-6">
          Welcome to Our Bookstore!
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Discover a world of knowledge, stories, and imagination. Our bookstore offers a variety of books across genres, perfect for book lovers of all ages.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          From classic literature to the latest bestsellers, we bring the joy of reading to everyone. Browse through our collection, read free demos, and find your next favorite book!
        </p>
        <div className='flex ml-5 text-green-200 font-bold text-xl'>

        <p  >KINDLY LOGIN FROM HOME PAGE TO EXPLORE THE WEBSITE CONTENTS  
            
            
            </p> 
            <button
            onClick={handleLoginClick}
            className=' ml-11  bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointe'>LOGIN</button>
        </div>
    </div>
  )
}

export default Introduction
