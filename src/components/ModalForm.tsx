import type { Dispatch, SetStateAction } from "react";
import { PRIORITY } from "../shared/constants";
import { type Priority } from "../shared/types";
import { btn } from "../shared/styles";

type Props = {
  title: string;
  priority: Priority;
  setTitle: (title: string) => void;
  setPriority: Dispatch<SetStateAction<Priority>>;
  onSave: () => void;
  onCancel: () => void;
};

export function ModalForm({
  title,
  priority,
  setTitle,
  setPriority,
  onSave,
  onCancel,
}: Props) {
  const isSaveDisabled = title.trim() === "";
  return (
    <div className="flex w-full max-w-md flex-col gap-5 pt-5 text-left rounded-xl bg-white">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm font-medium text-gray-700">
          Název úkolu
        </label>
        <input
          id="title"
          type="text"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Priorita</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="priority"
              value={PRIORITY.high}
              checked={priority === PRIORITY.high}
              onChange={(e) => setPriority(e.target.value as Priority)}
              className="cursor-pointer"
            />
            Vysoká
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="priority"
              value={PRIORITY.normal}
              checked={priority === PRIORITY.normal}
              onChange={(e) => setPriority(e.target.value as Priority)}
              className="cursor-pointer"
            />
            Normální
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="priority"
              value={PRIORITY.low}
              checked={priority === PRIORITY.low}
              onChange={(e) => setPriority(e.target.value as Priority)}
              className="cursor-pointer"
            />
            Nízká
          </label>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onCancel}
          className={`${btn} flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100`}
        >
          Zrušit
        </button>
        <button
          onClick={onSave}
          className={`${btn} flex-1 bg-blue-600 text-white enabled:hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={isSaveDisabled}
        >
          Přidat úkol
        </button>
      </div>
    </div>
  );
}
