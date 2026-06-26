import type { Priority } from "./types";

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

export const PRIORITY_LABEL: Record<Priority, string> = {
  low: "Nízká",
  normal: "Normální",
  high: "Vysoká",
};
