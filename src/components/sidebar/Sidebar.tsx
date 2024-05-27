import { ROUTE_CONSTANTS, ROUTE_MENU } from '@/constants/routeConstants';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (e: React.MouseEvent) => {
    e.stopPropagation(); //handle event bubbling
    toggleSidebar();
  };

  return (
    <div>
      <button
        type="button"
        className={`sidebar-toggle ${!isOpen ? 'show' : 'hide'}`}
        onClick={toggleSidebar}
      >
        &#9776;
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <span className="sidebar-close" onClick={closeSidebar}>
          &times;
        </span>

        <div className="sidebar-header">
          <Link to="/">
            <img src="/src/assets/tesla-text-logo.svg" className="image-size" alt="logo" />
          </Link>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/">{ROUTE_MENU.HOME}</Link>
          </li>

          <li>
            <Link to={`/${ROUTE_CONSTANTS.PRODUCTS}`}>{ROUTE_MENU.PRODUCTS}</Link>
          </li>
          <li>
            <Link to={`/${ROUTE_CONSTANTS.ABOUT}`}>{ROUTE_MENU.ABOUT}</Link>
          </li>
          <li>
            <Link to={`/${ROUTE_CONSTANTS.CONTACT}`}>{ROUTE_MENU.CONTACT}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
