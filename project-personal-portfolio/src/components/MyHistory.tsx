import React from 'react';

// CSS
import '../styles/component-styles/MyHistoryStyle.css';

const MyHistory: React.FC = () => {
    return (
        <div id='my-history-content'>
            <p id='my-history-title'>Minha história</p>
            <p id='my-history-text'></p>
        </div>
    );
};


export default MyHistory;