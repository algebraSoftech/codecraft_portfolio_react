import Profile from "../assets/2595429-removebg-preview.png";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";

const Herosection = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row w-full min-h-screen items-center justify-between px-4 sm:px-8 lg:px-20 py-10 gap-10"
      id="home"
    >
      {/* Left Section */}
      <div className="text-white flex-1 flex flex-col items-center md:items-start justify-center space-y-6 max-w-xl">
        {/* Welcome Tag */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 rounded-full px-4 py-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 text-sm font-medium text-center md:text-left">
            Welcome to CodeCraft Team
          </span>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-center md:text-left leading-snug"
        >
          We Are <span className="text-red-500">CodeCraft</span> Developers
        </motion.h1>

        {/* Sub-heading */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-lg sm:text-xl lg:text-3xl text-red-500 tracking-wide text-center md:text-left leading-tight"
        >
          MERN Stack • Full-Stack • Web App Developers
        </motion.h2>

        {/* Team Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-gray-300 text-justify  md:text-left text-sm sm:text-base leading-relaxed"
        >
          We are a team of three passionate MERN stack developers specializing
          in building fast, scalable, and modern web applications. Our focus is
          on clean code, smooth user experiences, and delivering high-quality
          projects on time. We help businesses grow by creating reliable,
          long-term digital solutions tailored to their needs.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/918962017022"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-500 text-white rounded-full hover:bg-green-500/20 transition duration-300 text-sm sm:text-base"
        >
          Contact Us <IoLogoWhatsapp className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex items-center justify-center relative">
        <img
          src={Profile}
          className="
            w-40 h-40      /* mobile */
            sm:w-56 sm:h-56  /* small tablets */
            md:w-72 md:h-72  /* tablets */
            lg:w-96 lg:h-96  /* large screens */
            rounded-full object-cover relative z-10
          "
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Herosection;
