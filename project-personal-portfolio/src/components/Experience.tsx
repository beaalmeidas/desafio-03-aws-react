import React from 'react';

// CSS
import '../styles/component-styles/ExperienceStyle.css';

const Experience: React.FC = () => {
    return (
        <div id='experience-content'>
            <div id='experience-cards'>
                <p id='experience-text'>Experiências</p>
                {/* Cards */}
            </div>

            <div id='contact'>
                <p id='contact-text'>Sinta-se livre para me contatar a qualquer momento!</p>
                {/* Email */}
            </div>
        </div>
    );
};

export default Experience;