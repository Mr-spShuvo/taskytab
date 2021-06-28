import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { db } from '../firebase';
import { useOutsideClick } from '../hooks/useOutsideClick';

export const Popup = ({ id, collection, handleOutsideClick, ...rest }) => {
  const ref = React.useRef();
  useOutsideClick(ref, handleOutsideClick);

  const options = [
    { title: 'Edit', icon: MdEdit, action: () => {} },
    {
      title: 'Delete',
      icon: MdDelete,
      action: () => {
        db.collection(collection).doc(id).delete();
      }
    }
  ];

  return (
    <div className="popup" ref={ref} {...rest}>
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
