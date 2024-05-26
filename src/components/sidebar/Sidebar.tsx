import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleSidebar();
    };

    return (
        <div>
            <button type='button' className={`sidebar-toggle ${!isOpen ? 'show' : 'hide'}`} onClick={toggleSidebar}>
                &#9776;
            </button>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <span className="sidebar-close" onClick={closeSidebar}>
                    &times;
                </span>

                <div className="sidebar-header">
                    <Link to="/">
                        <img src="/src/assets/tesla-text-logo.svg" className='image-size' alt="logo" />
                    </Link>
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;