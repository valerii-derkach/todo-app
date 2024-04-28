import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { clearCompleted } from '../../redux/todoSlice';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const dispatch = useAppDispatch();

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">{activeCount} items left</span>
      <nav className="filter">
        <a>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `filter__link ${isActive ? 'selected' : ''}`
            }
            end
          >
            All
          </NavLink>
        </a>
        <a>
          <NavLink
            to="/active"
            className={({ isActive }) =>
              `filter__link ${isActive ? 'selected' : ''}`
            }
          >
            Active
          </NavLink>
        </a>
        <a>
          <NavLink
            to="/completed"
            className={({ isActive }) =>
              `filter__link ${isActive ? 'selected' : ''}`
            }
          >
            Completed
          </NavLink>
        </a>
      </nav>
      <button
        className="todoapp__clear-completed"
        onClick={() => dispatch(clearCompleted())}
        disabled={activeCount === todos.length}
      >
        Remove completed
      </button>
    </footer>
  );
};
