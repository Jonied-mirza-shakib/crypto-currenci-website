import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
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
                    {
                        user ?
                            <button onClick={handleSignOut} className='text-white mx-3' style={{ backgroundColor: '#00008B' }}>Sign out</button> :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;