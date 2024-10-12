import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-customGreen text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Angelique Munyangeyo</h2>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row mb-4">
            <a href="#home" className="mx-2 hover:text-gray-400">Home</a>
            <a href="#portfolio" className="mx-2 hover:text-gray-400">Portfolio</a>
            <a href="#contact" className="mx-2 hover:text-gray-400">Contact</a>
          </div>

          {/* Social Media Links */}
          <div className="flex">
            <a
              href="https://twitter.com"
              className="mx-2 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a
              href="https://github.com"
              className="mx-2 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> {/* GitHub Icon */}
            </a>
            <a
              href="https://linkedin.com"
              className="mx-2 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">
        &copy; {new Date().getFullYear()} Angelique Munyangeyo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
