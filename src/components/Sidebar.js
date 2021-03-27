import React from 'react';
import { MdEvent, MdEventNote, MdInbox, MdArchive, MdAdd, MdChevronRight, MdLabel, MdExpandMore } from 'react-icons/md';
import { useSelectedTabContext, useTabsContext } from '../contexts';
import { Tabs } from './Tabs';

export const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useSelectedTabContext();
  const [tabs, setTabs] = useTabsContext();

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        {/* CollatedTabs */}
        <li className="sidebar__item">
          <a href="/" className="sidebar__link active">
            <span className="sidebar__icon">
              <MdInbox />
            </span>
            <span className="sidebar__link-text">Inbox</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/" className="sidebar__link">
            <span className="sidebar__icon">
              <MdEvent />
            </span>
            <span className="sidebar__link-text">Today</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/" className="sidebar__link sidebar__link--active">
            <span className="sidebar__icon">
              <MdEventNote />
            </span>
            <span className="sidebar__link-text">This Week</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/" className="sidebar__link sidebar__link--active">
            <span className="sidebar__icon">
              <MdArchive />
            </span>
            <span className="sidebar__link-text">Archived</span>
          </a>
        </li>
      </ul>
      <div className="sidebar__divider">
        <div className="sidebar__link">
          <span className="sidebar__icon">
            <MdLabel />
          </span>
          <span className="sidebar__link-text">Tabs List</span>
        </div>
        <button href="#" className="sidebar__action">
          <span className="sidebar__icon">
            <MdChevronRight />
          </span>
        </button>
      </div>
      <Tabs />
    </div>
  );
};
