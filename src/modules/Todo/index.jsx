import React from "react";
import { useTodoList } from "../../hooks/store";

const Todo = ({ title, desc, user, date, complete, onComplete, onDelete }) => {
  const handleCheck = (e) => {
    return e.target.checked;
  };

  return (
    <div>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{user}</p>
      <p>{date}</p>
      <input
        type="checkbox"
        name="check"
        id="check"
        onClick={onComplete}
        onChange={handleCheck}
        checked={complete}
      />
      {/* <p onClick={onComplete}>Complete</p> */}
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export { Todo };
