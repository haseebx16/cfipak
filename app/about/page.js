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
        <div>
            <div className='flex justify-center items-center flex-col m-5'>
                <div className='flex justify-center items-center flex-col md:flex-row mb-5'>
                    <img data-aos="flip-left" src='about-us-image-1.jpg' alt='About Us Image 1' className='w-full md:w-[30rem] h-auto' />
                    <div className='w-full md:w-1/2 p-5'>
                        <h2 data-aos="fade-down" className='text-2xl font-bold'>About Us</h2>
                        <p data-aos="fade-up" className='text-md text-gray-500 max-w-md'>CFI was established in 2001 with the aim of providing a comprehensive variety and choice of freight forwarding/logistics services in Pakistan. We hire only the best, most competent, motivated and dedicated logistics management experts and specialists which has enabled the company to achieve remarkable progress and growth within a very short period of time. The company has reliable branches in nearly every part of the world. CFI uses the latest state of the art technological methods, collaborative work and contemporary logistics perceptions which constantly added to our list of clients because of the efficiency of our work methods.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:flex-row items-center mb-5'>
                    <div className='w-full md:w-1/2 p-5'>
                        <h2 data-aos="fade-down" className='text-2xl font-bold'>Our Mission</h2>
                        <p data-aos="fade-down" className='text-md text-gray-500 max-w-md'>We aim to provide the most efficient and best freight services that can compete with any other logistics and freight services anywhere in the world. We also provide the most economical and effective solutions for your specific needs, and use the cumulative expertise of our professionals to ensure that your cargo reaches its destination effectively, quickly and without being damaged in any manner.</p>
                    </div>
                    <img data-aos="flip-right" src='about-us-image-2.jpg' alt='About Us Image 2' className='w-full md:w-[30rem] h-auto' />
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default page