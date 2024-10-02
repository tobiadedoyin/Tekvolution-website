import React, { useState } from "react";
import Techvolution from "../assets/Techvolution.png"
const Navbar = () => {

    const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  
  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsProductsOpen(false); // Close other dropdown
  };

  // Toggle products dropdown
  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsServicesOpen(false); // Close other dropdown
  };
  return (
    
    <nav className="sticky ">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Company Logo */}
        <div className="flex items-center pt-2 ">
          <img
            src={Techvolution} 
            alt="Techvolution"
              className="h-[8rem] w-[12rem] "
          />
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-gray-800 hover:text-blue-600">
            Home
          </a>
          <a href="#about-us" className="text-gray-800 hover:text-blue-600">
            About Us
          </a>

          {/* Our Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="flex items-center text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              Our Services
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white border shadow-lg mt-2 rounded-lg w-48 z-10">
                <a
                  href="#software-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Software Development
                </a>
                <a
                  href="#product-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Product Development
                </a>
                <a
                  href="#talent-development"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Talent Development/Outsourcing
                </a>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              Products
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductsOpen && (
              <div className="absolute bg-white border shadow-lg mt-2 rounded-lg w-48 z-10">
                <a
                  href="#wash-connect"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Wash Connect
                </a>
              </div>
            )}
          </div>

          <a href="#academy" className="text-gray-800 hover:text-blue-600">
            Academy
          </a>
          <a href="#contact-us" className="text-gray-800 hover:text-blue-600">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar