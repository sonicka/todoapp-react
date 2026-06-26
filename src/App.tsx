import "./index.css";
import { TodosHeader } from "./components/TodosHeader";
import { TodosList } from "./components/TodosList";
import { ModalContent } from "./components/ModalContent";
import { Modal } from "./components/Modal";
import { useTodos } from "./hooks/useTodos";
import { useModal } from "./hooks/useModal";

function App() {
  const {
    shownTodos,
    totalTodosNumber,
    finishedTodosNumber,
    unfinishedShownOnly,
    showUnfinishedOnly,
    createNewTodo,
    finishTodo,
    deleteTodo,
  } = useTodos();
  const modal = useModal(createNewTodo);

  return (
    <div className="flex flex-col items-center gap-8 py-4 px-4 sm:px-6 lg:px-0">
      <TodosHeader
        totalTodosNumber={totalTodosNumber}
        finishedTodosNumber={finishedTodosNumber}
        addNewTodo={modal.open}
        unfinishedShownOnly={unfinishedShownOnly}
        showUnfinishedOnly={showUnfinishedOnly}
      />
      <TodosList
        todos={shownTodos}
        finishTodo={finishTodo}
        deleteTodo={deleteTodo}
      />
      <Modal title={modal.modalLabel} open={modal.isOpen} onClose={modal.close}>
        <ModalContent modal={modal} />
      </Modal>
    </div>
  );
}

export default App;
