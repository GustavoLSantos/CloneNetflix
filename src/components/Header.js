import React from "react";
import './Header.css';
import logo from './netflixLogo.png';
import profile from './profileIcon.png';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={profile} alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}