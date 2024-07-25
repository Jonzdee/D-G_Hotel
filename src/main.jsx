import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import App from './App.jsx';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
 
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    
  </React.StrictMode>
);