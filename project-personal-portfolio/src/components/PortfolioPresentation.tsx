import React from 'react';
import { useUser } from '../context/useUser';

// CSS
import '../styles/component-styles/PortfolioPresentationStyle.css';


const PortfolioPresentation: React.FC = () => {
	const { user } = useUser();

	if (!user) return <p>Usuário não encontrado</p>;

	return (
		<div id='portfolio-presentation-content'>
			{/* FOTO, NOME DE USUÁRIO, LOCALIZAÇÃO E EMAIL */}
			<div id='left-side'>
				<img id='profile-picture' src={user.profilePicture} alt="Foto do perfil" />
				<p id='username'>{user.username}</p>
				<p id='location'>{user.location}</p>
				<p id='email-address'>{user.email}</p>
			</div>

			{/* INTRODUÇÃO, DESCRIÇÃO, BOTÕES */}
			<div id='right-side'>
				<div id="intro-text">
					<p>Hello, </p>
					<p>
						I'm <span id="display-name">{user.displayName}</span>
					</p>
				</div>
				<p id='description'>{user.description}</p>

				<div id="right-side-buttons">
					<button className="portfolio-button">
						<a href={user.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
					</button>
					
					<button className="portfolio-button">
						<a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PortfolioPresentation;
