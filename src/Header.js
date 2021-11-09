import React from 'react';
import Logo from './images/logo.svg'
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <img src={Logo} className="logo"></img>
        <ul className="nav">
            <li className="nav-links">Home</li>
            <li className="nav-links">Shop</li>
            <li className="nav-links">About</li>
            <li className="nav-links">Contact</li>
        </ul>

    </div>
  );
}

export default Header;
