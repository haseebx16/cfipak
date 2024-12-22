"use client";

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { font2 } from '../font/poppins';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, [])

  return (
    <div className={`${font2.className} relative w-full h-screen md:h-[25rem] mt-12 bg-black`}>
      <img src={"/warehousing.jpg"} alt="Warehousing" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap items-start md:items-center h-full text-white p-4 md:p-8">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h1 data-aos="fade-down" className="text-2xl md:text-4xl mb-2 mt-12 md:mt-0">Company Info</h1>
          <p data-aos="fade-right" className='text-md md:max-w-sm'>CFI was created for providing a comprehensive variety and choice of freight forwarding / logistics services in Pakistan.</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h1 data-aos="fade-down" className="text-2xl md:text-4xl mb-2 mt-8 md:mt-0">Quick Links</h1>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Home</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;About</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Services</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Online Inquiry</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Booking Form</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Contact</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h1 data-aos="fade-down" className="text-2xl md:text-4xl mb-2 mt-2 md:mt-0">Our Services</h1>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Air Freight</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Air Chartering</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Sea Freight</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Warehousing</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Logistics</p>
          <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Custom Clearance</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h1 data-aos="fade-up" className="text-2xl md:text-4xl mb-2 mt-2 md:mt-0">Subscribe</h1>
          <input data-aos="fade-right" type="email" placeholder="Enter your email" className="p-2 w-full mb-8" />
          <div data-aos="fade-up" className="flex space-x-4 mb-4">
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
          </div>
        </div>
        <div className="w-full text-center">
          <p className="text-sm md:text-md">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;