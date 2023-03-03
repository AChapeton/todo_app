import React from "react";
import { useTodoList } from "../../hooks/store";

const Todo = ({ name, date, desc, complete, onComplete, onDelete }) => {
  // const completeTodo = useTodoList((state) => state.completeTodo);

  return (
    <>
      <p>{name}</p>
      <p>{date}</p>
      <p>{desc}</p>
      <p onClick={onComplete}>Complete</p>
      <p onClick={onDelete}>X</p>
    </>
  );
};

export { Todo };
