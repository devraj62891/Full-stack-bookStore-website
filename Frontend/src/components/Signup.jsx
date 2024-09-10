import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div  className="p-5 rounded-md ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="p-3">
              <span>Name</span>
              <br />
              <input
                type="text"
                className="rounded-md outline-none w-80 m-2"
                placeholder="enter your full name"
              />
              <br />
              <span>Email</span>
              <br />
              <input
                type="email"
                className="rounded-md outline-none w-80 m-2"
                placeholder="please enter your email"
              />
              <br />
              <span>Password</span>
              <br />
              <input
                type="password"
                className="rounded-md outline-none w-80 m-2"
                placeholder="please enter your password"
              />
            </div>
            <div className="flex justify-around mt-3">
              <button className="bg-pink-400 dark:bg-pink-400 dark:hover:bg-pink-400 hover:bg-pink-300 text-white rounded-md p-2 duration-300">
                SignUp
              </button>
              <div className="">
                Have an account?{" "}
                <button
                  className="text-blue-500 cursor-pointer underline ml-1"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
