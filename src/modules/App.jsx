import { TodoForm } from "./components/TodoForm";
import { TodoContainer } from "./components/TodoContainer";
import { TodoHeader } from "./components/TodoHeader";
import { Modal } from "./components/Modal";
import { useModal } from "../hooks/store";
import "../styles/base.scss";

const App = () => {
  const isOpen = useModal((state) => state.isOpen);
  return (
    <div>
      {isOpen && <Modal />}
      <TodoHeader />
      <TodoContainer />
    </div>
  );
};

export default App;
