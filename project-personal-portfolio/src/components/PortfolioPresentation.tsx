import React from 'react';


const PortfolioPresentation: React.FC = () => {
    return (
        <div id='portfolio-presentation-content'>
            <div id='right-side'>
                <img id='profile-picture' src="" alt="" />
                <p id='location'></p>
                <p id='email-adress'></p>
            </div>

            <div id='left-side'>
                <p id='introduction'></p>
                <p id='description'></p>

                <button>
                    <a href="">GitHub</a>
                </button>
                
                <button>
                    <a href="">LinkedIn</a>
                </button>
            </div>
        </div>
    );
};


export default PortfolioPresentation;