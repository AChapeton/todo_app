import React from "react";
import styles from "./styles.module.scss";

const TodoList = ({ children }) => {
  return <div className={styles.todoList}>{children}</div>;
};

export { TodoList };
