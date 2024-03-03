import React, { useState } from 'react';
import './Barra_cabeza.css';

function BarraCabeza({ backgroundImageUrl }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="barra_cabeza">
            <div className="logo" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}></div>

        <nav className="menu">
            <button className="menu-button">Somos</button>
            <button className="menu-button">Medicamentos Bioequivalentes</button>
            <button className="menu-button">Farmacovigilancia</button>
            <button className="menu-button" onClick={toggleDropdown}>
                Blog la Sante
                {isDropdownOpen && (
                    <ul className="dropdown">
                        <li>Ver todas las entradas</li>
                        <li>Todo acerca del Glaucoma</li>
                        <li>Salud visual</li>
                        <li>Alergias</li>
                        <li>Hipertencion arterial</li>
                        <li>Vitamina C</li>
                        <li>Infecciones virales</li>
                        <li>Bacterias</li>
                        <li>Antihistaminicos</li>
                    </ul>
                )}
            </button>
            <button className="menu-button">Contacto</button>
        </nav>
    </div>
    );
}

export default BarraCabeza;
