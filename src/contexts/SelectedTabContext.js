import React, { createContext, useState } from 'react';

import { INBOX_TAB } from '../utils';

const SelectedTabContext = createContext();

const SelectedTabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(INBOX_TAB);
  return <SelectedTabContext.Provider value={[selectedTab, setSelectedTab]}>{children}</SelectedTabContext.Provider>;
};

export { SelectedTabContext, SelectedTabProvider };
