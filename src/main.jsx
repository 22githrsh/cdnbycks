import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Ensure the path and import are correct
import './index.css';  // Import your styles if you have them

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);