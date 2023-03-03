import React from "react";
import { TodoList } from "../TodoList";
import { Todo } from "../Todo";
import { useTodoList, useModal } from "../../../hooks/store";
import { Modal } from "../Modal";

const TodoContainer = () => {
  const todos = useTodoList((state) => state.todos);
  const completeTodo = useTodoList((state) => state.completeTodo);
  const deleteTodo = useTodoList((state) => state.deleteTodo);
  const isOpen = useModal((state) => state.isOpen);

  const uncompletedTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);

  const handleCompleteTodo = (title) => {
    completeTodo(title);
    console.log(todos);
  };

  const handleDeleteTodo = (title) => {
    deleteTodo(title);
  };

  return (
    <div>
      {isOpen && <Modal />}
      <h3>Todos</h3>
      <TodoList>
        {uncompletedTodos.map(({ title, desc, user, date, complete }) => (
          <Todo
            key={title}
            title={title}
            desc={desc}
            user={user}
            date={date}
            complete={complete}
            onComplete={() => handleCompleteTodo(title)}
            onDelete={() => handleDeleteTodo(title)}
          />
        ))}
      </TodoList>
      <h3>Completed todos</h3>
      <TodoList>
        {completedTodos.map(({ title, desc, user, date, complete }) => (
          <Todo
            key={title}
            title={title}
            desc={desc}
            user={user}
            date={date}
            complete={complete}
            onComplete={() => handleCompleteTodo(title)}
            onDelete={() => handleDeleteTodo(title)}
          />
        ))}
      </TodoList>
    </div>
  );
};

export { TodoContainer };
