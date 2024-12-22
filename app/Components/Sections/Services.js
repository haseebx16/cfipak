"use client";

import React, { useState } from 'react';
import { font2 } from '../font/poppins';
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const [selectedService, setSelectedService] = useState('Air Freight'); // Default selected service

  const serviceTexts = {
    'Air Freight': 'CFI is among the foremost providers in Pakistan of air logistics services that offers wide-ranging and all-inclusive solutions and also provides exclusive carrying solutions to inaccessible areas. Customers have come to trust and depend upon us as their reliable source of transport logistics.',
    'Sea Freight': 'Combined Freight international provides support to its customers, trade and industry in the global exchange of goods.',
    'Air Chartering': 'Reserving a Charter with CFI for your own needs whether it be business or personal helps you to maintain control over schedule and guarantees that you are safely transported from anywhere in to wherever you need to travel.',
    'Rail Transportation': 'We can facilitate Rail Transportation to and from all four provinces in the country whether it be Southern to Northern Pakistan or Easter to Western Pakistan our network of trucks connects the entire country around the clock',
    'Warehouse': 'CFI can facilitate value added logistics services for catering to any requirements of clients who need to sub-contract their logistic and administrative processes. We have access to and provide to our clients all inclusive warehousing facilities both for importing or exporting cargo. We have the capabilities and facilities to provide the appropriate storage for every type of cargo.',
    'Logistics': 'As a leader in specialized transportation, we do more than just deliver high value goods on time. We provide our customer with Strategic Logistics solutions. Our commitment to exceeding all customer expectations drives us to continuously seek ways to save our customers time and money. Our goal, after all, is to help our customers become more competitive in their markets.'
  };

  return (
    <div className={`${font2.className} overflow-hidden`}>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 data-aos="fade-down" className="text-4xl">
          Our <span className="text-sky-900 font-bold">Services</span>
        </h1>
        <p data-aos="fade-up" className="text-gray-500 max-w-2xl text-center mt-4">
          Whether you are importing or exporting, Combined Freight International has everything covered from collecting the cargo from your premises to delivering it to your client at any destination/location in the world.
        </p>
      </div>

      <div className="flex flex-col md:flex-row bg-sky-900 justify-center md:space-x-8 items-center mt-12">
        <div data-aos="fade-right" className="flex flex-col space-y-2  p-4">
          {['Air Freight', 'Sea Freight', 'Air Chartering', 'Rail Transportation', 'Warehouse', 'Logistics'].map((service) => (
            <button
              key={service}
              className={`border p-2 border-white ${selectedService === service ? 'bg-white text-sky-900' : 'text-white'}`}
              onClick={() => setSelectedService(service)}
            >
              {service}
            </button>
          ))}
        </div>

        <div className="p-4 relative">
          <img
            data-aos="flip-left"
            src={selectedService === 'Air Freight' ? 'air-freight.jpg' : selectedService === 'Sea Freight' ? 'sea-freight.jpg' : selectedService === 'Air Chartering' ? 'air-chartering.jpg' : selectedService === 'Rail Transportation' ? 'rail-transportation.jpg' : selectedService === 'Warehouse' ? 'warehousing.jpg' : selectedService === 'Logistics' ? 'logistics.jpg' : 'air-freight.jpg'}
            alt={selectedService}
            className="w-96 h-72 md:w-[35rem] md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
            <h1 data-aos="fade-down" className='text-white md:text-4xl text-2xl font-bold pb-4'>{selectedService}</h1>
            <p data-aos="fade-up" className="text-white text-md p-4 md:text-lg font-light md:max-w-md text-center">
              {serviceTexts[selectedService]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
