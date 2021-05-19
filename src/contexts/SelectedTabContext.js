import React, { createContext, useContext, useEffect, useState } from 'react';

import { AuthContext } from './AuthContext';
import { TabsContext } from './TabContext';

const SelectedTabContext = createContext();

const SelectedTabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState();
  const { user } = useContext(AuthContext);
  const [inboxTab] = useContext(TabsContext)[1];

  useEffect(() => {
    setSelectedTab(inboxTab);
  }, [inboxTab, user]);
  return (
    <SelectedTabContext.Provider value={[selectedTab, setSelectedTab]}>
      {children}
    </SelectedTabContext.Provider>
  );
};

export { SelectedTabContext, SelectedTabProvider };
