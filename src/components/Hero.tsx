import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-customGreen rounded-3xl text-white font-poppins p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Resume Download Button */}
      <motion.div
        className="absolute top-8 right-8" // Adjust the position as necessary
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a
          href="path/to/your/resume.pdf" // Replace with the actual path to your resume
          download="Angelique_Munyangeyo_Resume.pdf"
          className="px-4 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-300 transition md:px-6 md:py-3"
        >
          Download CV
        </a>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Profile Picture */}
        <img
          src="path/to/your/profile-picture.jpg" // Replace with the actual path to your profile picture
          alt="Angelique Munyangeyo"
          className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white md:w-48 md:h-48"
        />
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">Hi, I'm Angelique Munyangeyo</h1>
        <p className="text-lg mb-2 md:text-xl">A Passionate Full Stack Developer</p>
        <p className="text-md md:text-xl max-w-2xl mb-6">
          Specializing in React, Node.js, and MongoDB to build dynamic applications
          with intuitive user experiences and cutting-edge backend systems.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row space-x-0 md:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <a
          href="#portfolio"
          className="mb-2 md:mb-0 px-4 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-300 transition md:px-6 md:py-3"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-4 py-2 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition md:px-6 md:py-3"
        >
          Hire Me
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
