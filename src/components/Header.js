// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ logoSrc, logoAlt }) => (
    <header className="header">
        {/*<div className="logo">AC Mundo Fit</div>*/}
        {logoSrc && <img src={logoSrc} alt={logoAlt} className="logo" />}


        <div className="logo-text">
            <h1 className="p-2">Catálogo de Produtos</h1>
        </div>
        <nav className="nav">
            {/*<a href="#home">Home</a>*/}
            <a href="#catalog">Catalogo</a>
            {/*<a href="#about">About Us</a>*/}
            {/* Add more navigation links as needed */}
        </nav>
    </header>
);

export default Header;
