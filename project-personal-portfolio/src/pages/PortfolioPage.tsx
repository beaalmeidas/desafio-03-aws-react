import React from 'react';
import Header from '../components/Header';
import PortfolioPresentation from '../components/PortfolioPresentation';
import MyHistory from '../components/MyHistory';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import '../styles/page-styles/PortfolioPageStyle.css'

const PortfolioPage: React.FC = () => {
	return (
		<div id='portfolio-page-content'>
			<Header />
			<div id='main-content'>
				<PortfolioPresentation />
				<MyHistory />
				<Experience />
				<Footer />
			</div>
		</div>
	);
};

export default PortfolioPage;