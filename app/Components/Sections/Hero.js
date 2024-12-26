"use client";

const Hero = () => (
  <div className="relative">
    <img
      src="/slider-1.jpg"
      alt="Background"
      className="w-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to CFI</h1>
    </div>
  </div>
);

export default Hero;
