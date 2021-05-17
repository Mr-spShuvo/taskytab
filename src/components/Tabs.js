import React from 'react';

import { Tab } from '../common';

export const Tabs = ({ tabs }) => (
  <ul className="sidebar__tabs">
    {tabs.map(tab => (
      <Tab key={tab.id} tab={tab} />
    ))}
  </ul>
);
