import { Card } from "./Card";
import { type Priority, type Todo } from "../shared/types";
import { PRIORITY_LABEL, STATUS } from "../shared/constants";
import { btn } from "../shared/styles";

const PRIORITY_COLOR: Record<Priority, string> = {
  high: "border-l-red-500",
  normal: "border-l-yellow-500",
  low: "border-l-green-500",
};

type Props = {
  todo: Todo;
  finishTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export function Todo({ todo, finishTodo, deleteTodo }: Props) {
  return (
    <div>
      <Card
        title={todo.title}
        body={`Priorita: ${PRIORITY_LABEL[todo.priority]}`}
        actions={
          <div className="mt-6 flex gap-2">
            {todo.status === STATUS.planned && (
              <button
                onClick={() => finishTodo(todo.id)}
                className={`${btn} bg-gray-600 text-white hover:bg-gray-700`}
              >
                Dokončit
              </button>
            )}

            <button
              onClick={() => deleteTodo(todo.id)}
              className={`${btn} border border-gray-300 text-gray-700 bg-gray-100 hover:bg-white`}
            >
              Odstranit
            </button>
          </div>
        }
        className={`${PRIORITY_COLOR[todo.priority]} ${
          todo.status === STATUS.finished ? "opacity-50" : "opacity-100"
        }`}
      ></Card>
    </div>
  );
}
