import React from "react";
import { TodoForm } from "../TodoForm";
import { useModal } from "../../../hooks/store";
import { FaTimes } from "react-icons/fa";
import styles from "./styles.module.scss";

const Modal = () => {
  const isOpen = useModal((state) => state.isOpen);
  const toggleModal = useModal((state) => state.toggleModal);

  const handleClose = () => {
    toggleModal(!isOpen);
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>Create a new todo</p>
          <FaTimes onClick={handleClose} className={styles.modalClose} />
        </div>
        <div className={styles.modalBody}>
          <TodoForm />
        </div>
      </div>
    </div>
  );
};

export { Modal };
