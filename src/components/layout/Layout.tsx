import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './layout.css';
import Sidebar from '../sidebar/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <Sidebar />
            <div className="content-container">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;