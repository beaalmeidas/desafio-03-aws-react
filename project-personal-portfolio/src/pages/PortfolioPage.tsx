import React from 'react';
import Header from '../components/Header';
import PortfolioPresentation from '../components/PortfolioPresentation';
import MyHistory from '../components/MyHistory';
import Experience from '../components/Experience';
import Footer from '../components/Footer';


const PortfolioPage: React.FC = () => {

    return (
        <div id='portfolio-page-content'>
            <Header />
            <PortfolioPresentation />
            <MyHistory />
            <Experience />
            <Footer />
        </div>
    );
};

export default PortfolioPage;