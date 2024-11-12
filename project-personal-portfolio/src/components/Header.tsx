import React from 'react';
import { useUser } from '../context/useUser';

// CSS
import '../styles/component-styles/HeaderStyle.css';

// ícones
import { BiLogIn } from 'react-icons/bi';
import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";


const Header: React.FC = () => {
    const { user, setUser } = useUser();

    if (!user) return <p>Usuário não encontrado</p>;

    return (
        <div id='header-editing-container'>
            {/* HEADER */}
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
                    { user.isOwner ? 
                        <a className='login-button' href="/">
                            <p className='header-account-action-btn'>Sair</p>
                            <img id='owner-profile-picture' src={user.profilePicture} alt="Imagem de perfil" />
                        </a>
                        : 
                        <a className='login-button' href="/">
                            <BiLogIn id='login-icon' size={25} />
                            <p className='header-account-action-btn'>Entrar</p>
                        </a>
                    }
                </div>
            </header>

            {/* BOTÃO DE EDIÇÃO DO PORTIFÓLIO (CASO LOGADO) */}
            {user.isOwner && (
                <div id='editing-button'>
                    <button onClick={() => setUser({ ...user, isEditing: !user.isEditing })}>
                        {user.isEditing ? <FaCheck id="editing-icon" /> : <MdModeEdit id="editing-icon" />}
                    </button>
                </div>
            )}

        </div>
    );
};

export default Header;
