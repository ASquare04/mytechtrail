import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      blobRef.current,
      { opacity: 0, scale: 0.25 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: blobRef.current,
          start: "top 95%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-4 py-16 items-center justify-center flex-col">
        <div
          ref={blobRef}
          className="blob md:w-64 md:h-64 w-48 -translate-y-8 h-48 bg-cover rounded-full mb-8 border-2"
        ></div>
        
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font font-extralight  md:text-4xl text-lg mb-4 text-white">
          I aim to excel through innovation, leadership, and impactful contributions.
          </h1>

          <blockquote className="md:text-xl text-sm italic font-semibold text-white">
            <svg
              className="md:w-8 md:h-8 h-4 w-4  text-white mb-4"
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
          </blockquote>

          <div className="m-4 flex justify-center gap-4">
            <button className="flex items-center px-4 py-2 text-sm font-semibold bg-white rounded text-black hover:bg-black transition-all ease-in-out duration-500 hover:text-white">
              <a href="https://github.com/ASquare04" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github mr-2"></i>
                Just Visit
              </a>
            </button>
            
            <button className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-black  hover:text-blue-600 transition-all ease-in-out duration-500">
              <a href="https://www.linkedin.com/in/anmolarora0401/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin mr-2"></i>
                Connect Now
              </a>
            </button>
          </div>
          <p className="text-white text-sm md:text-lg">Try to be <span className="text-yellow-500">404</span> sometimes, not always the <span className="text-purple-500">200</span></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
