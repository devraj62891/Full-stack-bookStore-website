import React from "react";
import { useAuth } from "../context/AuthProvider";

function FreeCards({ item }) {
  const [authUser, setAuthUser] = useAuth();
  const handleReadNowClick=()=>{
    alert("Login first")
  }

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-700 dark:text-white">
          <figure className="bg-cover bg-center">
            <img
              className="w-auto h-[400px]"
    
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary bg-yellow-300  border-none">FREE</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge p-3 cursor-pointer hover:text-white duration-100 badge-outline hover:bg-blue-500 hover:border-none">
                {
                  authUser? (
                    <a 
                
                
                  href={item.url}>
                      Read now
                  </a>
                  ):(
                    <button
                    onClick={handleReadNowClick}
                    >Read now</button>
                  )
                }
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeCards;
