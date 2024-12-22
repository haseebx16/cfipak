import React from 'react'
import { font2 } from '../font/poppins'

const Welcome = () => {
  return (
    <div className={`${font2.className}`}>
        <div className='flex flex-col justify-center items-center mt-8'>
            <h1 className='text-4xl'>Welcome <span className='text-sky-900 font-bold'>Combined Freight International</span></h1>
            <p className='text-gray-500 max-w-2xl text-center mt-4 '>We are pleased to welcome you to one of the most reliable and efficient freight forwarding company in Pakistan that will meet all your freight and logistics requirements efficiently and economically.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center md:space-x-8 items-center mt-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl'>WHO WE ARE</h1>
                <p className='text-gray-500 max-w-sm text-sm'>CFI provides comprehensive freight forwarding / logistics services for customers all over Pakistan. Our staff is competent and expert in handling every type of cargo, from small or fragile cargo to moving massive quantities of cargo across vast distances according to customer requirements. No place is too far or too near for our logistics experts who monitor your consignment until it is satisfactorily delivered to its ultimate destination(s). You will experience the most personalized logistics solutions with world class services.
                    Our clients consider our company as an integral part of their import and export freight, because we offer the best freight logistics for the largest range of cargo.</p>
            </div>
            <div>
                <img src='about-img.jpg' className='md:mt-0 mt-6'/>
            </div>
            <div>
                <img src='about-img.jpg' className='md:mt-0 mt-6'/>
            </div>
        </div>
    </div>
  )
}

export default Welcome