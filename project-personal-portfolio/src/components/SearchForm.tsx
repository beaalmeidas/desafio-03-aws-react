import React, { useState } from 'react';

// Ícones
import { FaArrowRight } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

// CSS
import '../styles/component-styles/SearchFormStyle.css';


interface SearchFormProps {
	placeholder?: string;
	searchFunction: (query: string) => void;
}


const SearchForm: React.FC<SearchFormProps> = ({ placeholder = "Digite o nome do usuário", searchFunction }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSearch = () => {
		searchFunction(query);
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

				<button id='search-button' onClick={handleSearch} >
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
				
				<button id='github-login-button'>
					<TbBrandGithubFilled />
					GitHub
				</button>
			</div>
		</div>
	);
};


export default SearchForm;