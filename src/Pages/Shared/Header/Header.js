import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;