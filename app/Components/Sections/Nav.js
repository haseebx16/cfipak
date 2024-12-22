"use client";

import React, { useState, useEffect } from "react";
import navLinks from "../data/navLinks";
import { font2 } from "../font/poppins";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className=" top-0 left-0  w-full z-50 bg-opacity-90 bg-white">
        <header
          className={`${font2.className} flex items-center justify-between px-4 py-3 bg-darkGrey`}
        >
          <Link href="/">
            <div className="flex justify-center items-center">
              <img
                src="/newlogocfi.png"
                alt="Logo"
                className="w-auto h-10 sm:h-10 md:h-20 lg:h-24"
              />
              <div className="hidden md:flex ml-8 space-x-8">
                <div className="text-sm">
                  <p className="font-medium text-black">Call Us On:</p>
                  <p className="text-black">1231231231</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-black">Email Us At:</p>
                  <p className="text-black">info@cfipak.com</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center bg-sky-900 p-3">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`${
                  activeLink === item.href ? "text-cyan-400" : "text-white"
                } mx-4 cursor-pointer`}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-sky-900 text-white z-40 flex flex-col items-center justify-center"
            >
              {navLinks.map((item) => (
                <motion.span
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  className="py-2 text-lg"
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.span>
              ))}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Image */}
      <div>
        <img
          src="/slider-1.jpg"
          alt="Background"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Nav;
