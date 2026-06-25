import type { Todo as TodoType } from "../shared/types";
import { Todo } from "./Todo";

type Props = {
  todos: TodoType[];
  finishTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodosList({ todos, finishTodo, deleteTodo }: Props) {
  return (
    <section className="max-w-md w-full mx-auto flex flex-col">
      <h2>Úkoly</h2>
      <ul className="mt-4 flex flex-col items-center gap-4">
        {todos.map((todo) => (
          <li key={todo.id} className="w-full max-w-md">
            <Todo todo={todo} finishTodo={finishTodo} deleteTodo={deleteTodo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
