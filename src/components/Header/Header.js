import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className='header-part'>          
                <h1 className='title'>OptiX <span className="eye-care"> Eye Care </span></h1>
                <div>
                <Navigation></Navigation> 
                </div>
            </header>
        </div>
    );
};

export default Header;