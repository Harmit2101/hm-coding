import React from "react";
import { motion } from "framer-motion";

interface Props {
  onApplyNow: () => void;
}

const InternshipHero: React.FC<Props> = ({ onApplyNow }) => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-20">
      <motion.div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Campus Internship Program
        </h2>

        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-8">
          Build real-world digital products, work with actual clients, and earn
          based on your impact — not fixed limits.
        </p>

        {/* ONLY ONE BUTTON NOW */}
        <motion.button
          onClick={onApplyNow}
          className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.button>

      </motion.div>
    </section>
  );
};

export default InternshipHero;