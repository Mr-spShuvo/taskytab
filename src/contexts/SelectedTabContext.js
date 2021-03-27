import React, { createContext, useContext, useState } from 'react';
const SelectedTabContext = createContext();

const SelectedTabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState([]);
  return <SelectedTabContext.Provider value={[selectedTab, setSelectedTab]}>{children}</SelectedTabContext.Provider>;
};

const useSelectedTabContext = () => useContext(SelectedTabContext);

export { SelectedTabContext, SelectedTabProvider, useSelectedTabContext };
