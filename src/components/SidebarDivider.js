import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { ModalAddTab } from './ModalAddTab';

const SidebarDivider = ({ showTabs, toggleTabs }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddTab = () => {
    setModalOpen(true);
  };
  return (
    <div className="sidebar__divider">
      <div className="sidebar__link">
        <button className="sidebar__action" onClick={toggleTabs}>
          <span className="sidebar__icon">{showTabs ? <HiChevronDown /> : <HiChevronRight />}</span>
          <span className={`sidebar__link-text ${!showTabs && 'active'}`}>Tabs List</span>
        </button>
      </div>
      <div className="sidebar__action">
        <button className="btn btn--sm sidebar__icon" onClick={handleAddTab}>
          <MdAdd />
        </button>
        <ModalAddTab state={[isModalOpen, setModalOpen]} />
      </div>
    </div>
  );
};

export default SidebarDivider;
