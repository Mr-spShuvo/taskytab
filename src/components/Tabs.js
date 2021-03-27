import React, { useState } from 'react';
import { MdDelete, MdLens } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { useSelectedTabContext, useTabsContext } from '../contexts';

export const Tabs = () => {
  const [isDeleteClick, setIsDeleteClick] = useState(false);
  const [selectedTabId, setSelectedTabId] = useSelectedTabContext();
  const [tabs, setTabs] = useTabsContext();

  const handleSelectTab = tabId => {
    setSelectedTabId(tabId);
  };

  const handleDelete = () => {
    setIsDeleteClick(true);
  };

  const handleDeleteConfirm = () => {
    setIsDeleteClick(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteClick(false);
  };

  return (
    <ul className="sidebar__tabs">
      {tabs.map(tab => (
        <li className="sidebar__item" key={tab.id}>
          {/* // eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <button className={`sidebar__link${selectedTabId === tab.id ? ' active' : ''}`} onClick={() => handleSelectTab(tab.id)}>
            <span className="sidebar__icon">
              <MdLens style={{ fill: tab.color }} />
              <span className="sidebar__link-text">{tab.name}</span>
            </span>

            <button onClick={handleDelete} className="sidebar__icon sidebar__icon--delete" style={{ visibility: isDeleteClick && 'visible', opacity: isDeleteClick && 1 }}>
              <BiTrash />
            </button>
          </button>
          {isDeleteClick && (
            <div className="sidebar__deletePopup">
              <p>Are you sure, you want to delete this tab?</p>
              <div className="sidebar__deleteAction">
                <button onClick={handleDeleteConfirm} className="sidebar__deleteButton sidebar__deleteButton--confirm">
                  Delete
                </button>
                <button onClick={handleDeleteCancel} className="sidebar__deleteButton sidebar__deleteButton--cancel">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
