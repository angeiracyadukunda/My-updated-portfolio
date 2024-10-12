import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaBriefcase, FaBlog, FaEnvelope, FaStar } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for hamburger and close

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button
          className="text-3xl text-blue-700 hover:text-green-500 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? <FiX /> : <FiMenu />} {/* Toggle between hamburger and close icon */}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64  bg-customGreen p-5 flex flex-col text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:block`}
      >
        <a href="">
          <h1 className="text-3xl font-bold mb-10 hover:text-green-500">My Portfolio</h1>
        </a>
        <nav className="flex flex-col space-y-4 pl-6">
          <a href="#home" className="hover:text-green-500 font-bold flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#about" className="hover:text-green-500 font-bold flex items-center space-x-2">
            <FaUserAlt />
            <span>About Me</span>
          </a>
          <a href="#portfolio" className="hover:text-green-500 font-bold flex items-center space-x-2">
            <FaBriefcase />
            <span>Portfolio</span>
          </a>
          <a href="#testimonials" className="hover:text-green-500 font-bold flex items-center space-x-2">
            <FaStar />
            <span>Testimonials</span>
          </a>
          <a href="#blog" className="hover:text-green-500 font-bold flex items-center space-x-2">
            <FaBlog />
            <span>Blog</span>
          </a>
          <a href="#contact" className="hover:text-green-500 font-bold flex items-center space-x-2">
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
