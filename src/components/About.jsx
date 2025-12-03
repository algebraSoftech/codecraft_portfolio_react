import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

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
              — a group of passionate and skilled developers who specialize in
              creating high-quality, modern, and scalable digital products.
            </p>

            <p className="text-lg text-justify text-gray-300 leading-relaxed">
              From websites to mobile-friendly interfaces, our team provides
              end-to-end development services for clients, startups, and growing
              businesses looking for reliable and creative solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1ab7e3] mb-2">
                  20+
                </div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1ab7e3] mb-2">
                  3 Devs
                </div>
                <div className="text-sm text-gray-400">
                  Skilled Team Members
                </div>
              </div>
            </div>
          </div>

          {/* Right Skills Icons */}
          <div className="grid grid-cols-2 gap-4">
            {[Code2, Palette, Smartphone, Globe].map((Icon, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-[#131822] shadow-md hover:shadow-xl transition-all text-center backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 text-[#1ab7e3] mx-auto mb-3" />
                <h3 className="font-semibold mb-1 text-lg">
                  {
                    [
                      "Web Development",
                      "UI/UX Design",
                      "Responsive Design",
                      "SEO & Optimization",
                    ][index]
                  }
                </h3>
                <p className="text-sm text-gray-400">
                  {
                    [
                      "Custom websites & web apps",
                      "Modern & user-friendly designs",
                      "Fully responsive across devices",
                      "Boost ranking & performance",
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mt-12">
  <button
    onClick={() => window.open("https://wa.me/917400932891", "_blank")}
    className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition-all flex items-center gap-2"
  >
    📩 Contact Us on WhatsApp
  </button>
</div>

      </div>
    </section>
  );
};

export default About;
