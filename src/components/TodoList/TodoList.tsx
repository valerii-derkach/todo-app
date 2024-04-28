import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { TodoItem } from '../TodoItem/TodoItem';

interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
}

export const TodoList: React.FC<TodoListProps> = ({ filter }) => {
  const todos = useAppSelector((state) =>
    filter === 'all'
      ? state.todos
      : state.todos.filter((todo) =>
          filter === 'completed' ? todo.completed : !todo.completed,
        ),
  );

  return (
    <section className="todoapp__main">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
