import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="p-3">
            <span>Email</span>
            <br />
            <input
              type="email"
              className="rounded-md outline-none w-80 m-2"
              placeholder="please enter your email"
            />
            <br />
            <span>Password</span><br />
            <input 
            type="password"
            className="rounded-md outline-none w-80 m-2 "
              placeholder="please enter your password"
            />
          </div >
          <div className="flex justify-around mt-3">
            <button
            className=" bg-pink-400 dark:bg-pink-400 dark:hover:bg-pink-400 hover:bg-pink-300 text-white rounded-md p-2 duration-300"
            >Login</button>
            <p >

          dont have acc?<Link to={"/signup"} className="text-blue-500 cursor-pointer underline ml-1">Sign up!</Link>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
