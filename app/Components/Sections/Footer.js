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
    <div className={`${font2.className} relative w-full h-screen mt-12 bg-black`}>
      <img src={"/warehousing.jpg"} alt="Warehousing" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 flex flex-col items-start h-full text-white p-4">
        <h1 data-aos="fade-down" className="text-2xl md:text-4xl mb-2 mt-12">Company Info</h1>
        <p data-aos="fade-right" className='text-md'>CFI was created for providing a comprehensive variety and choice of freight forwarding / logistics services in Pakistan.</p>
        <h1 data-aos="fade-down" className="text-2xl md:text-4xl mb-2 mt-8">Quick Links</h1>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Home</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;About</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Services</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Online Inquiry</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Booking Form</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Contact</p>
        <h1 data-aos="fade-down" className="text-2xl md:text-4xl mb-2 mt-2">Our Services</h1>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Air Freight</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Air Chartering</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Sea Freight</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Warehousing</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Logistics</p>
        <p data-aos="fade-right" className='text-md'>&#x2022;&nbsp;Custom Clearance</p>
        <h1 data-aos="fade-up" className="text-2xl md:text-4xl mb-2 mt-2">Subscribe</h1>
        <input data-aos="fade-right" type="email" placeholder="Enter your email" className="p-2 w-full mb-8" />
        <div data-aos="fade-up" className="flex space-x-4 mb-4">
          <FaFacebook className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaInstagram className="text-2xl" />
        </div>
        <p className="text-center text-sm md:text-md">© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;