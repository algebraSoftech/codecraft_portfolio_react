import React from "react";
import { Search, Grid3X3, List, Filter } from "lucide-react";
import { motion } from "framer-motion";

const ProjectFilters = ({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
  viewMode,
  setViewMode,
  filteredProjectsCount,
}) => {
  // ✅ Fixed list of filters
  const techFilters = [
    "All",
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "MongoDB",
  ];

  return (
    <div className="flex flex-col gap-6 mb-12">
      {/* Search and View Mode Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
            >
              ×
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="text-slate-400 text-sm">
          {filteredProjectsCount} project
          {filteredProjectsCount !== 1 ? "s" : ""} found
        </div>

        {/* View Mode Toggle */}
        <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-600/50">
          <motion.button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-blue-500 text-white"
                : "text-slate-400 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Grid3X3 size={18} />
          </motion.button>
          <motion.button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-all duration-300 ${
              viewMode === "list"
                ? "bg-blue-500 text-white"
                : "text-slate-400 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <List size={18} />
          </motion.button>
        </div>
      </div>

      {/* Technology Filter */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-blue-400" />
          <span className="text-white font-medium">Filter by Technology:</span>
        </div>

        <div className="flex gap-2 flex-wrap">
          {techFilters.map((tech, index) => (
            <motion.button
              key={tech}
              onClick={() => setFilter(tech)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === tech
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/30 hover:border-slate-500/50"
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>

        {/* Active Filter Indicator */}
        {filter !== "All" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-slate-400"
          >
            <span>Filtering by:</span>
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30">
              {filter}
            </span>
            <button
              onClick={() => setFilter("All")}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline"
            >
              Clear filter
            </button>
          </motion.div>
        )}

        {/* Search Term Indicator */}
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-slate-400"
          >
            <span>Searching for:</span>
            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
              "{searchTerm}"
            </span>
            <button
              onClick={() => setSearchTerm("")}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-200 underline"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;
