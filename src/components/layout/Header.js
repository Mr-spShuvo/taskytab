import React from 'react';
import logo from '../../assets/taskytab-logo.svg';
import {
  RiAddCircleLine,
  RiMoonFoggyLine,
  RiSunLine,
  RiAccountCircleLine
} from 'react-icons/ri';

export const Header = () => {
  return (
    <header className="site-header">
      <div className="content-box">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Taskytab" />
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
        </ul>
      </div>
    </header>
  );
};
