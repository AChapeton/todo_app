import React from "react";
import { TodoList } from "../TodoList";
import { Todo } from "../Todo";
import { useTodoList } from "../../../hooks/store";
import styles from "./styles.module.scss";

const TodoContainer = () => {
  const todos = useTodoList((state) => state.todos);
  const completeTodo = useTodoList((state) => state.completeTodo);
  const deleteTodo = useTodoList((state) => state.deleteTodo);

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
    <div className={styles.todosContainer}>
      <div>
        <h3>Todos</h3>
        <TodoList>
          {uncompletedTodos.length > 0 ? (
            uncompletedTodos.map(({ title, desc, user, date, complete }) => (
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
            ))
          ) : (
            <p>There are no pending todos</p>
          )}
        </TodoList>
      </div>
      <div>
        <h3>Completed todos</h3>
        <TodoList>
          {completedTodos.length > 0 ? (
            completedTodos.map(({ title, desc, user, date, complete }) => (
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
            ))
          ) : (
            <p>There are no completed todos</p>
          )}
        </TodoList>
      </div>
    </div>
  );
};

export { TodoContainer };
