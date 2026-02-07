import React from "react";
import { motion } from "framer-motion";
import type { Job } from "../types/jobs";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col justify-between"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {job.title}
        </h3>

        <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
          <p>📍 {job.location}</p>
          <p>💼 {job.experience}</p>
          <p>⏱ {job.type}</p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {job.description}
        </p>
      </div>

      <motion.a
        href={job.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Apply on Indeed
      </motion.a>
    </motion.div>
  );
};

export default JobCard;
