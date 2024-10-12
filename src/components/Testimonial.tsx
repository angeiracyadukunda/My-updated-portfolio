import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO at Tech Solutions',
      review:
        'Angelique is a highly skilled developer who transformed our project ideas into reality. Her attention to detail and dedication to the project made a significant impact on our success. I highly recommend her to anyone looking for a talented full-stack developer.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager at InnovateCorp',
      review:
        'Working with Angelique was a seamless experience. She effectively communicated throughout the development process and always met deadlines. Her ability to adapt and solve problems on the fly is impressive. The final product exceeded our expectations!',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'David Johnson',
      role: 'CTO at WebWorks',
      review:
        'Angelique’s technical expertise is unparalleled. She handled complex challenges with ease and always delivered top-notch work. Her passion for technology is evident, and I look forward to collaborating with her on future projects.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Sarah Brown',
      role: 'Lead Designer at Creative Hub',
      review:
        'The creativity and skill that Angelique brought to our project were outstanding. She has an eye for design and a deep understanding of user experience. I would recommend her to any team looking to elevate their web presence.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Michael Lee',
      role: 'Project Manager at StartUp Inc.',
      review:
        'Angelique was an integral part of our project. Her development skills helped us launch ahead of schedule. She is not only talented but also a joy to work with. I hope to work with her again in the future.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-20 px-6 lg:px-20 font-poppins"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-customGreen">Testimonials</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 flex-1">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
