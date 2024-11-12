import axios from 'axios';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { auth, provider, signInWithPopup } from '../authentication/firebaseConfig';
import { useUser } from '../context/useUser';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/component-styles/SearchFormStyle.css';

interface SearchFormProps {
  placeholder?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ placeholder = "Digite o nome do usuário"}) => {
  const [query, setQuery] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
	searchByGitHubUsername(query);
  };

  const githubUserById = async (account_id: string) => {
    try {
      const response = await axios.get(`https://api.github.com/user/${account_id}`);
      return response.data; // Retorna os dados do usuário do GitHub
    } catch (error) {
      console.error("Erro ao buscar dados do GitHub:", error);
      return null; // Retorna null em caso de erro
    }
  };

  const handleGitHubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Obtém o username do GitHub através do uid do provedor, que é o nome de usuário correto
      const githubUsername = user.providerData[0].uid;
      const githubUserData = await githubUserById(githubUsername);

      const githubData = {
		isOwner: true,
		isEditing: false,
		username: githubUserData.login,
        profilePicture: user.photoURL || "",
        location: githubUserData?.location || "Localização não disponível",
        email: user.email || "E-mail não disponível",
		displayName: user.displayName || "Nome não disponível",
        description: githubUserData?.bio || "Bio não disponível", // Usa a bio do GitHub, se disponível
        githubUrl: `https://github.com/${githubUserData.login}`, // Link direto para o perfil
        linkedinUrl: "https://www.linkedin.com/in/username", // Exemplo, modifique se necessário
		userHistory: "Não há uma história escrita.",
		userDisplayEmail: "Não há um endereço de email fornecido.",
      };

	  console.log(user); //firebase
	  console.log(githubUserData);
	  console.log(user.providerData); //uid

      setUser(githubData);
      localStorage.setItem('user', JSON.stringify(githubData));

      toast.success("Login com GitHub realizado com sucesso!");

      setTimeout(() => {
        navigate('/portfolio');
      }, 2000);
    } catch (error) {
      console.error("Erro ao logar com o GitHub:", error);
      toast.error("Erro ao tentar fazer login com o GitHub. Tente novamente.");
    }
  };

  const githubUserByUsername = async (username: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data; // Retorna os dados do usuário do GitHub
    } catch (error) {
      console.error("Erro ao buscar dados do GitHub:", error);
      return null;
    }
  };

  const searchByGitHubUsername = async (githubDataByUsername: string) => {
	try {
		const githubUserData = await githubUserByUsername(githubDataByUsername);
  
		const githubData = {
		  isOwner: false,
		  isEditing: false,
		  username: githubUserData.login,
		  profilePicture: githubUserData.avatar_url || "",
		  location: githubUserData?.location || "Localização não disponível",
		  email: githubUserData.email || "E-mail não disponível",
		  displayName: githubUserData.name || "Nome não disponível",
		  description: githubUserData?.bio || "Bio não disponível",
		  githubUrl: `https://github.com/${githubUserData.login}`,
		  linkedinUrl: "https://www.linkedin.com/in/username",
		  userHistory: "Não há uma história escrita.",
			userDisplayEmail: "Não há um endereço de email fornecido.",
		};
  
		console.log(githubUserData);
  
		setUser(githubData);
		localStorage.setItem('user', JSON.stringify(githubData));
  
		toast.success("Buscando usuário...");
  
		setTimeout(() => {
		  navigate('/portfolio');
		}, 2000);
	  } catch (error) {
		console.error("Erro ao buscar usuário do GitHub:", error);
		toast.error("Erro ao tentar buscar usuário do GitHub. Tente novamente.");
	}
  }

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

      <ToastContainer
        autoClose={8000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnFocusLoss={false}
      />
    </div>
  );
};

export default SearchForm;
