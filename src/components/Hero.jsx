import React from "react";
function Hero() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font font-serif font-extralight md:text-4xl text-lg mb-4 text-white">
            last but not least, i wanna thank me..
          </h1>

          <blockquote class="md:text-xl text-sm italic font-semibold text-gray-900 dark:text-white">
            <svg
              class="w-8 h-8 text-white mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p className="m-6">
              Let me win. But if I cannot win, let me brave in the attempt. For in the chronicles of life, effort always precedes triumph.
            </p>
            <p className="md:m-8 m-6 text-xs md:text-lg">Try to be <span className="text-yellow-500">#404</span> sometimes, not always the <span className="text-purple-500">#200</span></p>
          </blockquote>

          <div class="flex justify-center gap-4">
            <button class="flex items-center px-4 py-2 text-sm font-semibold bg-white rounded text-black hover:bg-black transition-all ease-in-out duration-500 hover:text-white">
              <a href="https://github.com/ASquare04" target="_blank">
              <i class="fab fa-github mr-2"></i>
              Just Visit
              </a>
            </button>
            
            <button class="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-black  hover:text-blue-600 transition-all ease-in-out duration-500">
              <a href="https://www.linkedin.com/in/anmolarora0401/" target="_blank">
              <i class="fab fa-linkedin mr-2"></i>
              Connect Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
