import React from "react";
import list from "../list.json"
import Cards from "./Cards";
import { Link } from "react-router-dom";
console.log(list);

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We are delighted to{" "}
            <span className="text-pink-400">have you here :)</span>
          </h1>
          <p className="mt-14 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsam! Aut maiores odio, officia nihil sint architecto ex culpa
            doloribus nisi voluptate sunt laudantium at unde error deserunt sed
            optio maxime consequatur repudiandae cupiditate officiis et ipsam
            pariatur. Vero dignissimos corrupti numquam reiciendis, accusamus
            magni.
          </p>
          <Link to={"/"}>
          
          <button className="justify-center mt-6 bg-pink-400 py-2 px-4 rounded hover:bg-pink-500 duration-200">
            {" "}
            Back
          </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
