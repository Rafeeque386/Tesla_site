import React, { useState } from 'react';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleSidebar()
    };

    return (
        <div>
            <button className={`sidebar-toggle ${!isOpen ? 'show' : 'hide'}`} onClick={toggleSidebar}>
                &#9776;
            </button>



            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <span className="sidebar-close" onClick={closeSidebar}>
                    &times;
                </span>

                <div className="sidebar-header">
                    <img src="/src/assets/tesla-text-logo.svg" className='image-size' alt="logo" />

                </div>
                <ul className="sidebar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;