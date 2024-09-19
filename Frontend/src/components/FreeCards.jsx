import React from "react";

function FreeCards({ item }) {
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
              <div className="badge p-3 cursor-pointer hover:text-white duration-100 badge-outline hover:bg-pink-400">
                <a href={item.url}>
                    Read now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeCards;
