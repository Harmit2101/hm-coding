import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../animations/motion";
import {
  clientReminderNotifications,
  clientReminderNotificationsSection,
  clientReminderStats,
  clientReminderUpcomingPayments,
  clientReminderUpcomingPaymentsSection,
} from "../constants/client-reminder-crm";
import { SectionHeader, dashboardShell } from "../components/dashboard";
import {
  CtaSection,
  ClientReminderHero,
  CustomerRemindersTable,
  LiveActivityPanel,
  NotificationCard,
  PaymentCard,
  StatCard,
} from "../components/projects/client-reminder-crm";

const ClientReminderCRM: React.FC = () => (
  <motion.div
    className="w-full flex flex-col gap-12 px-6 py-8 md:px-10 lg:px-16"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
  >
    <ClientReminderHero />

    <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
        {clientReminderStats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
      <LiveActivityPanel />
    </section>

    <section className="grid gap-6 xl:grid-cols-[0.75fr_0.25fr]">
      <CustomerRemindersTable />

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <div className={dashboardShell.glassRaised}>
          <SectionHeader
            layout="row"
            eyebrow={clientReminderUpcomingPaymentsSection.eyebrow}
            eyebrowClassName="text-sm uppercase tracking-[0.22em] text-slate-500"
            title={clientReminderUpcomingPaymentsSection.title}
            titleAs="h3"
            titleClassName="mt-3 text-xl font-semibold text-slate-900 dark:text-white"
            trailing={
              <div className="rounded-2xl bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                {clientReminderUpcomingPaymentsSection.countLabel}
              </div>
            }
          />
          <div className="mt-6 space-y-4">
            {clientReminderUpcomingPayments.map((payment) => (
              <PaymentCard key={payment.client} item={payment} />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-950 via-purple-950 to-cyan-900 p-6 shadow-lg shadow-cyan-500/10 text-white dark:border-slate-700">
          <SectionHeader
            layout="row"
            eyebrow={clientReminderNotificationsSection.eyebrow}
            eyebrowClassName="text-sm uppercase tracking-[0.22em] text-cyan-200/70"
            title={clientReminderNotificationsSection.title}
            titleAs="h3"
            titleClassName="mt-3 text-xl font-semibold"
            trailing={
              <span className="rounded-2xl bg-white/10 px-3 py-1 text-xs text-cyan-100/90">{clientReminderNotificationsSection.badge}</span>
            }
          />
          <div className="mt-6 space-y-4">
            {clientReminderNotifications.map((item) => (
              <NotificationCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>

    <CtaSection />
  </motion.div>
);

export default ClientReminderCRM;
