import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deleteTodo, toggleTodo, updateTodo } from '../../redux/todoSlice';
import { Todo } from '../../types';
import cn from 'classnames';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteTodo({ id: todo.id }));
  const handleToggle = () => dispatch(toggleTodo({ id: todo.id }));
  const handleEdit = () => setIsEditing(true);

  const handleBlur = () => {
    setIsEditing(false);
    setEditText(todo.title);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editText.trim()) {
      handleDelete();
    } else {
      dispatch(updateTodo({ id: todo.id, title: editText.trim() }));
      setIsEditing(false);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleBlur();
    }
  };

  return (
    <div className={cn('todo', { completed: todo.completed })}>
      <label className="todo__status-label">
        <input
          className="todo__status"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
      </label>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              className="todo__title-field"
              placeholder="Empty todo will be deleted"
              value={editText}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyUp={handleKeyUp}
              autoFocus
            />
          </label>
        </form>
      ) : (
        <>
          <span className="todo__title" onDoubleClick={handleEdit}>
            {todo.title}
          </span>
          <button type="button" className="todo__remove" onClick={handleDelete}>
            ×
          </button>
        </>
      )}
    </div>
  );
};
