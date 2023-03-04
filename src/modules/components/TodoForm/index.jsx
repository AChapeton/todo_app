import React from "react";
import { useForm } from "react-hook-form";
import { useTodoList, useModal } from "../../../hooks/store";
import styles from "./styles.module.scss";

const TodoForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const addTodo = useTodoList((state) => state.addTodo);

  const isOpen = useModal((state) => state.isOpen);
  const toggleModal = useModal((state) => state.toggleModal);

  const onSubmit = (todo) => {
    addTodo(todo);
    reset();
    toggleModal(!isOpen);
  };

  const handleCancel = () => {
    reset();
    toggleModal(!isOpen);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label className={styles.formLabel}>Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          className={`${styles.formInput} ${
            errors.title ? styles.inputError : styles.inputSuccess
          }`}
          {...register("title", { required: true, maxLength: 50 })}
        />
        {errors.title?.type === "required" && (
          <p className={styles.errorMessage}>Title is required</p>
        )}
        {errors.title?.type === "maxLength" && (
          <p className={styles.errorMessage}>
            Title cannot have more than 50 characters
          </p>
        )}
      </div>
      <div>
        <label className={styles.formLabel}>Description:</label>
        <input
          type="text"
          name="desc"
          id="desc"
          className={`${styles.formInput} ${
            errors.desc ? styles.inputError : styles.inputSuccess
          }`}
          {...register("desc", { required: true, maxLength: 200 })}
        />
        {errors.desc?.type === "required" && (
          <p className={styles.errorMessage}>Description is required</p>
        )}
        {errors.desc?.type === "maxLength" && (
          <p className={styles.errorMessage}>
            Description cannot have more than 50 characters
          </p>
        )}
      </div>
      <div>
        <label className={styles.formLabel}>User:</label>
        <input
          type="text"
          name="user"
          id="user"
          className={`${styles.formInput} ${
            errors.user ? styles.inputError : styles.inputSuccess
          }`}
          {...register("user", { required: true, maxLength: 50 })}
        />
        {errors.user?.type === "required" && (
          <p className={styles.errorMessage}>User is required</p>
        )}
        {errors.user?.type === "maxLength" && (
          <p className={styles.errorMessage}>
            User cannot have more than 50 characters
          </p>
        )}
      </div>
      <div>
        <label className={styles.formLabel}>Due date:</label>
        <input
          type="date"
          name="date"
          id="date"
          className={`${styles.formInput} ${
            errors.date ? styles.inputError : styles.inputSuccess
          }`}
          {...register("date", { required: true })}
        />
        {errors.date?.type === "required" && (
          <p className={styles.errorMessage}>Date is required</p>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.buttonSuccess}`}>
          Create
        </button>
        <button
          className={`${styles.button} ${styles.buttonCancel}`}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
