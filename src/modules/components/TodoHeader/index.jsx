import React from "react";
import { CreateTodo } from "../CreateTodo";
import { useTodoList } from "../../../hooks/store";
import styles from "./styles.module.scss";

function TodoHeader() {
  const todos = useTodoList((state) => state.todos);

  const completedTodos = todos.filter((todo) => todo.complete);

  return (
    <div className={styles.headerContainer}>
      <h1>Todo List</h1>
      {!todos.length ? (
        <h3>You don't have any todos</h3>
      ) : (
        <h3>
          You've completed {completedTodos.length} of {todos.length} todos
        </h3>
      )}
      <CreateTodo />
    </div>
  );
}

export { TodoHeader };
