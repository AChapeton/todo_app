import React from "react";
import { useTodoList } from "../../hooks/store";

const Todo = ({ name, date, desc, complete, onComplete }) => {
  // const completeTodo = useTodoList((state) => state.completeTodo);

  return (
    <>
      <p>{name}</p>
      <p>{date}</p>
      <p>{desc}</p>
      <span onClick={onComplete}>X</span>
    </>
  );
};

export { Todo };
