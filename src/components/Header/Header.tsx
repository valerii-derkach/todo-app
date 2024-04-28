import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addTodo } from '../../redux/todoSlice';

export const Header: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo({ title: title.trim() }));
      setTitle('');
    }
  };

  return (
    <header className="todoapp__header">
      <form onSubmit={handleSubmit} className="header-form">
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="What needs to be done?"
          className="todoapp__new-todo"
          autoFocus
        />
      </form>
    </header>
  );
};
