import React from 'react';
import './header.css';

const Header: React.FC = () => {
    return (
        <header>
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