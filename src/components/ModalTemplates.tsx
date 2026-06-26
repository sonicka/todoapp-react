import { TodosTemplates } from "../data/todos";
import { PRIORITY_LABEL } from "../shared/constants";
import { btn } from "../shared/styles";
import type { Template } from "../shared/types";

type Props = {
  onApply: (template: Template) => void;
  onBack: () => void;
  onClose: () => void;
};

export function ModalTemplates({ onApply, onBack, onClose }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 pt-6">
        {TodosTemplates.map((template) => (
          <div
            className="w-full max-w-md rounded-lg border border-gray-300 bg-gray-100 p-5 cursor-pointer hover:border-gray-400 hover:bg-white"
            key={template.id}
            onClick={() => onApply(template)}
          >
            <h5 className="pb-1">{template.title}</h5>
            <span>{`Priorita: ${PRIORITY_LABEL[template.defaults.priority]}`}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2 justify-center">
        <button
          onClick={onClose}
          className={`${btn} flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100`}
        >
          Zrušit
        </button>
        <button
          onClick={onBack}
          className={`${btn} flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100`}
        >
          Zpět
        </button>
      </div>
    </div>
  );
}
