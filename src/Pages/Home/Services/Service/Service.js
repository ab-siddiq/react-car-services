import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    const navigate = useNavigate();
    const navigateServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <div className="">
                <img src={img} alt="" />
                <div className="service-description">
                    <h2>{name}</h2>
                    <p>${price}</p>
                    <p><small>Description: {description}</small></p>
                    <button onClick={()=>{navigateServiceDetail(id)}} className='book-btn'>Book {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;