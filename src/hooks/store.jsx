import { create } from "zustand";

const useTodoList = create((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => {
      const newTodo = { ...todo, complete: false };
      return { todos: [...state.todos, newTodo] };
    });
  },
  completeTodo: (desc) => {
    set((state) => {
      const todoIndex = state.todos.findIndex((todo) => todo.desc === desc);
      const newTodos = [...state.todos];
      newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
      return { todos: [...newTodos] };
      console.log(todoIndex);
    });
  },
}));

export { useTodoList };
