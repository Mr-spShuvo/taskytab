/*eslint-disable */
import React, { useContext, useState, useRef } from 'react';
import {
  MdAccountCircle,
  MdBrightness3,
  MdBrightness7,
  MdSearch
} from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';

import logo from '../assets/img/taskytab-logo.svg';

import { ModalAddTask } from './ModalAddTask';
import { AuthContext, ThemeContext } from '../contexts';
import { PopupMenu } from '../common/PopupMenu';
import { Profile } from './Profile';

export const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useContext(ThemeContext);
  const { signOut } = useContext(AuthContext);

  const handlePopupMenu = () => !showPopup && setShowPopup(true);
  const handleOutsideClick = () => setShowPopup(false);
  const handleProfilePopup = () => setShowProfile(true);

  const handleAddTask = () => setModalOpen(true);
  const handleSignOut = () => signOut();

  const profileState = [showProfile, setShowProfile];

  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-header__nav">
          <div className="site-header__left">
            <a href="#" className="logo">
              <img src={logo} alt="Taskytab Logo" />
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
              <li className="options__item active" style={{ position: 'relative' }}>
                <button
                  className="btn"
                  onClick={handlePopupMenu}
                  style={{ pointerEvents: showPopup ? 'none' : 'all' }}
                >
                  <FaUserCircle />
                </button>

                {showPopup && (
                  <PopupMenu
                    onOutsideClick={handleOutsideClick}
                    onSignOut={handleSignOut}
                    onEdit={handleProfilePopup}
                  />
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {showProfile && <Profile state={[showProfile, setShowProfile]} />}
    </header>
  );
};
