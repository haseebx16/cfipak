"use client";

import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const slides = [
    {
      image: "/slider-1.jpg",
      heading: "Welcome to CFI",
      text: "Empowering Businesses with Innovation",
    },
    {
      image: "/slider-2.jpg",
      heading: "Your Trusted Partner",
      text: "We Deliver Quality and Excellence",
    },
    {
      image: "/slider-3.jpg",
      heading: "Achieve More with Us",
      text: "Innovative Solutions for Modern Challenges",
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
              <h1 className="text-white text-4xl md:text-6xl font-bold">
                {slide.heading}
              </h1>
              <p className="text-white text-lg md:text-2xl mt-4">{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
