import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Star, Calendar, Code, Eye } from "lucide-react";

const ProjectModal = ({ selectedProject, onClose }) => {
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 border border-violet-400/50 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-slate-700/50">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.projectName}
                </h2>
                {selectedProject.subtitle && (
                  <p className="text-slate-400 text-lg">
                    {selectedProject.subtitle}
                  </p>
                )}
              </div>

              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-slate-700/50 rounded-xl transition-colors duration-200"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <RiCloseLargeLine size={24} color="white" />
              </motion.button>
            </div>

            {/* Action Links */}
            <div className="flex gap-4 mt-4">
              {selectedProject.githubLink && (
                <motion.a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 text-white px-4 py-2 rounded-xl transition-all duration-300 border border-slate-600/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={18} />
                  GitHub
                </motion.a>
              )}
              {selectedProject.liveLink && (
                <motion.a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink size={18} />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Image Gallery */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Eye size={20} className="text-blue-400" />
                Project Preview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedProject.image1 && (
                  <motion.div
                    className="relative rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={selectedProject.image1}
                      alt={`${selectedProject.projectName} - View 1`}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                )}
                {selectedProject.image2 && (
                  <motion.div
                    className="relative rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={selectedProject.image2}
                      alt={`${selectedProject.projectName} - View 2`}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Project Stats */}
            {(selectedProject.stars ||
              selectedProject.forks ||
              selectedProject.views ||
              selectedProject.date) && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {selectedProject.stars && (
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <Star size={24} className="text-yellow-400 mx-auto mb-2" />
                    <div className="text-white font-bold text-lg">
                      {selectedProject.stars}
                    </div>
                    <div className="text-slate-400 text-sm">Stars</div>
                  </div>
                )}
                {selectedProject.forks && (
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <Code size={24} className="text-green-400 mx-auto mb-2" />
                    <div className="text-white font-bold text-lg">
                      {selectedProject.forks}
                    </div>
                    <div className="text-slate-400 text-sm">Forks</div>
                  </div>
                )}
                {selectedProject.views && (
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <Eye size={24} className="text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-bold text-lg">
                      {selectedProject.views}
                    </div>
                    <div className="text-slate-400 text-sm">Views</div>
                  </div>
                )}
                {selectedProject.date && (
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <Calendar
                      size={24}
                      className="text-purple-400 mx-auto mb-2"
                    />
                    <div className="text-white font-bold text-sm">
                      {selectedProject.date}
                    </div>
                    <div className="text-slate-400 text-sm">Created</div>
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            {selectedProject.description && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Project Description
                </h3>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            )}

            {/* Technologies Used */}
            {selectedProject.language && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Code size={20} className="text-purple-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.language.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Features or Additional Info */}
            {selectedProject.features && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Features
                </h3>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-slate-300 flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
