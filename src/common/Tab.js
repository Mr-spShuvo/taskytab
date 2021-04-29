import React, { useContext, useState } from 'react';
import { MdLens } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { SelectedTabContext } from '../contexts';

export const Tab = ({ tab }) => {
  const { name, color, id } = tab;

  const [selectedTab, setSelectedTab] = useContext(SelectedTabContext);
  const handleSelectTab = tab => {
    setSelectedTab(tab);
  };

  const [isDeleteClick, setIsDeleteClick] = useState(false);
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
    <li className="sidebar__item">
      {/* eslint-disable-next-line */}
      <div className={`sidebar__link ${selectedTab.id === id && 'active'}`} onClick={() => handleSelectTab(tab)}>
        <span className="sidebar__icon">
          <MdLens style={{ fill: color }} />
          <span className="sidebar__link-text">{name}</span>
        </span>

        <button onClick={handleDelete} className="sidebar__icon sidebar__icon--delete" style={{ visibility: isDeleteClick && 'visible', opacity: isDeleteClick && 1 }}>
          <BiTrash />
        </button>
      </div>
      {isDeleteClick && (
        <div className="sidebar__deletePopup">
          <p>Are you sure, you want to delete this tab?</p>
          <div className="sidebar__deleteAction">
            <button onClick={handleDeleteConfirm} className="btn btn--danger btn--sm sidebar__deleteButton sidebar__deleteButton--confirm">
              Delete
            </button>
            <button onClick={handleDeleteCancel} className="btn btn--neutral btn--sm sidebar__deleteButton sidebar__deleteButton--cancel">
              Cancel
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
