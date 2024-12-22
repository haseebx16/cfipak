"use client";

import React from 'react'
import { font2 } from '../font/poppins'
import Test from '../Parts/Test'
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

const Testimonials = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])

  return (
    <div className={`${font2.className} mt-12 overflow-hidden`}>
        <div className='flex justify-center items-center'>  
            <div className='flex flex-col justify-center items-center  relative'>
              <img src='/air-freight.jpg' className='w-screen h-screen md:h-[35rem]'/>
              <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col  items-center">
                <div className='flex flex-col items-center'>
                  <h1 data-aos="fade-down" className='text-white text-center pb-12 md:pb-0 pt-12 text-4xl font-bold'>Our Valued Customers</h1>
                  <p data-aos="fade-up" className='text-white hidden md:block pt-8 text-md font-light text-center max-w-2xl'>Our clients consider our company as an integral part of their import and export freight, because we offer the best freight logistics for the largest range of cargo</p>
                </div>
                <div className='flex flex-col md:w-[80rem] p-4 space-y-4 md:space-y-0 md:flex-row md:space-x-8 md:mt-16'>
                  <Test data-aos="fade-up-right" text={"What I’ve liked the most about working with CFI is their excellent personalized service and their attention to even the smallest details which they handle with the greatest efficiency."}
                    name={"Lina Mars"}
                    job={"Commercial Director"}
                    src={"pic1.jpg"}
                  />
                  <Test data-aos="fade-up-left" text={"In all my years of being as an exporter, I have found that CFI has given me the most satisfactory freight forwarding and logistics services. I highly recommend their efficiency and professionalism."}
                    name={"John Doe"}
                    job={" Director"}
                    src={"pic2.jpg"}
                  />
                </div>   
              </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials