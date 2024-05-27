import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { ROUTE_CONSTANTS, ROUTE_MENU } from '@/constants/routeConstants';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/src/assets/tesla-text-logo.svg" className="image-size" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
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
      </nav>
    </header>
  );
};

export default Header;
