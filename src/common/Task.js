import React, { useState } from 'react';
import { MdLocalOffer, MdEvent, MdMoreVert, MdClear } from 'react-icons/md';
import { BiCircle, BiCheckCircle } from 'react-icons/bi';
import dayjs from 'dayjs';

import { db } from '../firebase';
import { Popup } from './Popup';

export const Task = ({ task }) => {
  const [showPopup, setShowPopup] = useState(false);

  const { id, title, description, tabName, archived, date } = task;
  let taskDate;
  if (date) taskDate = dayjs(date.toDate()).format('MMM DD, YYYY');

  const handleArchived = () => {
    db.collection('tasks').doc(id).update({ archived: !archived });
  };

  return (
    <li className="tasks__item">
      <div className="tasks__item-left">
        <button className="tasks__checkbox" onClick={handleArchived}>
          {archived ? <BiCheckCircle /> : <BiCircle />}
        </button>
        <div className="tasks__content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="tasks__item-right">
        {tabName && (
          <span>
            <MdLocalOffer />
            {tabName}
          </span>
        )}
        {taskDate && (
          <span>
            <MdEvent />
            {taskDate}
          </span>
        )}
        {!showPopup ? (
          <button onClick={() => setShowPopup(true)}>
            <MdMoreVert size={18} />
          </button>
        ) : (
          <button>
            <MdClear size={18} />
          </button>
        )}

        {showPopup && (
          <Popup
            id={id}
            collection="tasks"
            handleOutsideClick={() => setShowPopup(false)}
          />
        )}
      </div>
    </li>
  );
};
