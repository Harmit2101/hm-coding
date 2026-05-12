import type {
  KitchenTicket,
  PosAnalyticsMetric,
  PosOrderLine,
  PosRevenueSummary,
  PosTransaction,
} from "../types/restaurant-pos";

export const posDemoHero = {
  badge: "Demo product",
  badgeTag: "POS",
  title: "Harbor & Hearth POS",
  description:
    "Counter, floor, and kitchen in sync—tickets, payments, and shift clarity for busy service. This is a frontend-only preview of the full system.",
  primaryCta: "Open register view",
  secondaryCta: "Manager summary",
} as const;

export const posAnalyticsMetrics: PosAnalyticsMetric[] = [
  { label: "Covers (today)", value: "186", delta: "+12% vs last Sat", icon: "👥" },
  { label: "Avg. ticket", value: "$48.20", delta: "Net of comps", icon: "🧾" },
  { label: "Order time", value: "14m", delta: "Kitchen to table", icon: "⏱️" },
  { label: "Card share", value: "82%", delta: "Tap + chip", icon: "💳" },
];

export const posOrdersOverview: PosOrderLine[] = [
  { id: "#4821", table: "Bar 3", items: "2× Smash burger, fries", total: "$34.00", status: "open" },
  { id: "#4822", table: "12", items: "Sea bass, seasonal veg", total: "$72.50", status: "fired" },
  { id: "#4823", table: "Walk-in", items: "Soup, Caesar, espresso", total: "$41.25", status: "ready" },
  { id: "#4824", table: "8", items: "Family pasta, 2 kids meals", total: "$89.00", status: "open" },
];

export const posKitchenQueue: KitchenTicket[] = [
  { id: "K-109", course: "Mains", items: "2× Ribeye medium, sides", time: "6m", station: "grill" },
  { id: "K-110", course: "Starters", items: "Oysters, calamari", time: "3m", station: "fry" },
  { id: "K-111", course: "Dessert", items: "Crème brûlée ×3", time: "2m", station: "dessert" },
  { id: "K-112", course: "Cold", items: "Caesar mod, salmon poke", time: "4m", station: "cold" },
];

export const posRevenueSummary: PosRevenueSummary[] = [
  { label: "Net sales", value: "$8,942", sub: "Since open • excludes tips" },
  { label: "Tips pooled", value: "$1,204", sub: "Auto-settlement nightly" },
  { label: "Voids / comps", value: "$118", sub: "Manager approval trail" },
];

export const posRecentTransactions: PosTransaction[] = [
  { id: "TX-9102", method: "Amex ••4242", amount: "$126.40", time: "2m ago" },
  { id: "TX-9101", method: "Apple Pay", amount: "$54.00", time: "8m ago" },
  { id: "TX-9100", method: "Cash", amount: "$38.50", time: "14m ago" },
  { id: "TX-9099", method: "Visa ••8811", amount: "$210.00", time: "22m ago" },
];
