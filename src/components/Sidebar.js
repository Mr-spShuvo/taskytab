import React, { useContext } from 'react';

import { TabsContext } from '../contexts';
import { Tabs } from './Tabs';
import { CollatedTabs } from './CollatedTabs';
import SidebarDivider from './SidebarDivider';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Sidebar = () => {
  const [tabs, collatedTabs] = useContext(TabsContext);
  const [showTabs, setShowTabs] = useLocalStorage('taskytab-showTabs', true);

  const handleShowTabs = () => {
    setShowTabs(!showTabs);
  };

  return (
    <div className="sidebar" data-testid="sidebar">
      <CollatedTabs tabs={collatedTabs} />
      <SidebarDivider showTabs={showTabs} toggleTabs={handleShowTabs} />
      {showTabs && <Tabs tabs={tabs} />}
    </div>
  );
};
