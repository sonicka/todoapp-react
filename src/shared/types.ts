export const STATUS = {
  planned: "planned",
  finished: "finished",
} as const;

export type Status = (typeof STATUS)[keyof typeof STATUS];

export const PRIORITY = {
  low: "low",
  normal: "normal",
  high: "high",
} as const;

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY];

export type Todo = {
  id: number;
  title: string;
  priority: Priority;
  status: Status;
};

export type Template = {
  id: string;
  title: string;
  defaults: {
    title: string;
    priority: Priority;
  };
};

export const MODAL_STATE = {
  startingOptions: "startingOptions",
  form: "form",
  templates: "templates",
} as const;

export type ModalState = (typeof MODAL_STATE)[keyof typeof MODAL_STATE];
