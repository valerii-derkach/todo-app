import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types';

const savedTodos = localStorage.getItem('todos');
const initialTodos: Todo[] = savedTodos ? JSON.parse(savedTodos) : [];

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newTodo = {
        id: +new Date(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    clearCompleted: (state) => {
      const activeTodos = state.filter((todo) => !todo.completed);
      localStorage.setItem('todos', JSON.stringify(activeTodos));
      return activeTodos;
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; title: string }>,
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
