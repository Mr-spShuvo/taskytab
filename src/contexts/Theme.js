import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const darkMode = useState(false);
  return <ThemeContext.Provider value={darkMode}>{children}</ThemeContext.Provider>;
};
