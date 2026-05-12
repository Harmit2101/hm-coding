import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageTransition } from "../animations/motion";
import {
  DashboardCard,
  GradientIcon,
  SectionHeader,
  StatusBadge,
  dashboardShell,
} from "../components/dashboard";
import {
  posAnalyticsMetrics,
  posDemoHero,
  posKitchenQueue,
  posOrdersOverview,
  posRecentTransactions,
  posRevenueSummary,
} from "../constants/restaurant-pos";
import type { PosOrderLine } from "../types/restaurant-pos";

const orderStatusClass: Record<PosOrderLine["status"], string> = {
  open: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
  fired: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200",
  ready: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
};

const stationLabel: Record<(typeof posKitchenQueue)[number]["station"], string> = {
  grill: "Grill",
  fry: "Fry",
  cold: "Cold",
  dessert: "Dessert",
};

export default function RestaurantPOS() {
  return (
    <motion.div
      className="w-full flex flex-col gap-10 px-6 py-8 md:gap-12 md:px-10 lg:px-16"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-rose-500 to-amber-600 p-8 text-white shadow-xl shadow-orange-500/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              <span className="text-white/85">{posDemoHero.badge}</span>
              <span className="rounded-full bg-white/25 px-2 py-0.5 text-amber-100">{posDemoHero.badgeTag}</span>
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{posDemoHero.title}</h1>
            <p className="max-w-2xl text-lg text-amber-50/95">{posDemoHero.description}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow">{posDemoHero.primaryCta}</span>
              <span className="rounded-xl border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold">{posDemoHero.secondaryCta}</span>
            </div>
          </div>
          <GradientIcon className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-600 text-5xl text-white shadow-lg shadow-cyan-500/30 lg:h-28 lg:w-28">
            🍽️
          </GradientIcon>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {posAnalyticsMetrics.map((m) => (
          <DashboardCard key={m.label} interactive className={dashboardShell.glassInteractive}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{m.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{m.value}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{m.delta}</p>
              </div>
              <span className="text-2xl" aria-hidden>
                {m.icon}
              </span>
            </div>
          </DashboardCard>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <DashboardCard
          className={dashboardShell.dataTable}
          interactive={false}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            layout="bordered"
            eyebrow="Floor"
            eyebrowClassName="text-sm uppercase tracking-[0.22em] text-slate-500"
            title="Orders overview"
            titleAs="h2"
            titleClassName="mt-3 text-xl font-semibold text-slate-900 dark:text-white"
          />
          <div className="overflow-x-auto px-2 pb-4 pt-2">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Ticket</th>
                  <th className="px-4 py-3 font-medium">Table</th>
                  <th className="px-4 py-3 font-medium">Items</th>
                  <th className="px-4 py-3 font-medium text-right">Total</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {posOrdersOverview.map((o) => (
                  <tr key={o.id}>
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{o.id}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{o.table}</td>
                    <td className="max-w-[200px] truncate px-4 py-3 text-slate-600 dark:text-slate-300">{o.items}</td>
                    <td className="px-4 py-3 text-right font-medium text-slate-900 dark:text-white">{o.total}</td>
                    <td className="px-4 py-3">
                      <StatusBadge toneClassName={orderStatusClass[o.status]} className="capitalize">
                        {o.status}
                      </StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>

        <DashboardCard
          className={`${dashboardShell.dataTable} flex flex-col p-0`}
          interactive={false}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          <SectionHeader
            layout="bordered"
            eyebrow="Kitchen"
            eyebrowClassName="text-sm uppercase tracking-[0.22em] text-slate-500"
            title="Queue preview"
            titleAs="h2"
            titleClassName="mt-3 text-xl font-semibold text-slate-900 dark:text-white"
          />
          <ul className="divide-y divide-slate-200 dark:divide-slate-700">
            {posKitchenQueue.map((t) => (
              <li key={t.id} className="flex flex-wrap items-start justify-between gap-3 px-6 py-4">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {t.id}{" "}
                    <span className="font-normal text-slate-500 dark:text-slate-400">— {t.course}</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t.items}</p>
                </div>
                <div className="text-right">
                  <StatusBadge toneClassName="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {stationLabel[t.station]}
                  </StatusBadge>
                  <p className="mt-2 text-xs text-slate-500">{t.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </DashboardCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {posRevenueSummary.map((r) => (
          <DashboardCard key={r.label} interactive className={dashboardShell.glassInteractive}>
            <p className="text-xs uppercase tracking-wide text-slate-500">{r.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{r.value}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{r.sub}</p>
          </DashboardCard>
        ))}
      </section>

      <DashboardCard
        className={dashboardShell.dataTable}
        interactive={false}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          layout="bordered"
          eyebrow="Settlement"
          eyebrowClassName="text-sm uppercase tracking-[0.22em] text-slate-500"
          title="Recent transactions"
          titleAs="h2"
          titleClassName="mt-3 text-xl font-semibold text-slate-900 dark:text-white"
        />
        <div className="overflow-x-auto px-2 pb-4 pt-2">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3 font-medium">Ref</th>
                <th className="px-4 py-3 font-medium">Method</th>
                <th className="px-4 py-3 font-medium text-right">Amount</th>
                <th className="px-4 py-3 font-medium text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {posRecentTransactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{tx.id}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{tx.method}</td>
                  <td className="px-4 py-3 text-right font-semibold text-slate-900 dark:text-white">{tx.amount}</td>
                  <td className="px-4 py-3 text-right text-slate-500">{tx.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardCard>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8 dark:border-gray-700">
        <Link
          to="/projects"
          className="text-sm font-semibold text-purple-600 hover:underline dark:text-purple-400"
        >
          ← All projects
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">HM Coding · Restaurant POS demo · frontend preview</p>
      </div>
    </motion.div>
  );
}
