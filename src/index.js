import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { ThemeProvider } from './contexts';

render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
