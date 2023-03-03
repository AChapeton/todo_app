import React from "react";
import { useForm } from "react-hook-form";
import { useTodoList, useModal } from "../../../hooks/store";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          {...register("title", { required: true, maxLength: 50 })}
        />
        {errors.title?.type === "required" && <p>Title is required</p>}
        {errors.title?.type === "maxLength" && (
          <p>Title cannot have more than 50 characters</p>
        )}
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          id="desc"
          {...register("desc", { required: true, maxLength: 200 })}
        />
        {errors.desc?.type === "required" && <p>Description is required</p>}
        {errors.desc?.type === "maxLength" && (
          <p>Description cannot have more than 50 characters</p>
        )}
      </div>
      <div>
        <label>User:</label>
        <input
          type="text"
          name="user"
          id="user"
          {...register("user", { required: true, maxLength: 50 })}
        />
        {errors.user?.type === "required" && <p>User is required</p>}
        {errors.user?.type === "maxLength" && (
          <p>User cannot have more than 50 characters</p>
        )}
      </div>
      <div>
        <label>Due date:</label>
        <input
          type="date"
          name="date"
          id="date"
          {...register("date", { required: true })}
        />
        {errors.date?.type === "required" && <p>Date is required</p>}
      </div>
      <button>Create</button>
    </form>
  );
};

export { TodoForm };
