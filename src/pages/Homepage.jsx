import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from 'typed.js';

import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const iconsRef = useRef([]);
  const typedRef = useRef(null);

  useEffect(() => {

    const typed = new Typed(typedRef.current, {
      strings: ['Frontend..', 'Machine Learning..', 'Database..', 'Backend..'],
      typeSpeed: 100, 
      backSpeed: 100,
      loop: true,
    });

    // GSAP animations for icons
    iconsRef.current.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        { y: -100, opacity: 0, scale: 1.15 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.15,
          ease: "power2.out",
          scale: 0.85,
          scrollTrigger: {
            trigger: icon,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="md:hdden text-white font-thin flex justify-center md:text-3xl text-xl p-4 m-8">
          Ask me&nbsp; <span ref={typedRef} className="text-transparent font-semibold bg-clip-text bg-gradient-to-r to-teal-200 from-blue-500"></span>
        </h1>
      <section className="relative flex flex-col items-center h-96 justify-center">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Hi there.. <span className="text-blue-500">I'm Anmol.</span>{" "}
        </h1>
        <h1 className="mb-4 text-xl font-extrabold text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-purple-600">
            Self proclaimed,
          </span>{" "}
          Code polyglot!
        </h1>

        <img
          ref={(el) => (iconsRef.current[0] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
          className="w-10 h-10 md:w-20 md:h-24 md:block icon absolute top-5 left-12 rotate-12 hover:cursor-pointer"
        />
        <img
          ref={(el) => (iconsRef.current[1] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="Java"
          className="w-10 h-10 md:w-20 md:h-24 md:block icon absolute top-5 right-12 -rotate-12"
        />
        <img
          ref={(el) => (iconsRef.current[2] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML5"
          className="w-10 h-10 md:w-20 md:h-24 md:block icon absolute bottom-10 left-24 rotate-12"
        />
        <img
          ref={(el) => (iconsRef.current[3] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS3"
          className="w-10 h-10 md:w-20 md:h-24 md:block icon absolute bottom-10 right-24 -rotate-12"
        />
        <img
          ref={(el) => (iconsRef.current[4] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-10 h-10 md:w-20 md:h-24 hidden md:block icon absolute -bottom-36 left-24 -rotate-12"
        />
        <img
          ref={(el) => (iconsRef.current[5] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="w-10 h-10 md:w-20 md:h-24 md:block icon absolute -bottom-24 right-6 md:right-1/4 -rotate-12"
        />
        <img
          ref={(el) => (iconsRef.current[6] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="Express"
          className="invert w-10 h-10 md:w-20 md:h-24  md:block icon absolute -bottom-24 left-6 md:left-1/3 rotate-12"
        />
        <img
          ref={(el) => (iconsRef.current[7] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-10 h-10 md:w-20 md:h-24 md:block icon absolute top-24 right-1 md:-top-10 md:right-1/4"
        />
        <img
          ref={(el) => (iconsRef.current[8] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-10 h-10 md:w-20 md:h-24  md:block icon absolute top-24 left-1 -rotate-12 md:-top-10 md:left-1/4"
        />
        <img
          ref={(el) => (iconsRef.current[9] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Git"
          className="w-10 h-10 md:w-20 md:h-24 hidden md:block icon absolute -bottom-36 right-24 -rotate-12"
        />
        <img
          ref={(el) => (iconsRef.current[10] = el)}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="MySQL"
          className="w-10 h-10 md:w-20 md:h-24 hidden md:block icon absolute -bottom-4 left-1/2 "
        />
      </section>

      <div className="p-24 mt-24">
        <About />
      </div>
      <Hero />
    </>
  );
};

export default Homepage;
