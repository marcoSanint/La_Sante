import React from 'react';
import './Card_1.css';

const Card_1 = ({ image, title, description, backgroundColor }) => (
    <div className='card-1'>
        <img src={image} alt={title} />
    </div>
);

export default Card_1;
