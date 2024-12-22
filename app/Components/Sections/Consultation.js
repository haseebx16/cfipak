"use client";

import React from 'react'
import { font2 } from '../font/poppins'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Consultation = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, [])

  return (
    <div className={`${font2.className} bg-sky-900 text-white w-full mt-12 md:mt-0  overflow-hidden   `}>
        <div className='flex flex-col items-center p-6'>
            <div className='text-center'>
                <h1 data-aos="fade-down" className='text-2xl md:text-4xl'>Get a free & fast consultation</h1>
                <p data-aos="fade-left" className='text-sm md:text-xl text-center mt-3'>We're looking forward to contact you</p>
                <h1 data-aos="fade-right" className='text-2xl md:text-4xl text-center mt-2'>Call Us UAN: 111-000-234</h1>
                <button data-aos="fade-up" className='py-2 px-6 border mt-2 border-white text-md'>Get a Quote</button>
            </div>
        </div>  
    </div>
  )
}

export default Consultation