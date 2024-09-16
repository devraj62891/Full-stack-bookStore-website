import React from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
// import { useState,useEffect } from 'react';
import data from "../list.json"


function FreeBook() {
const book=data.filter((item)=>item.category==="Free")
  

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
