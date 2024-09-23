import React from "react";



function Banner() {
  function handleStartButtonClick(){
    window.location.href="/bookStore";
  }
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
        
          </div>
         
          <button
          onClick={handleStartButtonClick}
          className="btn btn-secondary mt-4 ">Get started</button>
      
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
        <img src="https://th.bing.com/th/id/OIP.QtvP_LZqgp7NaZX3_vdvbQHaJB?rs=1&pid=ImgDetMain" className="w-80 h-80 mx-auto mt-32 mr-28 rounded-3xl"  alt="bookstoer image" />
        </div>
      </div>
    </>
  );
}

export default Banner;
