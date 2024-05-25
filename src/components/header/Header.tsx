import React from 'react';
import './header.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <img src="/src/assets/tesla-text-logo.svg" className='image-size' alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;