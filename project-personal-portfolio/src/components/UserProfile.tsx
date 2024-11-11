import React, { useState } from 'react';
import { getUserProfile } from '../scripts/githubAPIConfig';

interface UserProfileData {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
}

const UserProfile: React.FC = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<UserProfileData | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    try {
      const data = await getUserProfile(username);
      setUserData(data);
    } catch (e) {
      setError('Usuário não encontrado. Tente outro nome.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite o nome de usuário"
      />
      <button onClick={handleSearch} disabled={!username}>
        Buscar
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width={100} />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visitar perfil no GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default UserProfile;