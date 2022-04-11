import React from 'react';

const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    return (
        <div className='service-container'>
            <div className="">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>${price}</p>
                <p><small>Description: { description}</small></p>
            </div>
        </div>
    );
};

export default Service;