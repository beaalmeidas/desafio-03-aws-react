import React, { useRef, useEffect } from 'react';
import { useUser } from '../context/useUser';

// CSS
import '../styles/component-styles/MyHistoryStyle.css';

const MyHistory: React.FC = () => {
    const { user, setUser } = useUser();
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    // AJUSTAR ALTURA DA CAIXA DE TEXTO
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    }, [user!.userHistory]);

    const handleInputChange = (value: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUser({ ...user!, userHistory: value.target.value });
    };

    return (
        <div id='my-history-content'>
            <p id='my-history-title'>Minha história</p>

            {/* CAIXA DE TEXTO PARA HISTÓRIA */}
            <textarea
                ref={textAreaRef}
                id='my-history-input'
                readOnly={!user!.isEditing}
                value={user!.userHistory}
                onChange={handleInputChange}
                onInput={() => {
                    if (textAreaRef.current) {
                        textAreaRef.current.style.height = 'auto';
                        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
                    }
                }}
            />
        </div>
    );
};

export default MyHistory;