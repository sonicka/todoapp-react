import { useState } from "react";
import { STATUS, type Priority, type Todo } from "../shared/types";
import { TodosData } from "../data/todos";
import { sortTodos } from "../utils";

export const useTodos = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>(TodosData);
  const [unfinishedShownOnly, setUnfinishedShownOnly] = useState(false);

  const shownTodos = (
    unfinishedShownOnly
      ? allTodos.filter((todo) => todo.status !== STATUS.finished)
      : allTodos
  ).sort(sortTodos);

  const totalTodosNumber = allTodos.length;
  const finishedTodosNumber = allTodos.filter(
    (todo) => todo.status === STATUS.finished,
  ).length;

  const createNewTodo = (title: string, priority: Priority) => {
    const newTodo = {
      id:
        (allTodos.length > 0 ? Math.max(...allTodos.map((t) => t.id)) : 0) + 1,
      title: title,
      status: STATUS.planned,
      priority: priority,
    };
    setAllTodos([...allTodos, newTodo]);
  };

  const finishTodo = (id: number) => {
    setAllTodos(
      allTodos.map((todo) =>
        todo.id === id ? { ...todo, status: STATUS.finished } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
  };

  const showUnfinishedOnly = () => {
    setUnfinishedShownOnly(!unfinishedShownOnly);
  };

  return {
    allTodos,
    shownTodos,
    totalTodosNumber,
    finishedTodosNumber,
    unfinishedShownOnly,
    createNewTodo,
    finishTodo,
    deleteTodo,
    showUnfinishedOnly,
  };
};
