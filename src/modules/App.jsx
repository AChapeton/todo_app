import { TodoForm } from "./components/TodoForm";
import { TodoContainer } from "./components/TodoContainer";
import { CreateTodo } from "./components/CreateTodo";
import { Modal } from "./components/Modal";
import { useModal } from "../hooks/store";
import "../styles/base.scss";

const App = () => {
  const isOpen = useModal((state) => state.isOpen);
  return (
    <div>
      {isOpen && <Modal />}
      <TodoContainer />
      <CreateTodo />
    </div>
  );
};

export default App;
