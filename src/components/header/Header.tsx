import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="/src/assets/tesla-text-logo.svg" className='image-size' alt="logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;