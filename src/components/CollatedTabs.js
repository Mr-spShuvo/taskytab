import React from 'react';
import { CollatedTab } from '../common';

export const CollatedTabs = ({ tabs }) => (
  <ul className="sidebar__generic">
    {tabs?.length && tabs.map(tab => <CollatedTab key={tab.id} tab={tab} />)}
  </ul>
);
