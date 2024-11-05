import React from 'react';
import SearchBar from '../components/SearchBar';

const SearchPage: React.FC = () => {
    const handleSearch = (query: string) => {
        console.log("Buscando por:", query);
        // Aqui você pode adicionar lógica para lidar com o termo de busca
    };

    return (
        <div id='search-page-content'>
            <SearchBar searchFunction={handleSearch} />
        </div>
    );
};

export default SearchPage;