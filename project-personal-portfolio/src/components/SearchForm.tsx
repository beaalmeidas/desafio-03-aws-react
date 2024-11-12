import axios from 'axios';
import React, { useState } from 'react';
import { auth, provider, signInWithPopup } from '../authentication/firebaseConfig';
import { useUser } from '../context/useUser';
import { useNavigate } from 'react-router-dom';

// CSS
import '../styles/component-styles/SearchFormStyle.css';

// Ícones
import { FaArrowRight } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

// Toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SuggestionUser {
    id: number;
    login: string;
}

interface SearchFormProps {
    placeholder?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ placeholder = "Digite o nome do usuário" }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<SuggestionUser[]>([]);
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        fetchSuggestions(e.target.value);
    };

    const fetchSuggestions = async (input: string) => {
		if (input.length > 0) {
			try {
				const response = await axios.get(`https://api.github.com/search/users?q=${input}`);
				setSuggestions(response.data.items.slice(0, 3) || []);
			} catch (error) {
				console.error("Erro ao buscar sugestões do GitHub:", error);
				setSuggestions([]);
			}
		} else {
			setSuggestions([]);
		}
	};	

    const handleSearch = () => {
        searchByGitHubUsername(query);
    };

    // ESTILIZAÇÃO DO MODAL
    const toastOptions = {
        progressStyle: {
            backgroundColor: '#09BC8A',
        }
    };

    // BUSCA DE USUÁRIO PELO ID
    const githubUserById = async (account_id: string) => {
        try {
            const response = await axios.get(`https://api.github.com/user/${account_id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar dados do GitHub:", error);
            return null;
        }
    };

    // RETORNA INFORMAÇÕES DO USUÁRIO LOGADO
    const handleGitHubLogin = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
            const user = result.user;
			
			// INFORMAÇÕES DO FIREBASE
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
                description: githubUserData?.bio || "Bio não disponível",
                githubUrl: `https://github.com/${githubUserData.login}`,
                linkedinUrl: "https://www.linkedin.com/in/username",
                userHistory: "Não há uma história escrita.",
                userDisplayEmail: "Não há um endereço de email fornecido.",
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

    // BUSCA PELO NOME DE USUÁRIO
    const githubUserByUsername = async (username: string) => {
		try {
			const response = await axios.get(`https://api.github.com/users/${username}`);
            return response.data;
        } catch (error) {
			console.error("Erro ao buscar dados do GitHub:", error);
            return null;
        }
    };
	
	// RETORNA INFORMAÇÕES DO USUÁRIO PESQUISADO
    const searchByGitHubUsername = async (githubDataByUsername: string) => {
		try {
			// INFORMAÇÕES RECEBIDAS DA API
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

            setUser(githubData);
            localStorage.setItem('user', JSON.stringify(githubData));

            toast.success("Buscando usuário...");

            setTimeout(() => {
                navigate('/portfolio');
            }, 2000);
        } catch (error) {
            console.error("Erro ao buscar usuário do GitHub:", error);
            toast.error("Usuário do GitHub não encontrado.");
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

			<div id='suggestion-container'>
				{suggestions.length > 0 && (
					<ul className="suggestions-list">
					{suggestions.map((user) => (
						<li key={user.id} onClick={() => searchByGitHubUsername(user.login)}>
						<FaUser style={{ color: '#C9CACC', fontSize: '14px', marginRight: '10px' }} />
						{user.login}
						</li>
					))}
					</ul>
				)}
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
                progressStyle={toastOptions.progressStyle}
            />
        </div>
    );
};

export default SearchForm;