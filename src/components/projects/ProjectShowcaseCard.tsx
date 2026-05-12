import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cardHover } from "../../animations/motion";
import {
  portfolioStatusBadgeClass,
  portfolioStatusLabel,
} from "../../constants/projects";
import type { PortfolioProject } from "../../types/projects";
import { GradientIcon, StatusBadge } from "../dashboard";

type ProjectShowcaseCardProps = {
  project: PortfolioProject;
};

export function ProjectShowcaseCard({ project }: ProjectShowcaseCardProps) {
  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={cardHover.whileHover}
      transition={{ type: "spring" as const, stiffness: 300 }}
    >
      <div className={`h-2 w-full shrink-0 ${project.accentGradient}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <GradientIcon className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 text-3xl text-white shadow-md shadow-cyan-500/20">
            {project.visual}
          </GradientIcon>
          <StatusBadge toneClassName={portfolioStatusBadgeClass[project.status]} className="shrink-0">
            {portfolioStatusLabel[project.status]}
          </StatusBadge>
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          {project.category}
        </p>
        <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700/80 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-5 dark:border-gray-700">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:opacity-95"
          >
            View project
          </Link>
          {project.externalDemoUrl ? (
            <a
              href={project.externalDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-purple-600 hover:underline dark:text-purple-400"
            >
              Live demo ↗
            </a>
          ) : null}
          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-600 hover:text-purple-600 dark:text-gray-400"
            >
              Case study ↗
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
