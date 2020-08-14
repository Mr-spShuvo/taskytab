/*eslint-disable */
import React from 'react';
import { RiInboxLine, RiCalendarLine, RiCalendar2Line, RiArrowDownSLine, RiAddLine, RiRadioButtonLine } from 'react-icons/ri';

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            <span className="sidebar__icon">
              <RiInboxLine />
            </span>
            Inbox
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            <span className="sidebar__icon">
              <RiCalendarLine />
            </span>
            Today
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link sidebar__link--active">
            <span className="sidebar__icon">
              <RiCalendar2Line />
            </span>
            This Week
          </a>
        </li>
      </ul>
      <div className="sidebar__divider">
        <a href="#" className="sidebar__action">
          <span className="sidebar__icon">
            <RiArrowDownSLine />
          </span>
        </a>
        <span className="sidebar__divider--title">Tabs List</span>
        <a href="#" className="sidebar__action">
          <span className="sidebar__icon">
            <RiAddLine />
          </span>
        </a>
      </div>
      <ul className="sidebar__tabs">
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            <span className="sidebar__icon">
              <RiRadioButtonLine fill="tomato" />
            </span>
            Coding
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link sidebar__link--active">
            <span className="sidebar__icon">
              <RiRadioButtonLine fill="teal" />
            </span>
            Design
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            <span className="sidebar__icon">
              <RiRadioButtonLine fill="olive" />
            </span>
            Cooking
          </a>
        </li>
      </ul>
    </div>
  );
};
