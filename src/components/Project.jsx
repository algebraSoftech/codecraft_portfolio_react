import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ProjectFilters from "./ProjectFilters";
import { ProjectData } from "../constants/index"; // Your project data
import { Code2, Sparkles, Plus } from "lucide-react";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [animationKey, setAnimationKey] = useState(0);

  // Extract unique technologies for filter options
  const techFilters = React.useMemo(() => {
    const allTechs = ProjectData.flatMap((project) => project.language || []);
    const uniqueTechs = [...new Set(allTechs)].sort();
    return ["All", ...uniqueTechs];
  }, []);

  // Filter projects based on search and technology filter
  const filteredProjects = React.useMemo(() => {
    return ProjectData.filter((project) => {
      const matchesFilter =
        filter === "All" ||
        (project.language && project.language.includes(filter));
      const matchesSearch =
        project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.description &&
          project.description.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  // Reset animation when filters change
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
    setVisibleProjects(6); // Reset visible projects when filtering
  }, [filter, searchTerm]);

  // Handle card click to open modal
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Load more projects
  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.1),transparent_50%)]" />

      {/* Animated Grid Pattern */}
      <div className="absolute top-0 left-0 w-full h-full " />

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-8 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500"
          >
            <Code2 size={20} className="text-blue-400" />
            <span className="text-blue-300 font-medium">Featured Work</span>
            <Sparkles size={20} className="text-purple-400 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Project
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4 animate-gradient">
              Showcase
            </span>
          </motion.h2>

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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-slate-300 text-lg text-justify leading-relaxed max-w-4xl mx-auto mb-12"
          >
            As a passionate frontend developer, I have worked on a variety of
            projects that showcase my skills in creating responsive,
            user-friendly interfaces. Below are some of the projects I've
            completed, demonstrating my expertise in modern frontend
            technologies.
          </motion.p>
        </div>

        {/* Filters */}
        <ProjectFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
          viewMode={viewMode}
          setViewMode={setViewMode}
          techFilters={techFilters}
          filteredProjectsCount={filteredProjects.length}
        />

        {/* Projects Grid/List */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              No Projects Found
            </h3>
            <p className="text-slate-400 mb-6">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilter("All");
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <div
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            } mb-12`}
          >
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <motion.div
                  key={`${project.id || project.projectName}-${animationKey}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    onCardClick={handleCardClick}
                  />
                </motion.div>
              ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <button
              onClick={loadMore}
              className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Plus size={20} />
                Load More Projects ({filteredProjects.length -
                  visibleProjects}{" "}
                remaining)
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={handleCloseModal}
      />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Project;
