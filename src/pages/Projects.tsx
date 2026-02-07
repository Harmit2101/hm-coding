import React from "react";
import Carousel from "../components/Carousel";
import { demoProjects } from "../constants/demoProjects";

const Projects: React.FC = () => {
  return (
    <section className="pt-24 pb-12 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Project demos
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
          Here are a few demo projects showcasing the kind of websites and apps
          we build — from modern portfolios to business dashboards.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          *These are demo and template-based projects shown for reference only.*
        </p>
      </div>

      <Carousel projects={demoProjects} />
    </section>
  );
};

export default Projects;
