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
  searchFunction: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ placeholder = "Digite o nome do usuário", searchFunction }) => {
  const [query, setQuery] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    searchFunction(query);
  };

  const handleGitHubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const githubData = {
        profilePicture: user.photoURL || "",
        location: "Localização Exemplo",
        email: user.email || "",
        introduction: `Bem-vindo, ${user.displayName}!`,
        description: "Esta é a descrição do usuário.",
        githubUrl: user.providerData[0].uid,
        linkedinUrl: "https://www.linkedin.com/in/username",
      };

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