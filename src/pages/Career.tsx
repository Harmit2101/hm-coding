import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import JobCard from "../components/JobCard";
import type { Job } from "../types/jobs";
import InternshipHero from "../components/InternshipHero";
import InternshipDetails from "../components/InternshipDetails";

interface CareersProps {
  openContact: () => void;
  openStartupContact: () => void;
}

const Careers: React.FC<CareersProps> = ({
  openContact,
  openStartupContact,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://hm-coding.onrender.com/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <motion.div className="w-full flex flex-col">

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Careers at HM Coding
          </h1>

          {/* NEW TAGLINE */}
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Join us to work on real-world projects, build impactful products,
            and grow with hands-on experience.
          </p>

        </div>
      </section>

      {/* INTERNSHIP */}
      <InternshipHero onApplyNow={openContact} />

      <InternshipDetails onSendIdea={openStartupContact} />

      {/* JOBS */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900"> {/* 👈 reduced from py-20 */}
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Openings
          </h2>

          {loading && (
            <p className="text-center text-gray-600 dark:text-gray-300">
              Loading…
            </p>
          )}

          {!loading && jobs.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No active openings right now.
            </p>
          )}

          {!loading && jobs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

    </motion.div>
  );
};

export default Careers;