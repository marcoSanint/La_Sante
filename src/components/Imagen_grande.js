import React from 'react';
import './Imagen_grande.css';

const ImagenGrande = ({ imageUrl }) => (
    <div className='imagen-grande'> 
        <img src={imageUrl} alt='Imagen a lo ancho de la página' />
    </div>
);

export default ImagenGrande;