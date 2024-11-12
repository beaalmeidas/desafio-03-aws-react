import React from 'react';
import { useUser } from '../context/useUser';

// CSS
import '../styles/component-styles/MyHistoryStyle.css';


const MyHistory: React.FC = () => {
    const { user, setUser } = useUser();

    return (

        <div id='my-history-content'>
            {/* TÍTULO */}
            <p id='my-history-title'>Minha história</p>

            {/* CAIXA DE TEXTO PARA ADICIONAR HISTÓRIA */}
            <input
                id='my-history-input'
                readOnly={!user!.isEditing}
                type="text"
                value={user!.userHistory}
                onChange={(value)=>setUser({...user!,userHistory:value.target.value})}
            />
        </div>
    );
};


export default MyHistory;