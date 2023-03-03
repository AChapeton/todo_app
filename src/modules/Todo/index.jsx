import React from "react";

const Todo = ({ name, date, todo }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{date}</p>
      <p>{todo}</p>
    </div>
  );
};

export { Todo };
