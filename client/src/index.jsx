import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './app.css';

const root = document.getElementById('root');
createRoot(root).render(<App />);