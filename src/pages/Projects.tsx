import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransition } from "../animations/motion";
import { ProjectShowcaseCard } from "../components/projects/ProjectShowcaseCard";
import { portfolioProjects } from "../constants/projects";

export default function Projects() {
  return (
    <motion.div
      className="w-full flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-400 to-purple-600 text-white">
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-10 lg:px-16">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            HM Coding — Portfolio
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.5 }}
          >
            Projects <span className="text-yellow-300">showcase</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-gray-100 md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            Product-style demos and case studies: CRM, POS, operations dashboards, and vertical SaaS—built the way we ship
            for clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
          >
            <Link
              to="/"
              className="mt-8 inline-block text-sm font-semibold text-white/90 underline-offset-4 hover:text-yellow-300 hover:underline"
            >
              ← Back to home
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <motion.div
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Selected work & demos</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Explore interactive prototypes and narrative case studies. More client launches are added here as we publish
              them.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {portfolioProjects.map((project) => (
              <ProjectShowcaseCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
