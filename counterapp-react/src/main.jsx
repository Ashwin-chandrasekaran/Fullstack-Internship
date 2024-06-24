import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App.jsx';
import './index.css';

// Use ReactDOM.createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

