import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import p1 from '../public/p1.png';
import p2 from '../public/p2.png';
import p3 from '../public/p3.jpg';
import p4 from '../public/p4.png';
import p5 from '../public/p5.png';
import p6 from '../public/p6.png';

const Projectpage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".gallery-img",
      { opacity: 0 },
      { opacity: 1, duration: 2, stagger: 0.3 }
    );
  }, []);

  return (
    <>
      <Navbar />
      <section className="text-white text-xs md:text-lg">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="md:flex flex-wrap">
            <div className="flex flex-wrap md:w-1/2">
              <div className="relative md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="gallery-img w-full object-cover h-full object-center block"
                  src={p2}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">The identification system that uses GMM, the machine learning model to predict the speaker based on voice pattern recieved.</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://bit.ly/gmm4speaker" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
              <div className="relative hidden md:p-2 p-1 w-1/2"></div>
              <div className="relative md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="gallery-img w-full object-cover h-full object-center block"
                  src={p5}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">Your go-to platform for discovering and sharing the best campfire locations. Express and MongoDB-powered.</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://github.com/ASquare04/campsite-insight" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
              <div className="relative md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="gallery-img w-full h-full object-cover object-center block"
                  src={p1}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">Marketplace bulit for selling the local regional arts, way to connect the seller of art to the buyer of digital art prints. Its a complete MERN stack based project.</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://github.com/ASquare04/116_Pixel_Craft" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/2">
              <div className="relative md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="gallery-img w-full h-full object-cover object-center block"
                  src={p3}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">Its primarily an eCommerce web store for the ayurveda based products. As a part of tech-stack I've used the React.js for the frontend and to manage the backend Strapi.io - Headless CMS is used.</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://abhirig.vercel.app/" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
              <div className="relative md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="gallery-img w-full object-cover h-full object-center block"
                  src={p6}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">A simple music system with HTML, CSS and JS, aligned with the theme of Spotify.</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://spotifyreplica.vercel.app/" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
              <div className="relative md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="gallery-img w-full object-cover h-full object-center block"
                  src={p4}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">An innovative fire prediction system desiged using advanced machine learning algorithms.</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://github.com/ASquare04/Blaze-Anticipation" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projectpage;
