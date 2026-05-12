import { motion } from "framer-motion";
import {
  clientReminderCtaContent,
  clientReminderCustomerRemindersSection,
  clientReminderCustomers,
  clientReminderHeroContent,
  clientReminderHeroInsights,
  clientReminderLiveActivityContent,
  clientReminderLiveActivityStats,
  clientReminderStatusBadgeClasses,
  clientReminderTableColumns,
} from "../../../constants/client-reminder-crm";
import {
  CTASection,
  DashboardCard,
  GradientIcon,
  InfoRow,
  SectionHeader,
  StatusBadge,
  dashboardShell,
} from "../../dashboard";
import type {
  ClientReminderStat,
  CustomerReminder,
  NotificationPreview,
  PaymentReminder,
} from "../../../types/client-reminder-crm";

export function ClientReminderHero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-600 to-violet-800 p-8 text-white shadow-2xl shadow-cyan-500/20">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white/75">{clientReminderHeroContent.badgeLead}</span>
            <span className="rounded-full bg-white/20 px-2 py-1 text-cyan-100">{clientReminderHeroContent.badgeTag}</span>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
          >
            {clientReminderHeroContent.title}
          </motion.h1>
          <motion.p
            className="max-w-3xl text-lg text-cyan-100/90 sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
          >
            {clientReminderHeroContent.description}
          </motion.p>
          <motion.div
            className="grid gap-3 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.5 }}
          >
            <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10">
              {clientReminderHeroContent.primaryCta}
            </button>
            <button className="rounded-2xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              {clientReminderHeroContent.secondaryCta}
            </button>
          </motion.div>
        </div>

        <motion.div
          className={dashboardShell.heroGlassPanel}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {clientReminderHeroInsights.map((insight) => (
              <DashboardCard key={insight.label} motion={false} className={dashboardShell.heroInsightTile}>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/80">{insight.label}</p>
                <p className="mt-4 text-3xl font-semibold">{insight.value}</p>
                <p className="mt-2 text-sm text-cyan-100/80">{insight.detail}</p>
              </DashboardCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function StatCard({ stat }: { stat: ClientReminderStat }) {
  return (
    <DashboardCard interactive className={dashboardShell.glassInteractive}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
        </div>
        <GradientIcon>{stat.icon}</GradientIcon>
      </div>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{stat.detail}</p>
    </DashboardCard>
  );
}

function ReminderTableRow({ customer }: { customer: CustomerReminder }) {
  return (
    <tr>
      <td className="px-6 py-4">
        <div className="font-semibold text-slate-900 dark:text-white">{customer.name}</div>
        <div className="text-slate-500 text-xs">{customer.company}</div>
      </td>
      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{customer.reminder}</td>
      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{customer.due}</td>
      <td className="px-6 py-4">
        <StatusBadge toneClassName={clientReminderStatusBadgeClasses[customer.status]}>{customer.status}</StatusBadge>
      </td>
    </tr>
  );
}

export function CustomerRemindersTable() {
  return (
    <DashboardCard
      className={dashboardShell.dataTable}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        layout="bordered"
        eyebrow={clientReminderCustomerRemindersSection.eyebrow}
        eyebrowClassName="text-sm uppercase tracking-[0.22em] text-slate-500"
        title={clientReminderCustomerRemindersSection.title}
        titleAs="h2"
        titleClassName="mt-3 text-2xl font-semibold text-slate-900 dark:text-white"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-slate-100 text-slate-500 dark:bg-slate-900/90 dark:text-slate-400">
            <tr>
              {clientReminderTableColumns.map((col) => (
                <th key={col} className="px-6 py-4">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {clientReminderCustomers.map((customer) => (
              <ReminderTableRow key={customer.name} customer={customer} />
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}

export function LiveActivityPanel() {
  return (
    <DashboardCard interactive className={dashboardShell.glassInteractive}>
      <SectionHeader
        layout="row"
        eyebrow={clientReminderLiveActivityContent.eyebrow}
        eyebrowClassName="text-sm uppercase tracking-[0.24em] text-slate-500"
        title={clientReminderLiveActivityContent.title}
        titleAs="p"
        titleClassName="mt-4 text-3xl font-semibold text-slate-900 dark:text-white"
        trailing={
          <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            {clientReminderLiveActivityContent.activeLabel}
          </div>
        }
      />
      <div className="mt-6 space-y-4">
        <DashboardCard motion={false} className={dashboardShell.liveHighlight}>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/80">{clientReminderLiveActivityContent.nextReminderEyebrow}</p>
          <p className="mt-3 text-2xl font-semibold">{clientReminderLiveActivityContent.nextReminderTitle}</p>
          <p className="mt-2 text-sm text-cyan-100/80">{clientReminderLiveActivityContent.nextReminderDetail}</p>
        </DashboardCard>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
          {clientReminderLiveActivityStats.map((stat) => (
            <DashboardCard key={stat.label} motion={false} className={dashboardShell.nestedMutedStat}>
              <p className="font-semibold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-1">{stat.label}</p>
            </DashboardCard>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
}

export function PaymentCard({ item }: { item: PaymentReminder }) {
  return (
    <DashboardCard motion={false} className={dashboardShell.nestedPayment}>
      <InfoRow
        start={
          <>
            <p className="font-semibold text-slate-900 dark:text-white">{item.client}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.type}</p>
          </>
        }
        end={
          <div className="text-right">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.amount}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{item.due}</p>
          </div>
        }
      />
    </DashboardCard>
  );
}

export function NotificationCard({ item }: { item: NotificationPreview }) {
  return (
    <DashboardCard motion={false} className={dashboardShell.nestedNotification}>
      <InfoRow
        className="flex items-center justify-between gap-3"
        start={
          <>
            <p className="font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm text-slate-100/80">{item.description}</p>
          </>
        }
        end={<span className="text-xs text-slate-200">{item.time}</span>}
      />
    </DashboardCard>
  );
}

export function ClientReminderCtaSection() {
  return <CTASection {...clientReminderCtaContent} />;
}
