import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rwanda BloodBridge",
    description: "A platform that allows blood donors in Rwanda to register, schedule appointments, and track donations. The system rewards frequent donors and integrates with national health services.",
    techStack: ["Node.js", "MongoDB", "Express", "React", "Docker"],
    challenges: "Ensuring real-time appointment scheduling and managing large datasets for blood availability.",
    solution: "Used MongoDB's scalability and React's dynamic UI rendering to create a responsive, real-time system.",
    liveDemo: "#",  // Replace with your live link
    github: "#",    // Replace with your GitHub link
    image: "path-to-image-1", // Replace with image path or URL
  },
  {
    title: "Employee Attendance System",
    description: "A system to track employee attendance, manage holidays, and automate time-off requests for companies.",
    techStack: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    challenges: "Implementing time-tracking accuracy and managing overlapping holidays and permissions.",
    solution: "Used server-side logic to automate time tracking and prevent data inconsistencies.",
    liveDemo: "#",
    github: "#",
    image: "path-to-image-2",
  },
  {
    title: "SheCanCode Inventory Management System",
    description: "An inventory management system for tracking stock levels, managing purchase requests, and generating financial reports.",
    techStack: ["React", "Node.js", "MongoDB", "JWT Authentication"],
    challenges: "Handling role-based permissions and ensuring data security for sensitive inventory data.",
    solution: "Implemented JWT authentication and role-based access control to secure user data.",
    liveDemo: "#",
    github: "#",
    image: "path-to-image-3",
  },
];

const Portfolio: React.FC = () => {
  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-customGreen text-white "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        {projects.map((project, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-lg mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold">Tech Stack:</h4>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">Challenges & Solutions:</h4>
              <p className="text-sm">{project.challenges}</p>
              <p className="text-sm text-green-600 mt-1">{project.solution}</p>
            </div>

            <div className="flex justify-between items-center">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;

