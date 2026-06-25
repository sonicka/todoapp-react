import type { Priority, Status } from "./types";

export const PriorityLabel: Record<Priority, string> = {
  low: "Nízká",
  normal: "Normální",
  high: "Vysoká",
};

export const StatusLabel: Record<Status, string> = {
  planned: "Plánováno",
  finished: "Dokončeno",
};
