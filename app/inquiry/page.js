"use client";

import React from 'react';
import Nav from '../Components/Sections/Nav';
import Footer from '../Components/Sections/Footer';
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

const Inquiry = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, []);

  return (
    <>
      <Nav />
      <div className="relative">
            <img
            src="/online-banner.jpg"
            alt="Background"
            className="w-full object-cover h-[500px] md:h-[500px]"
            />
            <div className="absolute bg-black bg-opacity-70 inset-0 flex flex-col items-center justify-center">
                <div className="flex flex-col w-[70%]">
                    <h1 className="text-white md:mt-12 text-2xl md:text-4xl font-bold">TRACK THE PROGRESS AND REPORT ISSUES</h1>
                    <p className="text-white max-w-xl text-sm md:text-xl mt-4">Our expert centers have the required expertise to assist the customers for tracking the progress and provide resolution to customer queries</p>
                </div>
            </div>
        </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen md:h-[40rem] bg-white p-4">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                    data-aos="fade-up"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                  Company Name
                </label>
                <input
                    data-aos="fade-up"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="companyName"
                  type="text"
                  placeholder="Your Company Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">
                  Designation
                </label>
                <input
                     data-aos="fade-down"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="designation"
                  type="text"
                  placeholder="Your Designation"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                data-aos="fade-down"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                data-aos="fade-up"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                Comment
              </label>
              <textarea
              data-aos="fade-up"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                placeholder="Your Comment"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
              data-aos="fade-up"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
          data-aos="flip-right"
            src="/online-banner-image-1.jpg"
            alt="Inquiry"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inquiry;