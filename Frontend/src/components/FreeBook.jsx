import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FreeCards from "./FreeCards.jsx";
import { AuthContext } from "../context/AuthProvider.jsx";

// import { useState,useEffect } from 'react';

function FreeBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    // Define the async function to fetch book data using axios
    const fetchBookData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/book/getBookData"
        );
        console.log("books are present in database");

        setBook(response.data.filter((data) => data.category === "Sample")); // Axios automatically parses JSON responses
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
    infinite: true,
    AuthContext:true,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20">
        <div>
          <h1 className="font-semibold text-xl ">Free sample pdf </h1>
          <p>
            Get a taste of some of our top-rated books—absolutely free! These
            sample books allow you to dive into the first few chapters without
            any cost. Whether you're into thrilling mysteries, heartwarming
            romances, or insightful non-fiction, we have something for everyone.
            Enjoy exclusive previews and see what captures your imagination
            before committing to a full purchase. Click below to start reading
            and discover your next favorite book for free!
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => (
              <FreeCards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
