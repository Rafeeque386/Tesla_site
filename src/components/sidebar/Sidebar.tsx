import React, { useState } from 'react';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                &#9776;
            </button>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
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