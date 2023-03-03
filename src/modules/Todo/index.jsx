import React from "react";
import { useTodoList } from "../../hooks/store";

const Todo = ({ title, desc, user, date, complete, onComplete, onDelete }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{user}</p>
      <p>{date}</p>
      <p onClick={onComplete}>Complete</p>
      <p onClick={onDelete}>X</p>
    </div>
  );
};

export { Todo };
