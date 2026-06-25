import type { STATUS, PRIORITY, MODAL_STATE } from "./constants";

export type Status = (typeof STATUS)[keyof typeof STATUS];

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

export type ModalState = (typeof MODAL_STATE)[keyof typeof MODAL_STATE];
