"use client";

import React from 'react'
import Nav from '../Components/Sections/Nav'
import Footer from '../Components/Sections/Footer'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const page = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        })
    }, []);

  return (
    <>
        <Nav/>
        <div className="relative">
            <img
            src="/it-platform-banner.jpg"
            alt="Background"
            className="w-full object-cover h-[500px] md:h-[500px]"
            />
            <div className="absolute bg-black bg-opacity-70 inset-0 flex flex-col items-center justify-center">
                <div className="flex flex-col w-[70%]">
                    <h1 className="text-white md:mt-12 text-2xl md:text-4xl font-bold">ADVANCED SOLUTIONS TO MEET THE DEMANDS</h1>
                    <p className="text-white max-w-xl text-sm md:text-xl mt-4">End to end solutions with control over shipment provided and ease of tracking the shipments in real time</p>
                </div>
            </div>
        </div>
        <div>
            <div className='flex justify-center items-center flex-col m-5'>
                <div className='flex justify-center items-center flex-col md:flex-row mb-5'>
                    <img data-aos="flip-left" src='it-platform-image-1.jpg' alt='About Us Image 1' className='w-full md:w-[30rem] h-auto' />
                    <div className='w-full md:w-1/2 p-5'>
                        <h2 data-aos="fade-down" className='text-2xl font-bold'>IT Platform</h2>
                        <p data-aos="fade-up" className='text-md text-gray-500 max-w-md'>The IT platforms make it easier for customers for the management of booking facilities and monitoring their consignments. It also helps for the calculation of duties and taxes so that you know how much money the consignment will cost inclusive of everything. The IT platforms will also help in obtaining insurance coverage for the customer. Combined Freight International uses logistics software that meets exceptional needs for brining value to your business and organizing shipping and logistics management.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default page