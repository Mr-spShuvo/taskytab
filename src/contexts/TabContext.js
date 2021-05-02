import React, { createContext } from 'react';
import { useTabs } from '../hooks';

export const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
  const tabsState = useTabs();
  return <TabsContext.Provider value={tabsState}>{children}</TabsContext.Provider>;
};
