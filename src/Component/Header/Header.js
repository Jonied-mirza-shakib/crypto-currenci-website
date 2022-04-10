import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='home-container shadow-lg'>
            <nav className='sticky-top'>
                <div className="home-first-section">
                    <Link to='/'>Crypto Cafe</Link>
                </div>
                <div className="home-second-section">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/coin'>Coin</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;