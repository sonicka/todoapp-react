import type { Priority, Status } from "./types";

export const STATUS = {
  planned: "planned",
  finished: "finished",
} as const;

export const PRIORITY = {
  low: "low",
  normal: "normal",
  high: "high",
} as const;

export const MODAL_STATE = {
  startingOptions: "startingOptions",
  form: "form",
  templates: "templates",
} as const;

export const PriorityLabel: Record<Priority, string> = {
  low: "Nízká",
  normal: "Normální",
  high: "Vysoká",
};

export const StatusLabel: Record<Status, string> = {
  planned: "Plánováno",
  finished: "Dokončeno",
};
