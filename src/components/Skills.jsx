import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Smartphone,
  Globe,
  Rocket,
  PenTool,
  Figma,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites, landing pages, and powerful web applications crafted for performance.",
      icon: <Code2 className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Frontend Development",
      desc: "Pixel-perfect UI, animations, and modern interfaces using React.js & Next.js.",
      icon: <Layers className="w-12 h-12 text-purple-400" />,
    },
    {
      title: "MERN Stack Development",
      desc: "Full-stack scalable solutions using MongoDB, Express, React, and Node.",
      icon: <Rocket className="w-12 h-12 text-green-400" />,
    },
    {
      title: "Mobile App Development",
      desc: "High-performance Android & iOS apps using React Native.",
      icon: <Smartphone className="w-12 h-12 text-pink-400" />,
    },
    {
      title: "UI/UX Design",
      desc: "Modern, clean, and user-focused interface designs using Figma.",
      icon: <Figma className="w-12 h-12 text-yellow-300" />,
    },
    {
      title: "SEO & Optimization",
      desc: "Improve website speed, ranking, and online visibility for better conversions.",
      icon: <Globe className="w-12 h-12 text-cyan-300" />,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.2),transparent_60%)]"></div>

      {/* Section Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          CodeCraft Services
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mt-6"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500"></div>
          <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-slate-800/40 p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur-xl hover:scale-[1.05] hover:border-blue-500/40 transition-all"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl rounded-2xl transition-all"></div>

            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="text-center mt-14">
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="px-8 py-3 text-lg font-semibold rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all"
        >
          📩 Contact on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Services;
