import React from "react";
import { motion } from "framer-motion";
import HMLogo from "../components/HMLogo";
import { useNavigate } from "react-router-dom";
import FirmLogo from "../assets/FirmLogo.jpg";

interface HomeProps {
  openContact: () => void;
}

const services = [
  { title: "Websites", description: "Responsive, modern websites built to scale." },
  { title: "Web Apps", description: "Powerful web applications with dynamic features." },
  { title: "Mobile Apps", description: "iOS and Android apps with smooth UX/UI." },
  { title: "AI Integration", description: "Future-ready AI solutions for your business." },
];

const Home: React.FC<HomeProps> = ({ openContact }) => {
  const navigate = useNavigate();

  const handleServiceClick = (index: number) => {
    navigate("/services", { state: { initialIndex: index } });
  };

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
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Build the Future with{" "}
              <span className="text-yellow-300">HM Coding</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100">
              We craft websites, web apps, mobile apps, and AI-driven solutions
              that empower your business.
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
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#1f2937" }}
                whileTap={{ scale: 0.95 }}
                onClick={openContact}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <HMLogo className="w-64 h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
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
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleServiceClick(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About HM Coding
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              HM Coding is a cutting-edge technology firm delivering websites,
              web apps, mobile apps, and AI solutions. Our goal is to help
              businesses innovate and grow in the digital era.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center cursor-pointer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/about")}
          >
            <img
              src={FirmLogo}
              alt="Firm Logo"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-purple-600 text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          className="mb-8 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Contact us today and let's build something amazing together!
        </motion.p>

        <motion.button
          className="px-8 py-4 bg-yellow-300 text-gray-900 text-lg font-semibold rounded-lg shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openContact}
        >
          Contact Us
        </motion.button>
      </section>
    </motion.div>
  );
};

export default Home;
