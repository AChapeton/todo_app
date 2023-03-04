import React from "react";
import { TodoForm } from "../TodoForm";
import { useModal } from "../../../hooks/store";
import styles from "./styles.module.scss";

const Modal = () => {
  const isOpen = useModal((state) => state.isOpen);
  const toggleModal = useModal((state) => state.toggleModal);

  const handleClose = () => {
    toggleModal(!isOpen);
  };

  return (
    <div className={styles.modalBackground}>
      <p onClick={handleClose}>X</p>
      <TodoForm />
    </div>
  );
};

export { Modal };
