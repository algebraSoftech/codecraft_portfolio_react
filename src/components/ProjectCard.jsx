import React, { useState } from "react";
import { ExternalLink, Github, Eye, Star, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onCardClick(project)}
      className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border cursor-pointer transition-all duration-700 ${
        project.featured
          ? "border-gradient-to-r from-blue-500/50 to-purple-500/50 shadow-2xl shadow-blue-500/20"
          : "border-slate-700/50 hover:border-slate-600/50"
      } hover:shadow-2xl hover:shadow-blue-500/10`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
          <Star size={12} className="inline mr-1" />
          FEATURED
        </div>
      )}

      {/* Animated Border Effect */}
      <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <motion.div
          // animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-purple-500/50 rounded-2xl"
        />
      </div>

      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-slate-700/50">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}

        {project.image1 ? (
          <img
            src={project.image1}
            alt={project.projectName}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            } group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <div className="text-4xl font-bold text-slate-400">
              {project.projectName.charAt(0)}
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {project.githubLink && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubLink, "_blank");
              }}
              className="p-3 bg-slate-900/80 backdrop-blur-sm rounded-xl hover:bg-slate-800/80 transition-all duration-300 hover:scale-110 border border-slate-600/50"
            >
              <Github size={18} className="text-slate-200" />
            </button>
          )}
          {project.liveLink && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveLink, "_blank");
              }}
              className="p-3 bg-blue-500/80 backdrop-blur-sm rounded-xl hover:bg-blue-600/80 transition-all duration-300 hover:scale-110 border border-blue-400/50"
            >
              <ExternalLink size={18} className="text-white" />
            </button>
          )}
        </div>

        {/* Stats Overlay */}
        {(project.stars || project.forks || project.views) && (
          <div className="absolute bottom-4 left-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            {project.stars && (
              <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-slate-200">
                <Star size={12} className="text-yellow-400" />
                {project.stars}
              </div>
            )}
            {project.forks && (
              <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-slate-200">
                <GitBranch size={12} className="text-green-400" />
                {project.forks}
              </div>
            )}
            {project.views && (
              <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-slate-200">
                <Eye size={12} className="text-blue-400" />
                {project.views}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 relative">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-b-2xl"></div>

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-500">
            {project.projectName}
          </h3>

          {project.description && (
            <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
              {project.description}
            </p>
          )}

          {/* Technologies */}
          {project.language && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.language.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="relative px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </span>
              ))}
              {project.language.length > 4 && (
                <span className="px-3 py-1.5 bg-slate-600/20 text-slate-400 text-xs rounded-full border border-slate-600/30">
                  +{project.language.length - 4} more
                </span>
              )}
            </div>
          )}

          {/* View Details Button */}
          <button className="w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-300 hover:scale-105 border border-purple-500/30 hover:border-purple-400/50 flex items-center justify-center gap-2">
            <Eye size={14} />
            View Details
          </button>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10"></div>
    </motion.div>
  );
};

export default ProjectCard;
