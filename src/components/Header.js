/*eslint-disable */
import React from 'react';
import logo from '../assets/img/taskytab-logo.svg';
import { MdAccountCircle, MdBrightness4, MdBrightness7, MdNoteAdd, MdSearch } from 'react-icons/md';

export const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-header__nav">
          <div className="site-header__left">
            <a href="#" className="logo">
              <img src={logo} alt="Taskytab" />
              <h1 className="logo__text">taskytab</h1>
            </a>
            <div className="search">
              <MdSearch />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="site-header__right">
            <ul className="options">
              <li className="options__item">
                <a href="#">
                  <MdNoteAdd />
                </a>
              </li>
              <li className="options__item active">
                <a href="#">
                  <MdBrightness4 />
                </a>
              </li>
              <li className="options__item">
                <a href="#">
                  <MdAccountCircle />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
