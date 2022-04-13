import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white text-center py-3'>
            <p className='m-0'>&copy; {new Date().getFullYear()}</p>
            <p className='m-0'>All right reserve Abu Bakkar Siddiq</p>
            
        </div>
    );
};

export default Footer;