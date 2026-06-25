import { Card } from "./Card";
import { STATUS, type Todo } from "../shared/types";
import { PriorityLabel } from "../shared/constants";
import { btn, colorMap } from "../shared/styles";

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
        body={`Priorita: ${PriorityLabel[todo.priority]}`}
        actions={
          <div className="mt-6 flex gap-2">
            {todo.status === STATUS.planned && (
              <button
                onClick={() => finishTodo(todo.id)}
                className={`${btn} bg-gray-600 text-white hover:bg-gray-800`}
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
        className={`${colorMap[todo.priority]} ${
          todo.status === STATUS.finished ? "opacity-50" : "opacity-100"
        }`}
      ></Card>
    </div>
  );
}
