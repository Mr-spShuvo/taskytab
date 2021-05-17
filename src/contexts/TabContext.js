import React, { createContext } from 'react';
import { useTabs } from '../hooks';
import { INBOX_TAB, TODAY_TAB, WEEK_TAB, ARCHIVED_TAB } from '../utils';

export const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
  const [tabs, inboxTab] = useTabs();
  INBOX_TAB.id = inboxTab?.id || '';
  const collatedTabs = [INBOX_TAB, TODAY_TAB, WEEK_TAB, ARCHIVED_TAB];

  return (
    <TabsContext.Provider value={[tabs, collatedTabs]}>
      {children}
    </TabsContext.Provider>
  );
};
