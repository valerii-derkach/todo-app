import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>
      <div className="todoapp__content">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
