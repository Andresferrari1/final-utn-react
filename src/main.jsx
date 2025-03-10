// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from "./router/Router";  // Sin llaves {}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
