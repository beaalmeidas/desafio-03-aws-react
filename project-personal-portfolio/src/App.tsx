import React from 'react';
import './styles/GlobalStyle.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import PortfolioPage from './pages/PortfolioPage';


const App: React.FC = () => {
	return (
		<Router>
		<Routes>
			<Route path="/" element={<SearchPage />} />
			<Route path="/portfolio" element={<PortfolioPage />} />
		</Routes>
		</Router>
	);
};

export default App;