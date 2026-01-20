import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Globe, Brain } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-[#07090d] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-[#5d79f3] text-transparent bg-clip-text">
            About CodeCraft Team
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-justify text-gray-300 leading-relaxed">
              We are{" "}
              <span className="font-semibold text-[#1ab7e3]">
                CodeCraft Team
              </span>{" "}
              — a team of skilled developers and AI/ML engineers focused on
              building modern, scalable, and intelligent digital products.
            </p>

            <p className="text-lg text-justify text-gray-300 leading-relaxed">
              Our expertise spans full-stack web development, UI/UX design,
              mobile-responsive interfaces, and AI/ML-powered solutions that
              help businesses automate, optimize, and scale efficiently.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1ab7e3] mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1ab7e3] mb-2">
                  4 Devs
                </div>
                <div className="text-sm text-gray-400">
                  Developers & AI/ML Engineers
                </div>
              </div>
            </div>
          </div>

          {/* Right Skills Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: Code2,
                title: "Web Development",
                desc: "Scalable full-stack web applications",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                desc: "Clean, modern & user-focused designs",
              },
              {
                icon: Smartphone,
                title: "Responsive Development",
                desc: "Optimized for all screen sizes",
              },
              {
                icon: Brain,
                title: "AI & ML Development",
                desc: "Intelligent systems, automation & analytics",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                    p-5 sm:p-6
                    rounded-xl
                    border border-white/10
                    bg-[#131822]
                    shadow-md
                    hover:shadow-xl
                    transition-all duration-300
                    text-center
                    backdrop-blur-sm
                    hover:-translate-y-1
                  "
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1ab7e3] mx-auto mb-3" />

                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mt-8 sm:mt-12 px-4">
          <button
            onClick={() => window.open("https://wa.me/917400932891", "_blank")}
            className="
              w-full sm:w-auto
              px-6 sm:px-8
              py-3 sm:py-3.5
              rounded-full
              bg-green-500 hover:bg-green-600
              text-white
              text-sm sm:text-base
              font-semibold
              shadow-lg
              transition-all duration-300
              flex items-center justify-center gap-2
              hover:scale-105
              active:scale-95
            "
          >
            📩 Contact Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
