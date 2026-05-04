import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onSendIdea: () => void;
}

const items = [
  {
    title: "Client Acquisition",
    details:
      "You will learn how to identify potential clients, communicate effectively, and close deals. This includes real-world exposure to sales, negotiation, and understanding business requirements.",
  },
  {
    title: "Development & Execution",
    details:
      "Work on actual projects using modern technologies. You’ll collaborate with developers, understand project structure, and contribute to building real systems used by clients.",
  },
  {
    title: "Product & Idea Building",
    details:
      "Turn ideas into real products. You’ll learn how to structure, validate, and build startup ideas with guidance — including architecture and execution planning.",
  },
];

const InternshipDetails: React.FC<Props> = ({ onSendIdea }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          What You’ll Work On
        </motion.h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col"
            >
              <motion.div
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow cursor-pointer text-center"
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleClick(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </motion.div>

              {/* DETAILS */}
                <AnimatePresence>
                    {activeIndex === index && (
                        <motion.div
                        className="mt-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow text-sm text-gray-700 dark:text-gray-300 origin-top"
                        initial={{ opacity: 0, scaleY: 0.8 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0.8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                        {item.details}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* STARTUP SECTION */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white p-10 rounded-2xl text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">
            Have a Startup Idea?
          </h2>

          <p className="mb-6 text-gray-100">
            We help you turn your idea into a real product with proper guidance,
            technical direction, and execution strategy.
          </p>

          <motion.button
            onClick={onSendIdea}
            className="px-6 py-3 bg-yellow-300 text-gray-900 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Your Idea
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default InternshipDetails;