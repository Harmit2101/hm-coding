import React from "react";
import { motion } from "framer-motion";
import FirmLogo from "../assets/AboutImage.png";
import { aboutContent } from "../constants/aboutContent";
import { useNavigate } from "react-router-dom";

interface AboutProps {
  openContact: () => void;
}

const About: React.FC<AboutProps> = ({ openContact }) => {
  const { hero, whoWeAre, missionVision, values } = aboutContent;
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-400 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto gap-12 px-6 py-24 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {hero.title.split(" ")[0]}{" "}
              <span className="text-yellow-300">
                {hero.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              {hero.tagline}
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.button
                className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")}
              >
                Explore Services
              </motion.button>

              <motion.button
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#1f2937",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openContact}
              >
                {hero.buttonText}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative group max-w-2xl">
              <img
                src={FirmLogo}
                alt="HM Coding dashboard preview"
                className="rounded-3xl shadow-2xl object-cover border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-slate-50 dark:bg-gray-900 border-y border-slate-200/60 dark:border-white/5">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            {whoWeAre.title}
          </h2>

          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {whoWeAre.description}
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {[missionVision.mission, missionVision.vision].map((item) => (
            <motion.div
              key={item.title}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-slate-900 dark:text-white mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {values.title}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {values.list.map((value) => (
              <motion.div
                key={value.title}
                className="p-6 bg-white dark:bg-gray-800 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260 }}
              >
                <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  {value.title}
                </h4>

                <p className="text-slate-600 dark:text-gray-300">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;