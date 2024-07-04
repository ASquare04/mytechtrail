import React from "react";
import Navbar from "../components/Navbar";

function Contactpage() {
  return (
    <>
      <Navbar />
      <section class="text-white body-font relative">
        <div class="container px-6 mt-6 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="md:w-2/3 w-full h-56 md:h-auto bg-cover rounded-lg overflow-hidden sm:mr-10 p-10"></div>
          <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="md:text-4xl mb-2 font-medium title-font">Anything, Something...</h2>
            <p class="leading-relaxed mb-5">
              Share your thoughts, messages and opinion
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-[#FF6014] border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              
              
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactpage;
