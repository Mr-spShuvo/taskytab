import React from 'react';

const CollatedTab = ({ icon, name }) => {
  return (
    <li className="sidebar__item">
      <a href="/" className="sidebar__link">
        <span className="sidebar__icon">{icon}</span>
        <span className="sidebar__link-text">{name}</span>
      </a>
    </li>
  );
};

export default CollatedTab;
