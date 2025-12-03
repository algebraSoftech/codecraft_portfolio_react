import React from "react";
import Herosection from "../components/Herosection";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Collaboration from "../components/Collaboration";


const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <div
        className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
        id="home"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.1),transparent_50%)]" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <Navbar />
        <Herosection />
      </div>

      <div id="about">
        <About />
      </div>



      <div id="slide">
        <Slide />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="project">
        <Project />
      </div>

      <div id="collaboration">
        <Collaboration />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
