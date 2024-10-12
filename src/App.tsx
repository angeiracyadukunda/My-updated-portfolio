import React from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/portfolio"; // Fixed casing for "Portfolio"
import Testimonial from "./components/Testimonial"
import Blogs from "./components/Blogs"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import './index.css';


const App: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar - Fixed for better UX */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-8">
        <Hero />
        <AboutMe />
        <Portfolio />
        <Testimonial />
        <Blogs />
        <Contact />
        <Footer/>

      </div>
    </div>
  );
};

export default App;
