import React from 'react';
import ReactDOM from 'react-dom/client';
// FIX: Update import statement for App.tsx to point to the correct file path `./App.tsx`.
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);