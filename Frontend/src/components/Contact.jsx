import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-900 pt-20 flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <div className="w-full max-w-md relative">
          {/* Home button at the top-right corner */}

          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
          <form className="bg-white dark:bg-slate-400  shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email address"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Type your message"
                rows="4"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
              <a
                href="/"
                className="absolute right-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Home
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
