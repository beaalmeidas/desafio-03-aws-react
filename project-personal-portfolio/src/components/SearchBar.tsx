import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { RiGithubFill } from "react-icons/ri";
import '../styles/component-styles/SearchBarStyle.css'


interface SearchBarProps {
	placeholder?: string;
	searchFunction: (query: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Digite o nome do usuário", searchFunction }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSearch = () => {
		searchFunction(query);
	};

	return (
		<div id='search-container'>
			<p id='search-page-text'>Digite o nome do usuário que deseja buscar</p>
			
			<input
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder={placeholder}
			/>

			<button 
				onClick={handleSearch} 
			>
				<FaArrowRight style={{ marginRight: '8px' }} />
			</button>

			<div className="line-or" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
				<hr className="line" style={{ flex: 1, border: '1px solid #ccc' }} />
				<span style={{ margin: '0 8px' }}>ou</span>
				<hr className="line" style={{ flex: 1, border: '1px solid #ccc' }} />
			</div>

			<div id='alternative-login'>
				<p>Acesse sua conta com</p>
				
				<button id='github-login-button'>
					<RiGithubFill color="#172A3A" size={24} style={{ marginRight: '8px' }} />
					Github
				</button>
			</div>
		</div>
	);
};

export default SearchBar;  