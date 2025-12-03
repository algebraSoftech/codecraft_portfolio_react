import React from "react";
import { motion } from "framer-motion";
import { Code, Folder, Star, Eye, Users, Calendar } from "lucide-react";

const ProjectStats = ({ projects }) => {
  const stats = React.useMemo(() => {
    const totalProjects = projects.length;
    const totalTechnologies = [
      ...new Set(projects.flatMap((p) => p.language || [])),
    ].length;
    const totalStars = projects.reduce((sum, p) => sum + (p.stars || 0), 0);
    const totalViews = projects.reduce((sum, p) => sum + (p.views || 0), 0);
    const featuredProjects = projects.filter((p) => p.featured).length;
    const recentProjects = projects.filter((p) => {
      if (!p.date) return false;
      const projectDate = new Date(p.date);
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      return projectDate > threeMonthsAgo;
    }).length;

    return {
      totalProjects,
      totalTechnologies,
      totalStars,
      totalViews,
      featuredProjects,
      recentProjects,
    };
  }, [projects]);

  const statItems = [
    {
      icon: Folder,
      label: "Total Projects",
      value: stats.totalProjects,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Code,
      label: "Technologies",
      value: stats.totalTechnologies,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-400",
    },
    {
      icon: Star,
      label: "Total Stars",
      value: stats.totalStars,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-500/20 to-yellow-600/20",
      iconColor: "text-yellow-400",
    },
    {
      icon: Eye,
      label: "Total Views",
      value: stats.totalViews.toLocaleString(),
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Users,
      label: "Featured",
      value: stats.featuredProjects,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-500/20 to-pink-600/20",
      iconColor: "text-pink-400",
    },
    {
      icon: Calendar,
      label: "Recent (3mo)",
      value: stats.recentProjects,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-500/20 to-indigo-600/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-white mb-8 text-center"
      >
        Project Overview
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems.map((stat, index) => {
          const IconComponent = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent size={20} className="text-white" />
                </div>

                {/* Value */}
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Animated Border */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  background: `linear-gradient(90deg, transparent, currentColor, transparent)`,
                  height: "1px",
                  top: 0,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Additional Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
          <p className="text-slate-300 text-sm">
            {stats.recentProjects > 0 && (
              <span className="text-green-400 font-medium">
                {stats.recentProjects} projects
              </span>
            )}
            {stats.recentProjects > 0 && stats.featuredProjects > 0 && " • "}
            {stats.featuredProjects > 0 && (
              <span className="text-pink-400 font-medium">
                {stats.featuredProjects} featured projects
              </span>
            )}
            {(stats.recentProjects > 0 || stats.featuredProjects > 0) && " • "}
            Built with{" "}
            <span className="text-blue-400 font-medium">
              {stats.totalTechnologies} different technologies
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectStats;
