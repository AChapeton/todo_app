import React from "react";
import { useModal } from "../../../hooks/store";
import styles from "./styles.module.scss";

function CreateTodo() {
  const isOpen = useModal((state) => state.isOpen);
  const toggleModal = useModal((state) => state.toggleModal);

  const handleOpen = () => {
    toggleModal(!isOpen);
  };

  return (
    <button className={styles.buttonCreate} onClick={handleOpen}>
      Create Todo
    </button>
  );
}

export { CreateTodo };
