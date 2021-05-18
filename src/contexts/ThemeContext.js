import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const themeState = useLocalStorage('tasktytab-theme', false);
  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};
