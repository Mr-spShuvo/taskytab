/*eslint-disable */
import React from 'react';
import logo from '../assets/img/taskytab-logo.svg';
import { MdAccountCircle, MdWbSunny, MdBrightness3, MdSearch } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';

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
                  <GoPlus />
                </a>
              </li>
              <li className="options__item active">
                <a href="#">
                  <MdBrightness3 />
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
