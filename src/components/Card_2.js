import React from 'react';
import './Card_2.css';

const Card_2 = ({ title, imageUrl }) => (
    <div className='card'>
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} />
    </div>
);

export default Card_2;
