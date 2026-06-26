import { btn } from "../shared/styles";

type Props = {
  onGoToForm: () => void;
  onGoToTemplates: () => void;
  onCancel: () => void;
};

export function ModalOptions({ onGoToForm, onGoToTemplates, onCancel }: Props) {
  return (
    <div className="flex flex-col gap-2 pt-10">
      <button
        className={`${btn} w-full bg-blue-600 text-white hover:bg-gray-800`}
        onClick={onGoToForm}
      >
        Vytvořit od začátku
      </button>
      <button
        className={`${btn} w-full bg-gray-600 text-white hover:bg-gray-800`}
        onClick={onGoToTemplates}
      >
        Vytvořit ze šablony
      </button>
      <button
        className={`${btn} mt-5 border border-gray-300 text-gray-700 hover:bg-gray-100`}
        onClick={onCancel}
      >
        Zrušit
      </button>
    </div>
  );
}
