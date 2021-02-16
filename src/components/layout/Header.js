/*eslint-disable */
import React from 'react';
import logo from '../../assets/img/taskytab-logo.svg';
import { RiAddCircleLine, RiMoonFoggyLine, RiSunLine, RiAccountCircleLine } from 'react-icons/ri';

export const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-header__nav">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="Taskytab" />
              <h1 className="logo__text">taskytab</h1>
            </a>
          </div>
          <ul className="options">
            <li className="options__item">
              <a href="#">
                <RiAddCircleLine />
              </a>
            </li>
            <li className="options__item">
              <a href="#">
                <RiMoonFoggyLine />
              </a>
            </li>
            <li className="options__item">
              <a href="#">
                <RiAccountCircleLine />
              </a>
            </li>
            <li className="options__item">
              <a href="#">Upgrade </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
