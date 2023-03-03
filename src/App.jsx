import { TodoForm } from "./modules/TodoForm";
import { TodoList } from "./modules/TodoList";
import { Todo } from "./modules/Todo";
import { useTodoList } from "./hooks/store";

const App = () => {
  const todos = useTodoList((state) => state.todos);
  const completeTodo = useTodoList((state) => state.completeTodo);
  const deleteTodo = useTodoList((state) => state.deleteTodo);

  const handleCompleteTodo = (desc) => {
    completeTodo(desc);
  };

  const handleDeleteTodo = (desc) => {
    deleteTodo(desc);
  };

  return (
    <div>
      <TodoForm />
      <TodoList>
        {todos.map(({ name, date, desc, complete }) => (
          <Todo
            key={name}
            name={name}
            date={date}
            desc={desc}
            complete={complete}
            onComplete={() => handleCompleteTodo(desc)}
            onDelete={() => handleDeleteTodo(desc)}
          />
        ))}
      </TodoList>
    </div>
  );
};

export default App;
