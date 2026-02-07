import React from "react";
import { motion } from "framer-motion";
import { jobOpenings } from "../constants/careers";
import JobCard from "../components/JobCard";

const Careers: React.FC = () => {
  return (
    <motion.div
      className="w-full flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-24">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Careers at HM Coding
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            We’re always looking for passionate engineers and creators who want
            to build meaningful digital products.
          </p>
        </motion.div>
      </section>

      {/* Openings */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Current Openings
          </motion.h2>

          {jobOpenings.length === 0 ? (
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              There are no open positions right now. Please check back later.
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              {jobOpenings.map((job) => (
                <motion.div
                  key={job.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <JobCard job={job} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;
