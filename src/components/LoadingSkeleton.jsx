import React from "react";
import { motion } from "framer-motion";

const LoadingSkeleton = ({ viewMode = "grid", count = 6 }) => {
  const skeletonVariants = {
    loading: {
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const SkeletonCard = () => (
    <motion.div
      variants={skeletonVariants}
      animate="loading"
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50"
    >
      {/* Image Skeleton */}
      <div className="h-56 bg-slate-700/50 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
      </div>

      {/* Content Skeleton */}
      <div className="p-6">
        {/* Title */}
        <div className="h-6 bg-slate-700/50 rounded-lg mb-3 w-3/4" />

        {/* Description */}
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-slate-700/30 rounded w-full" />
          <div className="h-4 bg-slate-700/30 rounded w-5/6" />
          <div className="h-4 bg-slate-700/30 rounded w-4/6" />
        </div>

        {/* Tech Tags */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-16 bg-blue-500/20 rounded-full" />
          <div className="h-6 w-20 bg-purple-500/20 rounded-full" />
          <div className="h-6 w-18 bg-green-500/20 rounded-full" />
        </div>

        {/* Button */}
        <div className="h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl" />
      </div>
    </motion.div>
  );

  return (
    <div
      className={`${
        viewMode === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "flex flex-col gap-6"
      } mb-12`}
    >
      {[...Array(count)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
