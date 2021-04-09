import React, { useContext } from 'react';
import { SelectedTabContext } from '../contexts';

export const CollatedTab = ({ tab }) => {
  const { icon: Icon, name, id } = tab;
  const [selectedTab, setSelectedTab] = useContext(SelectedTabContext);

  const handleSelectTab = tab => {
    setSelectedTab(tab);
  };

  return (
    /* eslint-disable-next-line */
    <li className={`sidebar__item${selectedTab.id === id ? ' active' : ''}`} onClick={() => handleSelectTab(tab)}>
      <a href="/" onClick={e => e.preventDefault()} className="sidebar__link">
        <span className="sidebar__icon">
          <Icon />
        </span>
        <span className="sidebar__link-text">{name}</span>
      </a>
    </li>
  );
};
