import React from 'react';
import { MdLens } from 'react-icons/md';
import { useSelectedTabContext, useTabsContext } from '../contexts';

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useSelectedTabContext();
  const [tabs, setTabs] = useTabsContext();

  return (
    <ul className="sidebar__tabs">
      {tabs.map(tab => (
        <li className="sidebar__item" key={tab.id}>
          <a href="/" className="sidebar__link">
            <span className="sidebar__icon">
              <MdLens style={{ fill: tab.color }} />
            </span>
            <span className="sidebar__link-text">{tab.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
