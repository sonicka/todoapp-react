import { MODAL_STATE } from "../shared/types";
import { ModalOptions } from "./ModalOptions";
import { ModalForm } from "./ModalForm";
import { ModalTemplates } from "./ModalTemplates";
import type { useModal } from "../hooks/useModal";

type Props = {
  modal: ReturnType<typeof useModal>;
};

export function ModalContent({ modal }: Props) {
  const {
    title,
    setTitle,
    priority,
    setPriority,
    modalState,
    goToForm,
    goToTemplates,
    save,
    close,
    goBack,
    applyTemplate,
  } = modal;

  return (
    <div>
      {modalState === MODAL_STATE.startingOptions && (
        <ModalOptions onGoToForm={goToForm} onGoToTemplates={goToTemplates} />
      )}
      {modalState === MODAL_STATE.form && (
        <ModalForm
          title={title}
          priority={priority}
          setTitle={setTitle}
          setPriority={setPriority}
          onSave={save}
          onCancel={close}
        />
      )}
      {modalState === MODAL_STATE.templates && (
        <ModalTemplates
          onApply={applyTemplate}
          onBack={goBack}
          onClose={close}
        />
      )}
    </div>
  );
}
