import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';


const AboutMe: React.FC = () => {
  const [isOpen, setIsOpen] = useState({
    skills: true,
    education: false,
    projects: false,
    experience: false,
  });

  const toggleSection = (section: string) => {
    setIsOpen((prevState) => ({ ...prevState, [section]: !prevState[section] }));
  };

  return (
    <motion.section
      id="about"
      className="py-20 px-6 lg:px-20 font-poppins text-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-customGreen ">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <p className="text-lg mb-6">
            I’m a passionate full-stack developer specializing in both front-end and back-end
            technologies. I aim to deliver high-quality web applications with seamless user experiences.
          </p>

          {/* Skills Section */}
          <div className="mb-8">
            <h3
              className="text-2xl font-semibold cursor-pointer mb-4"
              onClick={() => toggleSection('skills')}
            >
              Technical Skills {isOpen.skills ? '▲' : '▼'}
            </h3>
            {isOpen.skills && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center">
                    <span>React</span>
                    <FaReact className="text-blue-500" />
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 mb-2">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span>Node.js</span>
                    <FaNodeJs className="text-green-500" />
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 mb-2">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span>MongoDB</span>
                    <SiMongodb className="text-green-600" />
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 mb-2">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span>JavaScript</span>
                    <FaJsSquare className="text-yellow-500" />
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 mb-2">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span>HTML & CSS</span>
                    <FaHtml5 className="text-orange-600" />
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-3 mb-2">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Education & Certifications */}
          <div className="mb-8">
            <h3
              className="text-2xl font-semibold cursor-pointer mb-4"
              onClick={() => toggleSection('education')}
            >
              Education & Certifications {isOpen.education ? '▲' : '▼'}
            </h3>
            {isOpen.education && (
              <div className="space-y-4">
                <div className="p-4 border rounded-lg shadow-sm bg-white">
                  <h4 className="text-lg font-semibold">Bachelor’s Degree in Information Technology</h4>
                  <p className="text-sm">University of Rwanda</p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm bg-white">
                  <h4 className="text-lg font-semibold">Full Stack Developer - SheCanCode Program</h4>
                  <p className="text-sm">Certification</p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm bg-white">
                  <h4 className="text-lg font-semibold">ALX Africa Software Engineering</h4>
                  <p className="text-sm">Certification</p>
                </div>
              </div>
            )}
          </div>

          {/* Personal Projects */}
          <div className="mb-8">
            <h3
              className="text-2xl font-semibold cursor-pointer mb-4"
              onClick={() => toggleSection('projects')}
            >
              Personal Projects {isOpen.projects ? '▲' : '▼'}
            </h3>
            {isOpen.projects && (
              <ul className="list-disc pl-5 text-lg space-y-2">
                <li>
                  <a href="#" className="text-blue-500 underline">Rwanda BloodBridge</a>: A platform to connect blood donors and hospitals across Rwanda.
                </li>
                <li>
                  <a href="#" className="text-blue-500 underline">Employee Management System</a>: A system to manage employee attendance, payroll, and requests.
                </li>
                <li>
                  <a href="#" className="text-blue-500 underline">Inventory Management System</a>: A platform for inventory tracking and request management.
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Experience Section */}
          <div className="mb-8">
            <h3
              className="text-2xl font-semibold cursor-pointer mb-4"
              onClick={() => toggleSection('experience')}
            >
              Work Experience {isOpen.experience ? '▲' : '▼'}
            </h3>
            {isOpen.experience && (
              <div className="space-y-4">
                <div className="p-4 border rounded-lg shadow-sm bg-white">
                  <h4 className="text-lg font-semibold">Full Stack Developer - Freelance</h4>
                  <p className="text-sm">
                    Developed web applications using React, Node.js, and MongoDB. Focused on delivering optimized user interfaces and backend logic.
                  </p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm bg-white">
                  <h4 className="text-lg font-semibold">Software Developer Intern - IT For All</h4>
                  <p className="text-sm">
                    Worked on developing HR and inventory management systems. Used modern web technologies to streamline internal processes.
                  </p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm bg-white">
                  <h4 className="text-lg font-semibold">Web Developer - ALX Africa Project</h4>
                  <p className="text-sm">
                    Collaborated with a team of developers to build scalable applications, improving system efficiency by 30%.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
