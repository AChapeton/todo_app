import { TodoForm } from "./modules/TodoForm";
import { TodoList } from "./modules/TodoList";
import { Todo } from "./modules/Todo";
import { useTodoList } from "./hooks/store";

const App = () => {
  const todos = useTodoList((state) => state.todos);

  return (
    <div>
      <TodoForm />
      <TodoList>
        {todos.map(({ name, date, todo }) => (
          <Todo key={todo} name={name} date={date} todo={todo} />
        ))}
      </TodoList>
    </div>
  );
};

export default App;
