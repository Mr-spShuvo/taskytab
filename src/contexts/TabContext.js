import React, { useContext, createContext } from 'react';
import { useTabs } from '../hooks';

const TabsContext = createContext();

const TabsProvider = ({ children }) => {
  const [tabs, setTabs] = useTabs();
  return <TabsContext.Provider value={[tabs, setTabs]}>{children}</TabsContext.Provider>;
};
const useTabsContext = () => useContext(TabsContext);

export { TabsContext, TabsProvider, useTabsContext };
