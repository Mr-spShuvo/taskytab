import React from 'react';
import { MdAdd } from 'react-icons/md';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';

const SidebarDivider = ({ showTabs, toggleTabs }) => {
  return (
    <div className="sidebar__divider">
      <div className="sidebar__link">
        <button className="sidebar__action" onClick={toggleTabs}>
          <span className="sidebar__icon">{showTabs ? <HiChevronDown /> : <HiChevronRight />}</span>
          <span className={`sidebar__link-text ${!showTabs && 'active'}`}>Tabs List</span>
        </button>
      </div>
      <button className="sidebar__action">
        <span className="sidebar__icon">
          <MdAdd />
        </span>
      </button>
    </div>
  );
};

export default SidebarDivider;
