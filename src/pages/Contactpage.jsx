import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { Toaster, toast } from 'react-hot-toast';

function Contactpage() {
  const email = "aroranmol722@gmail.com";
  const location = "New Delhi, India";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Show sending message
      toast.loading('Sending message...', { duration: 2000 });

      emailjs
        .sendForm(
          "service_brtkilp",
          "template_slmhp9k",
          e.target,
          "TkRm0yF7ofkC9h3Oc"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
            toast.success('Message Sent!');
          },
          (error) => {
            console.log(error.text);
            // Show error message
            toast.error('Error submitting form. Please try again later.');
          }
        );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8 md:p-12 p-4">
        {/* Left Section */}
        <div className="md:w-1/2 text-white p-4 flex flex-col justify-center">
          <h1 className="md:text-6xl text-3xl">
            Let's brainstorm something{" "}
            <span className="text-green-400 font-semibold">exciting</span>{" "}
            together
          </h1>

          <div className="flex flex-col md:text-2xl mt-12 gap-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
              <a href={`mailto:${email}`} className="text-xl hover:underline">
                {email}
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4" />
              <span className="text-xl">{location}</span>
            </div>
          </div>
          <div className="flex items-center md:text-3xl text-2xl mt-8 space-x-6">
            <a
              href="https://github.com/ASquare04"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com/aroranmol04"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com/in/anmolarora0401"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <Toaster />
        <section className="md:w-1/2 p-4 body-font text-white">
          <div className="w-full md:h-auto">
            <form className="flex flex-col w-full p-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 m-2">
                <label htmlFor="name" className="leading-7 text-lg">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-4 m-2">
                <label htmlFor="email" className="leading-7 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-4 m-2">
                <label htmlFor="message" className="leading-7 text-lg">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black rounded border  border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 h-44 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="text-black x-tr bg-green-400 border-0 py-2 mt-4 px-6 font-semibold focus:outline-none transition-colors ease-in-out duration-300 hover:bg-green-600 rounded text-lg"
              >
                Send Now
                <i className="far fa-paper-plane ml-2"></i>
              </button>
              {isSubmitted && (
                <p className="text-green-400 text-sm mt-4">
                  Form submitted successfully!
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
      <div className="w-full hidden md:flex justify-center p-4 absolute bottom-0 text-white bg-[#121212]">
        Owner © 2024. All Rights Reserved.
      </div>
    </>
  );
}

export default Contactpage;
