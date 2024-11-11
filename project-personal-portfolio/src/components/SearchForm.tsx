import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import axios from 'axios';
import '../styles/component-styles/SearchFormStyle.css';

interface SearchFormProps {
  placeholder?: string;
  searchFunction: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ placeholder = "Digite o nome do usuário", searchFunction }) => {
  const [query, setQuery] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle search
  const handleSearch = async () => {
    searchFunction(query);
    try {
      const response = await axios.get(`https://api.github.com/users/${query}`);
      setUserData(response.data);
      localStorage.setItem('githubUserData', JSON.stringify(response.data)); // Store data in localStorage
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
    }
  };

  // GitHub login
  const handleGitHubLogin = async () => {
    const clientId = "YOUR_GITHUB_CLIENT_ID";  // Replace with your GitHub OAuth Client ID
    const redirectUri = "YOUR_REDIRECT_URI";   // Replace with your redirect URI
    const scope = "user"; // Optional: Add other scopes based on your need

    // Redirect to GitHub for OAuth login
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  // Handle GitHub OAuth callback
  const handleGitHubCallback = async (code: string) => {
    const clientId = "YOUR_GITHUB_CLIENT_ID";
    const clientSecret = "YOUR_GITHUB_CLIENT_SECRET";  // Securely store the secret in env variables

    // Request the access token using the code
    try {
      const response = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }, {
        headers: {
          'Accept': 'application/json',
        }
      });

      const accessToken = response.data.access_token;

      // Fetch user data with the access token
      const userResponse = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });

      setIsLoggedIn(true);
      setUserData(userResponse.data);
      localStorage.setItem('githubUserData', JSON.stringify(userResponse.data)); // Store data in localStorage
    } catch (error) {
      console.error("Error with GitHub OAuth:", error);
    }
  };

  // Check for GitHub OAuth callback
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      handleGitHubCallback(code);
    }
  }, []);

  return (
    <div id='search-page-container'>
      <p id='search-page-text'>Digite o nome do usuário que deseja buscar</p>
      
      <div id='input-button-container'>
        <input
          id='search-input'
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        <button id='search-button' onClick={handleSearch}>
          <FaArrowRight />
        </button>
      </div>

      <div className="line-or" style={{ display: 'flex', alignItems: 'center', width: '73%' }}>
        <hr />
        <span style={{ margin: '0 8px', fontWeight: 'bold' }}>ou</span>
        <hr />
      </div>

      <div id='alternative-login'>
        <p id='alternative-login-text'>Acesse sua conta com</p>
        
        <button id='github-login-button' onClick={handleGitHubLogin}>
          <TbBrandGithubFilled />
          GitHub
        </button>
      </div>

      {userData && (
        <div id="user-info">
          <p><strong>{userData.name}</strong></p>
          <p>{userData.bio}</p>
          <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">Ver perfil no GitHub</a></p>
        </div>
      )}
    </div>
  );
};

export default SearchForm;