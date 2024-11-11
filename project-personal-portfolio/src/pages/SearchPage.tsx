// SearchPage.tsx
import React from 'react';
import SearchForm from '../components/SearchForm';

const SearchPage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Buscando por:", query);
  };

  return (
    <div id='search-page-content'>
      <SearchForm searchFunction={handleSearch} />
    </div>
  );
};

export default SearchPage;
