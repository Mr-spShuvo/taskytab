/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MdLocalOffer, MdEvent, MdMoreVert } from 'react-icons/md';
import { BiCircle, BiCheckCircle } from 'react-icons/bi';
import dayjs from 'dayjs';

export const Task = ({ task }) => {
  const { id, title, description, tabName, archived, date } = task;
  let taskDate;
  if (date) taskDate = dayjs(date).format('MMM DD, YYYY');
  return (
    <li className="tasks__item" key={id} onClick={() => {}}>
      <div className="tasks__item-left">
        <button className="tasks__checkbox">
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
        <span>
          <MdMoreVert size={18} />
        </span>
      </div>
    </li>
  );
};
