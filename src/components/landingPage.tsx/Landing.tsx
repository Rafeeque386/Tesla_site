import React from 'react';
import './landing.css'
import { Outlet } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div>


            <Outlet />


        </div>
    );
};



export default LandingPage;