/*eslint-disable */
import React, { useState } from 'react';
import logo from '../assets/img/taskytab-logo.svg';
import { MdAccountCircle, MdBrightness3, MdSearch } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import { Modal } from '../common/Modal';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
                <Modal state={[isModalOpen, setModalOpen]}>ModalContent</Modal>
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
