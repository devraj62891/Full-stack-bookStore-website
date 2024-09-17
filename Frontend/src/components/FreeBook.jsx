import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

// import { useState,useEffect } from 'react';



function FreeBook() {
const   [book,setBook]=useState([]);
useEffect(() => {
  // Define the async function to fetch book data using axios
  const fetchBookData = async () => {
      try {
          const response = await axios.get('http://localhost:4001/book/getBookData');
          console.log("books are present in database");
          
          setBook(response.data.filter((data)=>data.category==="Free")); // Axios automatically parses JSON responses
      } catch (error) {
          console.error("Error fetching book data:", error);
      }
  };

  // Call the async function
  fetchBookData();
}, []);
// const book=data.filter((item)=>item.category==="Free")
  

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20'>
        <div>
        <h1 className='font-semibold text-xl '>Free Offered courses </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quod deserunt quidem alias nam ab dicta suscipit quos veritatis quaerat fugit labore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse.</p>
        </div>
    
    <div className="slider-container">
      <Slider {...settings}>
       { book.map((item)=>(

        <Cards  item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>

    </>
  )
}

export default FreeBook
