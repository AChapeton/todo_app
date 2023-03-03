import { TodoForm } from "./components/TodoForm";
import { TodoContainer } from "./components/TodoContainer";
import { CreateTodo } from "./components/CreateTodo";

const App = () => {
  return (
    <div>
      {/* <TodoForm /> */}
      <CreateTodo />
      <TodoContainer />
    </div>
  );
};

export default App;
