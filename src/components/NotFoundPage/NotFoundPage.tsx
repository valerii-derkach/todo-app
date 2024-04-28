import React from 'react';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>The page you are looking for does not exist or has been moved.</p>
    </div>
  );
};
