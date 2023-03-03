import { create } from "zustand";

const useTodoList = create((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => {
      const newTodo = { ...todo };
      return { todos: [...state.todos, newTodo] };
    });
  },
}));

export { useTodoList };
