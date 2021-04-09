import React, { useContext } from 'react';

import { TabsContext } from '../contexts';
import { Tab } from '../common';

export const Tabs = () => {
  const [tabs] = useContext(TabsContext);

  return (
    <ul className="sidebar__tabs">
      {tabs.map(tab => (
        <Tab key={tab.id} tab={tab} />
      ))}
    </ul>
  );
};
