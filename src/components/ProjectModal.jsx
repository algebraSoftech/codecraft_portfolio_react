import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Star, Calendar, Code, Eye } from "lucide-react";

const ProjectModal = ({ selectedProject, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          transition={{ duration: 0.35 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 border border-violet-400/40 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="relative p-4 sm:p-6 border-b border-slate-700/50">
            <div className="flex justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                  {selectedProject.projectName}
                </h2>
                {selectedProject.subtitle && (
                  <p className="text-slate-400 text-sm sm:text-base md:text-lg">
                    {selectedProject.subtitle}
                  </p>
                )}
              </div>

              <motion.button
                onClick={onClose}
                whileHover={{ rotate: 90 }}
                className="p-2 rounded-lg hover:bg-slate-700/50 transition"
              >
                <RiCloseLargeLine size={22} className="text-white" />
              </motion.button>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              {selectedProject.githubLink && (
                <motion.a
                  href={selectedProject.githubLink}
                  target="_blank"
                  className="flex justify-center items-center gap-2 bg-slate-800/60 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
              )}

              {selectedProject.liveLink && (
                <motion.a
                  href={selectedProject.liveLink}
                  target="_blank"
                  className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white px-4 py-2 rounded-xl text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiExternalLink /> Live Demo
                </motion.a>
              )}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-4 sm:p-6">
            {/* IMAGES */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Eye size={18} className="text-blue-400" />
                Project Preview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[selectedProject.image1, selectedProject.image2].map(
                  (img, i) =>
                    img && (
                      <motion.div
                        key={i}
                        className="overflow-hidden rounded-xl group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={img}
                          alt="project preview"
                          className="w-full h-48 sm:h-56 md:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>
                    ),
                )}
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {selectedProject.stars && (
                <Stat
                  icon={<Star className="text-yellow-400" />}
                  value={selectedProject.stars}
                  label="Stars"
                />
              )}
              {selectedProject.forks && (
                <Stat
                  icon={<Code className="text-green-400" />}
                  value={selectedProject.forks}
                  label="Forks"
                />
              )}
              {selectedProject.views && (
                <Stat
                  icon={<Eye className="text-blue-400" />}
                  value={selectedProject.views}
                  label="Views"
                />
              )}
              {selectedProject.date && (
                <Stat
                  icon={<Calendar className="text-purple-400" />}
                  value={selectedProject.date}
                  label="Created"
                />
              )}
            </div>

            {/* DESCRIPTION */}
            {selectedProject.description && (
              <section className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Project Description
                </h3>
                <p className="text-slate-300 text-justify text-sm sm:text-base md:text-lg leading-relaxed bg-slate-800/30 p-4 sm:p-6 rounded-xl border border-slate-700/50">
                  {selectedProject.description}
                </p>
              </section>
            )}

            {/* TECHNOLOGIES */}
            {selectedProject.language && (
              <section className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Code size={18} className="text-purple-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {selectedProject.language.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:scale-105 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* FEATURES */}
            {selectedProject.features && (
              <section>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2 bg-slate-800/30 p-4 sm:p-6 rounded-xl border border-slate-700/50">
                  {selectedProject.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-slate-300 text-sm sm:text-base flex gap-3"
                    >
                      <span className="w-2 h-2 mt-2 bg-blue-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Stat = ({ icon, value, label }) => (
  <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 text-center border border-slate-700/50">
    <div className="mx-auto mb-2">{icon}</div>
    <div className="text-white font-bold text-sm sm:text-lg">{value}</div>
    <div className="text-slate-400 text-xs sm:text-sm">{label}</div>
  </div>
);

export default ProjectModal;
