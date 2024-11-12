// PortfolioPresentation.tsx
import React from 'react';
import { useUser } from '../context/useUser';

const PortfolioPresentation: React.FC = () => {
  const { user } = useUser();

  if (!user) return <p>Usuário não encontrado</p>;

  return (
    <div id='portfolio-presentation-content'>
      <div id='right-side'>
        <img id='profile-picture' src={user.profilePicture} alt="Foto do perfil" />
        <p id='username'>{user.username}</p>
        <p id='location'>{user.location}</p>
        <p id='email-address'>{user.email}</p>
      </div>

      <div id='left-side'>
        <p id='display-name'>{user.displayName}</p>
        <p id='description'>{user.description}</p>

        <button>
          <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </button>
        
        <button>
          <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioPresentation;
