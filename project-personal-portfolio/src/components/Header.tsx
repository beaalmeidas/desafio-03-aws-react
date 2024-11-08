import React from 'react';
import { BiLogIn } from 'react-icons/bi';

// CSS
import '../styles/component-styles/HeaderStyle.css';


const Header: React.FC = () => {
    return (
        <header id="header-container">
            <nav id="navigation">
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Minha história</a></li>
                    <li><a href="#experiences">Experiências</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>

            <div id="login">
                <button id="login-button">
                    <BiLogIn size={20} />
                    Entrar
                </button>
            </div>
        </header>
    );
};


export default Header;