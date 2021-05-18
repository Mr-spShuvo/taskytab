/*eslint-disable */
import React, { useContext, useState } from 'react';
import {
  MdAccountCircle,
  MdBrightness3,
  MdBrightness7,
  MdComputer,
  MdSearch
} from 'react-icons/md';
import { GoPlus } from 'react-icons/go';

import logo from '../assets/img/taskytab-logo.svg';

import { ModalAddTask } from './ModalAddTask';
import { AuthContext, ThemeContext } from '../contexts';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useContext(ThemeContext);
  const { user, signInWithGoogle, signOut } = useContext(AuthContext);

  console.log(user);

  const handleAddTask = () => {
    setModalOpen(true);
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-header__nav">
          <div className="site-header__left">
            <a href="#" className="logo">
              <img src={logo} alt="Taskytab" />
              <h1 className="logo__text">taskytab</h1>
            </a>
          </div>

          <div className="site-header__right">
            <div className="search">
              <MdSearch />
              <input type="text" placeholder="Search" />
            </div>
            <ul className="options">
              <li className="options__item">
                <button onClick={handleAddTask} className="btn">
                  <GoPlus />
                </button>
                <ModalAddTask state={[isModalOpen, setModalOpen]} />
              </li>
              <li className="options__item">
                <button
                  href="#"
                  onClick={() => setDarkMode(!darkMode)}
                  className="btn"
                >
                  {darkMode ? <MdBrightness7 /> : <MdBrightness3 />}
                </button>
              </li>
              <li className="options__item active">
                {!user ? (
                  <button onClick={signInWithGoogle}>
                    <MdAccountCircle />
                  </button>
                ) : (
                  <button onClick={signOut}>
                    <MdComputer />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
