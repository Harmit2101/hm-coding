import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../constants/services";
import { useLocation } from "react-router-dom";

interface LocationState {
  initialIndex?: number;
}

interface ServicesProps {
  openContact: () => void;
}

const Services: React.FC<ServicesProps> = ({ openContact }) => {
  const location = useLocation();
  const state = location.state as LocationState;
  const initialIndexFromState = state?.initialIndex ?? null;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    if (initialIndexFromState !== null) setActiveIndex(initialIndexFromState);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialIndexFromState]);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderDetails = (index: number) => (
    <motion.div
      key={index}
      className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {services[index].title} Details
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Average Time:</strong> {services[index].avgTime}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Price Range:</strong> {services[index].price}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>Variations:</strong> {services[index].variations.join(", ")}
      </p>

      <motion.button
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openContact}
      >
        Raise Enquiry
      </motion.button>
    </motion.div>
  );

  return (
    <motion.div
      className="w-full flex flex-col bg-gray-50 dark:bg-gray-900 pb-24"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow cursor-pointer"
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleCardClick(index)}
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>

              {/* Mobile details */}
              {isMobile && (
                <AnimatePresence>
                  {activeIndex === index && renderDetails(index)}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop details */}
        {!isMobile && (
          <AnimatePresence>
            {activeIndex !== null && (
              <div className="mt-12">{renderDetails(activeIndex)}</div>
            )}
          </AnimatePresence>
        )}
      </section>
    </motion.div>
  );
};

export default Services;
