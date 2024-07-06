import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";

const sentence = "Uhm, skillset? Yes I hold some. Just dive in..";

const Skillspage = () => {
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll("span");
    const timeline = gsap.timeline();

    timeline.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.025,
      }
    );

    timeline.fromTo(
      cardsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.2,
      },
      "+=0.15"
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center md:py-24 p-4 w-full text-white">
        <h1 className="text-md md:text-4xl" ref={textRef}>
          {sentence.split("").map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h1>
        <section className="body-font">
          <div className="container px-5 md:py-24 mx-auto">
            <div className="flex flex-wrap md:-m-4 text-justify">
              {[
                {
                  icon: "fab fa-python",
                  title: "Python",
                  subtitle: "PROGRAMMING LANGUAGE",
                  description: "Experienced in Python for data analysis, machine learning, and automation tasks.",
                  colorClass: "text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-blue-600",
                },
                {
                  icon: "fab fa-node-js",
                  title: "Node.js",
                  subtitle: "BACKEND DEVELOPMENT",
                  description: "Learning up more in Node.js for building scalable backend systems and RESTful APIs.",
                  colorClass: "text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-green-900 via-green-800", 
                },
                {
                  icon: "fas fa-database",
                  title: "Database",
                  subtitle: "DATABASE MANAGEMENT",
                  description: "Proficient in SQL and NoSQL databases for managing and analyzing large datasets.",
                  colorClass: "text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-red-400",
                },
                {
                  icon: "fab fa-react",
                  title: "React",
                  subtitle: "FRONTEND FRAMEWORK",
                  description: "Intermediate in React for building dynamic and responsive user interfaces.",
                  colorClass: "text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-blue-300", 
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="md:w-1/4 p-4"
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="flex flex-col items-center p-6 rounded-lg">
                    <i
                      className={`md:text-7xl text-5xl rounded object-cover object-center mb-6 ${skill.icon} ${skill.colorClass}`}
                      alt={skill.title}
                    />
                    <h3 className="tracking-widest text-zinc-400 text-xs font-medium title-font">
                      {skill.subtitle}
                    </h3>
                    <h2 className="text-lg md:text-2xl font-medium title-font m-4">{skill.title}</h2>
                    <p className="leading-relaxed text-base">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skillspage;
