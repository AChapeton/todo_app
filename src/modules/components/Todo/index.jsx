import React from "react";
import styles from "./styles.module.scss";
import { FaUserAlt, FaRegCalendarAlt, FaRegTrashAlt } from "react-icons/fa";
import dateFormat from "dateformat";

const Todo = ({ title, desc, user, date, complete, onComplete, onDelete }) => {
  const handleCheck = (e) => {
    return e.target.checked;
  };

  const formatDate = dateFormat(date, "mmmm dS");

  return (
    <div
      className={`${styles.todoCard} ${
        complete ? styles.todoComplete : styles.todoUncomplete
      }`}
    >
      <p
        className={`${styles.todoTitle} ${
          complete ? styles.todoTitleComplete : styles.todoTitleUncomplete
        }`}
      >
        {title}
      </p>
      <p>{desc}</p>
      <p>
        <FaUserAlt />: {user}
      </p>
      <p>
        <FaRegCalendarAlt />: {formatDate}
      </p>
      <div className={styles.todoActions}>
        <input
          type="checkbox"
          name="check"
          id="check"
          onClick={onComplete}
          onChange={handleCheck}
          checked={complete}
        />
        <button onClick={onDelete}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export { Todo };
