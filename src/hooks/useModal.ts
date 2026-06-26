import { useState } from "react";
import { type ModalState, type Priority, type Template } from "../shared/types";
import { MODAL_STATE, PRIORITY } from "../shared/constants";

const INITIAL_TITLE = "";
const INITIAL_PRIORITY: Priority = PRIORITY.normal;
const INITIAL_MODAL_STATE: ModalState = MODAL_STATE.startingOptions;

const ModalLabel: Record<ModalState, string> = {
  startingOptions: "Vytvořit nový úkol",
  form: "Podrobnosti úkolu",
  templates: "Vyberte šablonu",
};

export function useModal(addTodo: (title: string, priority: Priority) => void) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState<ModalState>(INITIAL_MODAL_STATE);
  const [title, setTitle] = useState(INITIAL_TITLE);
  const [priority, setPriority] = useState<Priority>(INITIAL_PRIORITY);

  const resetForm = () => {
    setTitle(INITIAL_TITLE);
    setPriority(INITIAL_PRIORITY);
  };

  const open = () => {
    resetForm();
    setModalState(INITIAL_MODAL_STATE);
    setIsOpen(true);
  };

  const goToForm = () => setModalState(MODAL_STATE.form);
  const goToTemplates = () => setModalState(MODAL_STATE.templates);
  const goBack = () => setModalState(INITIAL_MODAL_STATE);

  const applyTemplate = (template: Template) => {
    setTitle(template.defaults.title);
    setPriority(template.defaults.priority);
    setModalState(MODAL_STATE.form);
  };

  const save = () => {
    addTodo(title, priority);
    close();
  };

  const close = () => {
    resetForm();
    setModalState(INITIAL_MODAL_STATE);
    setIsOpen(false);
  };

  return {
    title,
    priority,
    setTitle,
    setPriority,
    modalLabel: ModalLabel[modalState],
    modalState,
    isOpen,
    open,
    goToForm,
    goToTemplates,
    applyTemplate,
    save,
    goBack,
    close,
  };
}
