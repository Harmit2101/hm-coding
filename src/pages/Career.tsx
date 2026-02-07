import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import JobCard from "../components/JobCard";
import type { Job } from "../types/jobs";

const FALLBACK_JOBS: Job[] = [
  {
    _id: "1",
    title: "Junior Software Engineer",
    location: "Surat, Gujarat",
    experience: "1–2 years",
    type: "Full-time",
    description:
      "Work on real-world software systems including dashboards, SaaS platforms, and production-grade applications.",
    applyUrl: "https://in.indeed.com/viewjob?jk=463317e64bf8fd0d",
  },
  {
    _id: "2",
    title: "Software Engineer",
    location: "Surat, Gujarat",
    experience: "2–4 years",
    type: "Full-time",
    description:
      "Build scalable, high-performance systems using modern web technologies.",
    applyUrl: "https://in.indeed.com/viewjob?jk=73d947a5cc31f2e8",
  },
  {
    _id: "3",
    title: "IoT Engineer",
    location: "Surat, Gujarat",
    experience: "1–3 years",
    type: "Full-time",
    description:
      "Work with industrial machines, sensors, and real-time data pipelines.",
    applyUrl: "https://in.indeed.com/viewjob?jk=2e6e4ddffe225652",
  },
];

const Careers: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:4000/jobs");
        if (!res.ok) throw new Error("Backend not available");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.warn("Backend unavailable, using fallback jobs", err);
        setJobs(FALLBACK_JOBS);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

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

          {loading && (
            <p className="text-center text-gray-600 dark:text-gray-300">
              Loading job openings…
            </p>
          )}

          {!loading && (
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
              {jobs.map((job) => (
                <motion.div
                  key={job._id}
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
