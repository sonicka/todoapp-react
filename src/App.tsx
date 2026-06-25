import "./index.css";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { useTodos } from "./hooks/useTodos";
import { TodosList } from "./components/TodosList";
import { ModalContent } from "./components/ModalContent";
import { useModal } from "./hooks/useModal";

function App() {
  const {
    shownTodos,
    unfinishedShownOnly,
    showUnfinishedOnly,
    totalTodosNumber,
    finishedTodosNumber,
    createNewTodo,
    finishTodo,
    deleteTodo,
  } = useTodos();
  const modal = useModal(createNewTodo);

  return (
    <section className="flex justify-center flex-col gap-8 py-4">
      <Header
        totalTodosNumber={totalTodosNumber}
        finishedTodosNumber={finishedTodosNumber}
        createNewTodo={modal.open}
        unfinishedShownOnly={unfinishedShownOnly}
        showUnfinishedOnly={showUnfinishedOnly}
      />
      <TodosList
        todos={shownTodos}
        finishTodo={finishTodo}
        deleteTodo={deleteTodo}
      />
      <Modal title={modal.modalTitle} open={modal.isOpen} onClose={modal.close}>
        <ModalContent modal={modal} />
      </Modal>
    </section>
  );
}

export default App;
