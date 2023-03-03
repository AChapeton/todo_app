import { create } from "zustand";

const useTodoList = create((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => {
      const newTodo = { ...todo, complete: false };
      return { todos: [...state.todos, newTodo] };
    });
  },
  completeTodo: (title) => {
    set((state) => {
      const todoIndex = state.todos.findIndex((todo) => todo.title === title);
      const newTodos = [...state.todos];
      newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
      return { todos: [...newTodos] };
      console.log(todoIndex);
    });
  },
  deleteTodo: (title) => {
    set((state) => {
      const todoIndex = state.todos.findIndex((todo) => todo.title === title);
      const newTodos = [...state.todos];
      newTodos.splice(todoIndex, 1);
      return { todos: [...newTodos] };
      console.log(todoIndex);
    });
  },
}));

export { useTodoList };
