import React from "react";



function Banner() {
  return (
    <>
      <div className={` max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row `}>
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 ">
          <div className="space-y-12">
            <h1 className="font-bold text-4xl">
              Hello, welcome here to learn someting
              <span className="text-pink-600"> new everyday!!</span>
            </h1>
            <p className="text-xl">
            Welcome to bookStore Discover a curated collection of books across genres, fostering imagination and knowledge. Enjoy personalized recommendations and cozy reading nooks. Happy reading!
            </p>
          <label className="input input-bordered flex items-center gap-2 dark:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow dark:text-slate-200" placeholder="Email" />
          </label>
          </div>
         
          <button className="btn btn-secondary mt-4 ">Get started</button>
      
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
        <img src="https://th.bing.com/th/id/OIP.QtvP_LZqgp7NaZX3_vdvbQHaJB?rs=1&pid=ImgDetMain" className="w-80 h-80 mx-auto mt-32 mr-28 rounded-3xl"  alt="bookstoer image" />
        </div>
      </div>
    </>
  );
}

export default Banner;
