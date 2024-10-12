import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaWhatsapp ,FaFacebookMessenger } from 'react-icons/fa'; // Import social icons



const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 font-poppins py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="max-w-6xl w-full text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          I'm open to remote work and available for new projects. Let's connect!
        </p>
      </div>

      {/* Location and Availability */}
      <div className="max-w-4xl w-full text-center mb-8">
        <p className="text-md mb-4">
          <strong>Location:</strong> Kigali, Rwanda | Available for Remote and In-person Projects
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl mb-8">
        <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
        <form
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree URL or any form handling URL
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            className="p-4 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="md:col-span-2 p-4 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          ></textarea>
          <motion.button
            type="submit"
            className="md:col-span-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>

     
      {/* Social Media Icons */}
      <div className="flex space-x-6 justify-center mb-8">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-600 transition">
          <FaLinkedin /> {/* LinkedIn */}
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noreferrer" className="text-3xl hover:text-gray-900 transition">
          <FaGithub /> {/* GitHub */}
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-400 transition">
          <FaTwitter /> {/* Twitter */}
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noreferrer" className="text-3xl hover:text-pink-500 transition">
          <FaInstagram /> {/* Instagram */}
        </a>
      </div>

      {/* Downloadable Resume */}
      <div className="flex justify-center mb-8">
        <a
          href="path/to/your/resume.pdf" // Replace with actual resume path
          download="Angelique_Munyangeyo_Resume.pdf"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Calendar Integration (e.g., Calendly) */}
      <div className="flex justify-center mb-8">
        <a
          href="https://calendly.com/your-schedule" // Replace with your Calendly link
          className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
        >
          Schedule a Meeting
        </a>
      </div>

      {/* Testimonials */}
      <div className="w-full mb-8">
        <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
        <div className="flex flex-col lg:flex-row justify-around gap-4">
          <blockquote className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
            <p>"Angelique delivered excellent work on our full-stack project. Highly recommend!"</p>
            <cite className="block mt-4 text-gray-700">- Client Name</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
            <p>"Very professional, with great communication throughout the project."</p>
            <cite className="block mt-4 text-gray-700">- Client Name</cite>
          </blockquote>
        </div>
      </div>

      {/* FAQs */}
      <div className="w-full mb-8">
        <h3 className="text-2xl font-bold mb-4">FAQs</h3>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow-lg">
            <summary className="font-semibold cursor-pointer">What services do you offer?</summary>
            <p className="mt-2">
              I specialize in full-stack development, including front-end (React) and back-end (Node.js, MongoDB).
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow-lg">
            <summary className="font-semibold cursor-pointer">Are you available for remote work?</summary>
            <p className="mt-2">Yes, I am available for remote work worldwide.</p>
          </details>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full mb-8">
        <h3 className="text-2xl font-bold mb-4">Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=your-location" // Replace with your map embed link
          width="100%"
          height="300"
          className="rounded-lg shadow-lg"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center mb-8">
        <a href="mailto:your-email@example.com" className="px-6 py-3 bg-customGreen text-white rounded-full font-semibold hover:bg-green-700 transition">
          Send Me an Email
        </a>
      </div>

      {/* WhatsApp/Messenger Links */}
      <div className="flex space-x-6 justify-center mb-8">
        <a href="https://wa.me/your-whatsapp-number" className="text-2xl hover:text-green-600 transition">
          <FaWhatsapp/>{/* WhatsApp */}
        </a>
        <a href="https://m.me/your-messenger-id" className="text-2xl hover:text-blue-600 transition">
       <FaFacebookMessenger /> {/* Messenger */}
</a>
      </div>
    </motion.section>
  );
};

export default Contact;
