import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import closeIcon from "../public/close-line-icon.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="sticky w-full top-0 bg-black md:p-4 z-20 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 transition-all duration-300 ease-in-out border-b-2 border-transparent">
          <Link
            to="/"
            className="flex items-center rtl:space-x-reverse text-white"
          >
            <span className="md:text-2xl text-xl tracking-wide whitespace-nowrap">
              ar
              <span className="text-[#FF6014] md:text-lg font-semibod">●</span>
              ranm
              <span className="text-[#FF6014] md:text-lg font-semibold">●</span>
              l
            </span>
          </Link>
          <div className="hidden md:flex md:space-x-8 rtl:space-x-reverse">
            <ul className="flex text-white text-sm  md:gap-4">
              <li>
                <Link
                  to="/"
                  className={`px-3 py-2 transition-all duration-300 ease-in-out ${
                    isActive("/") ? "text-orange-500" : "hover:text-orange-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className={`px-3 py-2 transition-all duration-300 ease-in-out ${
                    isActive("/project")
                      ? "text-orange-500"
                      : "hover:text-orange-600"
                  }`}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`px-3 py-2 transition-all duration-300 ease-in-out ${
                    isActive("/blog")
                      ? "text-orange-500"
                      : "hover:text-orange-600"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className={`px-3 py-2 transition-all duration-300 ease-in-out ${
                    isActive("/skills")
                      ? "text-orange-500"
                      : "hover:text-orange-600"
                  }`}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/connect"
                  className={`px-3 py-2 bg-[#FF6014] rounded-md text-black transition-all duration-300 ease-in-out  ${
                    isActive("/connect")
                      ? "hover:text-black"
                      : "hover:text-white"
                  }`}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2 justify-center text-2xl text-white hover:text-orange-600 focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={`fixed top-0 left-0 w-full h-screen md:w-auto bg-black text-white shadow-xl transform transition-transform ease-in-out duration-500 ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } md:hidden`}
          >
            <div className="flex items-center justify-between p-4 transition-all duration-300 ease-in-out border-b border-white">
              <Link to="" className="text-2xl ml-2">
                <button
                  type="button"
                  className="md:hidden"
                  onClick={toggleMenu}
                >
                  <img
                    src={closeIcon}
                    className="invert w-4 h-4"
                    alt="Close"
                    srcset=""
                  />
                </button>
              </Link>
              <Link
                to="/connect"
                className={`block py-2 text-xs px-4 text-black bg-[#FF6014] rounded ${
                  isActive("/connect")
                    ? "text-white"
                    : "hover:text-white"
                }`}
                onClick={toggleMenu}
              >
                Contact Me
              </Link>
            </div>
            <ul className="flex flex-col mt-4 gap-4 p-4">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-4 rounded ${
                    isActive("/") ? "text-orange-500" : "hover:text-orange-600"
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className={`block py-2 px-4 rounded ${
                    isActive("/project")
                      ? "text-orange-500"
                      : "hover:text-orange-600"
                  }`}
                  onClick={toggleMenu}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`block py-2 px-4 rounded ${
                    isActive("/blog")
                      ? "text-orange-500"
                      : "hover:text-orange-600"
                  }`}
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className={`block py-2 px-4 rounded ${
                    isActive("/skills")
                      ? "text-orange-500"
                      : "hover:text-orange-600"
                  }`}
                  onClick={toggleMenu}
                >
                  Skills
                </Link>
              </li>
            </ul>
            <div className="flex items-center h-56 text-xl justify-center gap-6">
              <a
                href="https://github.com/ASquare04"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com/aroranmol04"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
              >
                <i class="fab fa-x-twitter"></i>
              </a>
              <a
                href="https://linkedin.com/in/anmolarora0401"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="absolute bottom-24 left-0 right-0 text-center text-white pb-4">
            Owner © 2024. All Rights Reserved.
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
