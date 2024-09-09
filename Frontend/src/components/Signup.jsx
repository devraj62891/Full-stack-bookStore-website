import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Login from "./Login";



function Signup() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div id="my_modal_3" className="  flex justify-center items-center h-screen  ">
        <div className="w-[600px]">

        <div className=" modal-box dark:bg-slate-700 ">
          <form  onSubmit={handleSubmit(onSubmit)} >
            {/* if there is a button in form, it will close the modal */}
            <Link
            
              to="/"
              className="duration-500 btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full name"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                {...register("name", { required: true })}
              />
               {errors.email && <span className="text-sm text-red-500 p-2 font-bold">This field is required</span>}
             
             
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                {...register("email", { required: true })}
              />
               {errors.email && <span className="text-sm text-red-500 p-2 font-bold">This field is required</span>}
             
             
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                {...register("password", { required: true })}
              />
               {errors.email && <span className="text-sm text-red-500 p-2 font-bold">This field is required</span>}
             
              <br />

            
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Already have acc?{" "}
                <Link
                to="/"
                
                  
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>
            

              </p>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
