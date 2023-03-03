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
        <input type="text" name="name" id="id" {...register("name")} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" id="date" {...register("date")} />
      </div>
      <div>
        <label>Todo:</label>
        <input type="text" name="desc" id="desc" {...register("desc")} />
      </div>
      <button>Create</button>
    </form>
  );
};

export { TodoForm };
