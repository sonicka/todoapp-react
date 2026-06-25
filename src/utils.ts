import { PRIORITY, STATUS, type Todo } from "./shared/types";

export function sortTodos(a: Todo, b: Todo) {
  const aRank = a.status === STATUS.finished ? 1 : 0;
  const bRank = b.status === STATUS.finished ? 1 : 0;
  const statusOrder = aRank - bRank;

  if (statusOrder !== 0) return statusOrder;

  const priorityRank = {
    [PRIORITY.high]: 3,
    [PRIORITY.normal]: 2,
    [PRIORITY.low]: 1,
  };
  return priorityRank[b.priority] - priorityRank[a.priority];
}

export function getTotalPlural(totalTodosNumber: number) {
  switch (totalTodosNumber) {
    case 1:
      return "úkol";
    case 2:
    case 3:
    case 4:
      return "úkoly";
    default:
      return "úkolů";
  }
}

export function getFinishedPlural(finishedTodosNumber: number) {
  switch (finishedTodosNumber) {
    case 1:
      return "dokončen";
    case 2:
    case 3:
    case 4:
      return "dokončené";
    default:
      return "dokončených";
  }
}
