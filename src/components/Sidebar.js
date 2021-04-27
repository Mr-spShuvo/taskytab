import React, { useState } from 'react';

import SidebarDivider from './SidebarDivider';
import { CollatedTab } from '../common/';
import { collatedTabs } from '../utils';

import { Tabs } from './Tabs';

export const Sidebar = () => {
  const [showTabs, setShowTabs] = useState(true);

  const handleShowTabs = () => {
    setShowTabs(!showTabs);
  };

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        {collatedTabs.map(tab => (
          <CollatedTab key={tab.id} tab={tab} />
        ))}
      </ul>
      <SidebarDivider showTabs={showTabs} toggleTabs={handleShowTabs} />
      {showTabs && <Tabs />}
    </div>
  );
};
