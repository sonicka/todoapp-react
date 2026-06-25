import { btn } from "../shared/styles";

type Props = {
  onGoToForm: () => void;
  onGoToTemplates: () => void;
};

export function ModalOptions({ onGoToForm, onGoToTemplates }: Props) {
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
    </div>
  );
}
