import React, { useEffect, useRef } from "react";
import { RiEarthFill } from "react-icons/ri";
import gsap from "gsap";

function About() {
  const rightDivRef = useRef(null);

  useEffect(() => {
    const rightDiv = rightDivRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rightDiv,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to(rightDiv, {
      color:"rgb(59, 130, 246)",
      duration: 1, 

    });

    return () => {
      tl.kill(); 
    };
  }, []);

  return (
    <>
      <div className="middle text-white section  px-10 flex md:flex-row flex-col gap-10 items-center justify-between md:items-start relative md:py-10">
        <div className="left md:sticky md:top-28 left-0 md:w-[40%] w-[20rem]">
          <p className="text-justify text-lg leading-9">
            Emerging from the digital abyss, I am dedicated to revolutionizing
            technology with a bold proclamation: "Let's techify the world!" With
            a touch of digital wizardry, I flip the script on conventional
            technology, prioritizing innovation and user-centric design. Say
            goodbye to mundane tech and hello to a realm where complexity fades,
            capacity skyrockets, and outcomes sparkle with brilliance...
          </p>
          <h1 className="text-5xl mt-16 leading-snug">
            Disc
            <RiEarthFill className="inline-block align-middle text-blue-500" />
            ver the trails I've blazed in the landscape of tech
          </h1>
          <button className="mt-10" title="CV">
            <a
              href="https://drive.google.com/file/d/1m8D6o8ICVE8Wxe7-xIXKA30JUjgnB5N_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
            >
              <span>Check out</span>
            </a>
          </button>
        </div>
        <div
          ref={rightDivRef}
          className="right md:w-1/2 w-[18rem]"
          style={{ transition: "color 0.5s ease" }} 
        >
          <h2 className="md:text-6xl text-3xl">
            i’m an aspiring software developer proficient in python programming
            and machine learning with a solid background in frontend
            development, eager to collaborate on innovative projects within
            interdisciplinary teams. passionate about leveraging these
            technologies in areas such as natural language processing and data
            science.
          </h2>
        </div>
      </div>
    </>
  );
}

export default About;
