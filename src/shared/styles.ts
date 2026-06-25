import type { Priority } from "./types";

export const btn =
  "cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition";

export const colorMap: Record<Priority, string> = {
  high: "border-l-red-500",
  normal: "border-l-yellow-500",
  low: "border-l-green-500",
};
