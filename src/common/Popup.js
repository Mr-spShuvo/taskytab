import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useOutsideClick } from '../hooks/useOutsideClick';
const options = [
  { title: 'Edit', icon: MdEdit, action: () => {} },
  { title: 'Delete', icon: MdDelete, action: () => {} }
];

export const Popup = ({ handleOutsideClick }) => {
  const ref = React.useRef();
  useOutsideClick(ref, handleOutsideClick);

  return (
    <div className="popup" ref={ref}>
      <ul className="popup__menu">
        {options.map(({ title, icon: Icon, action }) => (
          <li className="popup__item" key={title.toLowerCase().replace(' ', '-')}>
            <button onClick={action}>
              <Icon />
              <span>{title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
