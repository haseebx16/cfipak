"use client";

import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const slides = [
    {
      image: "/slider-1.jpg",
      heading: "THE BEST EVER TRANSPORT",
      text: "Combined Freight International strives to deliver your cargo faster than any other company and in good condition",
    },
    {
      image: "/slider-2.jpg",
      heading: "FLY HIGH AT LOW COST",
      text: "We take responsibility of delivery and being leaders in the logistics sector. We receive and send shipments safely on time to the destination",
    },
    {
      image: "/slider-3.jpg",
      heading: "MAXIMIZING SAFETY & REDUCING LOGISTICAL RISK",
      text: "Minimize the operational cost through our warehousing services with integrated supply chain solution and make the most from your business",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    pauseOnHover: true, 
  };
  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[500px] md:h-[500px]">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
              <div className="flex flex-col w-[70%]">
                <h1 className="text-white md:mt-12 max-w-xl text-2xl md:text-4xl font-bold">
                  {slide.heading}
                </h1>
                <p className="text-white max-w-xl text-sm md:text-xl mt-4">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
