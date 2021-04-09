import React from 'react';
import { MdChevronRight, MdAdd } from 'react-icons/md';

const SidebarDivider = () => {
  return (
    <div className="sidebar__divider">
      <div className="sidebar__link">
        <span className="sidebar__icon">
          <MdChevronRight />
        </span>
        <span className="sidebar__link-text">Tabs List</span>
      </div>
      <button href="#" className="sidebar__action">
        <span className="sidebar__icon">
          <MdAdd />
        </span>
      </button>
    </div>
  );
};

export default SidebarDivider;
