import React from 'react';
import {
  RiInboxLine,
  RiCalendarLine,
  RiCalendar2Line,
  RiArrowDownSLine,
  RiAddLine
} from 'react-icons/ri';

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li className="sidebar__items">
          <a href="#" className="sidebar__link">
            <span className="sidebar__icon">
              <RiInboxLine />
            </span>
            Inbox
          </a>
        </li>
        <li className="sidebar__items">
          <a href="#" className="sidebar__link">
            <span className="sidebar__icon">
              <RiCalendarLine />
            </span>
            Today
          </a>
        </li>
        <li className="sidebar__items">
          <a href="#" className="sidebar__link">
            <span className="sidebar__icon">
              <RiCalendar2Line />
            </span>
            This Week
          </a>
        </li>
      </ul>
      <div className="sidebar__divider">
        <span className="sidebar__icon">
          <RiArrowDownSLine />
        </span>
        Tasky Tab
        <span className="sidebar__icon">
          <RiAddLine />
        </span>
      </div>
      <ul className="sidebar__tabs">
        <li className="sidebar__items">
          <a href="#" className="sidebar__link">
            <span className="sidebar__icon"></span>
            Coding
          </a>
        </li>
      </ul>
    </div>
  );
};
