// App.tsx
import React from 'react';
import { UserProvider } from './context/UserContext'; // Certifique-se de que o caminho está correto
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import SearchPage from './pages/SearchPage'; // Importa sua página de busca

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;