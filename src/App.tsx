import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoList } from './components/TodoList';
import { NotFoundPage } from './components/NotFoundPage';
import { Layout } from './components/Layout/Layout';

export const App: React.FC = () => {
  return (
    <Router basename="/todo-app/">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <TodoList filter="all" />
            </Layout>
          }
        />
        <Route
          path="/active"
          element={
            <Layout>
              <TodoList filter="active" />
            </Layout>
          }
        />
        <Route
          path="/completed"
          element={
            <Layout>
              <TodoList filter="completed" />
            </Layout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
