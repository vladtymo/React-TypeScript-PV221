import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AccountProvider from './contexts/account.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>
);
