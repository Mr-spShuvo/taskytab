import React, { useRef } from 'react';
import { FaUserEdit, FaSignOutAlt } from 'react-icons/fa';
import { useOutsideClick } from '../hooks';

export const PopupMenu = ({ onEdit, onSignOut, onOutsideClick, ...rest }) => {
  const ref = useRef();
  useOutsideClick(ref, onOutsideClick);

  return (
    <div ref={ref} className="popup" {...rest}>
      <ul className="popup__menu">
        <li className="popup__item">
          <button onClick={onEdit}>
            <FaUserEdit />
            <span>Edit Profile</span>
          </button>
        </li>

        <li className="popup__item">
          <button onClick={onSignOut}>
            <FaSignOutAlt />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
