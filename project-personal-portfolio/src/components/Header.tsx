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
                <a id="login-button" href="">
                    <BiLogIn id='login-icon' size={25} />
                    Entrar
                </a>
            </div>
        </header>
    );
};


export default Header;