import React from 'react';
import './styles/GlobalStyle.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;