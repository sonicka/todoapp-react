import type { Template, Todo } from "../shared/types";

export const TodosData: Todo[] = [
  {
    id: 1,
    title: "Zkontrolovat pull request",
    status: "planned",
    priority: "high",
  },
  {
    id: 2,
    title: "Naplánovat týmovou schůzku",
    status: "planned",
    priority: "normal",
  },
  {
    id: 3,
    title: "Archivovat staré projektové soubory",
    status: "finished",
    priority: "low",
  },
  {
    id: 4,
    title: "Navrhnout čtvrtletní zprávu",
    status: "planned",
    priority: "normal",
  },
  {
    id: 5,
    title: "Zaškolit nového zaměstnance",
    status: "finished",
    priority: "high",
  },
];

export const TodosTemplates: Template[] = [
  {
    id: "template-1",
    title: "Revize kódu",
    defaults: {
      title: "Zkontrolovat pull request",
      priority: "high",
    },
  },
  {
    id: "template-2",
    title: "Opravit chybu",
    defaults: {
      title: "Opravit kritickou chybu",
      priority: "high",
    },
  },
  {
    id: "template-3",
    title: "Naplánovat schůzku",
    defaults: {
      title: "Naplánovat týmovou schůzku",
      priority: "normal",
    },
  },
];
