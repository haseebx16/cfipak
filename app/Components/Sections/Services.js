import React from 'react'
import { font2 } from '../font/poppins'

const Services = () => {
  return (
    <div className={`${font2.className}`}>
        <div className='flex flex-col justify-center items-center mt-8'>
            <h1 className='text-4xl'>Our <span className='text-sky-900 font-bold'>Services</span></h1>
            <p className='text-gray-500 max-w-2xl text-center mt-4 '>Whether you are importing or exporting, Combined Freight International has everything covered from collecting the cargo from your premises to delivering it to your client at any destination/location in the world..</p>
        </div>
        <div className='flex justify-center space-x-8 items-center mt-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl'>WHO WE ARE</h1>
                <p className='text-gray-500 max-w-sm text-sm'>CFI provides comprehensive freight forwarding / logistics services for customers all over Pakistan. Our staff is competent and expert in handling every type of cargo, from small or fragile cargo to moving massive quantities of cargo across vast distances according to customer requirements. No place is too far or too near for our logistics experts who monitor your consignment until it is satisfactorily delivered to its ultimate destination(s). You will experience the most personalized logistics solutions with world class services.
                    Our clients consider our company as an integral part of their import and export freight, because we offer the best freight logistics for the largest range of cargo.</p>
            </div>
            <div>
                <img src='about-img.jpg'/>
            </div>
            <div>
                <img src='about-img.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Services