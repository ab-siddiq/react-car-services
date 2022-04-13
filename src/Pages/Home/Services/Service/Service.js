import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    return (
        <div className='service-container'>
            <div className="">
                <img src={img} alt="" />
                <div className="service-description">
                    <h2>{name}</h2>
                    <p>${price}</p>
                    <p><small>Description: {description}</small></p>
                    <button className='book-btn'>Book {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;