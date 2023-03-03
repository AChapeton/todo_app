import React from "react";
import { useForm } from "react-hook-form";
import { useTodoList } from "../../hooks/store";

const TodoForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const addTodo = useTodoList((state) => state.addTodo);

  const onSubmit = (todo) => {
    addTodo(todo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          id="id"
          {...register("name", { required: true, maxLength: 50 })}
        />
        {errors.name?.type === "required" && <p>Name is required</p>}
        {errors.name?.type === "maxLength" && (
          <p>Name cannot be more than 50 characters</p>
        )}
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          {...register("date", { required: true })}
        />
        {errors.date?.type === "required" && <p>Date is required</p>}
      </div>
      <div>
        <label>Todo:</label>
        <input
          type="text"
          name="desc"
          id="desc"
          {...register("desc", { required: true, maxLength: 200 })}
        />
        {errors.desc?.type === "required" && <p>Name is required</p>}
        {errors.desc?.type === "maxLength" && (
          <p>Description cannot be more than 50 characters</p>
        )}
      </div>
      <button>Create</button>
    </form>
  );
};

export { TodoForm };
