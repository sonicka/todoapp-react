import { Card } from "./Card";
import { getTotalPlural, getFinishedPlural } from "../shared/utils";
import { btn } from "../shared/styles";

type Props = {
  totalTodosNumber: number;
  finishedTodosNumber: number;
  addNewTodo: () => void;
  unfinishedShownOnly: boolean;
  showUnfinishedOnly: () => void;
};

export function TodosHeader({
  totalTodosNumber,
  finishedTodosNumber,
  addNewTodo,
  unfinishedShownOnly,
  showUnfinishedOnly,
}: Props) {
  return (
    <section className="max-w-md w-full mx-auto flex flex-col gap-4">
      <h1>Moje úkoly</h1>
      <Card
        body={`Celkem ${totalTodosNumber} ${getTotalPlural(totalTodosNumber)}, ${finishedTodosNumber} ${getFinishedPlural(finishedTodosNumber)}.`}
      />
      <div className="flex flex-col-reverse sm:flex-row w-full gap-3 items-start sm:items-center justify-between">
        <button
          className={`${btn} bg-blue-600 text-white hover:bg-gray-800 whitespace-nowrap shrink-0`}
          onClick={addNewTodo}
        >
          + Nový úkol
        </button>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={unfinishedShownOnly}
            onChange={showUnfinishedOnly}
            className="cursor-pointer"
          />
          <span>Zobrazit pouze nedokončené</span>
        </label>
      </div>
    </section>
  );
}
