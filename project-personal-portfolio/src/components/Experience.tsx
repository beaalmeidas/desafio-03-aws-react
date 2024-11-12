import React from 'react';
import { useUser } from '../context/useUser';

// CSS
import '../styles/component-styles/ExperienceStyle.css';

const Experience: React.FC = () => {
    const { user, setUser } = useUser();

    return (
        <div id='experience-content'>
            <div id='experience-cards'>
                <p id='experience-title'>Experiências</p>
                <p id='experience-text' >Não há experiências adicionadas.</p>
                {/* CARDS DE EXPERIÊNCIA */}
            </div>

            <div id='contact'>
                <p id='contact-text'>Sinta-se livre para me contatar a qualquer momento!</p>
                
                {/* CAIXA DE TEXTO PARA ADICIONAR O EMAIL */}
                <input
                id='contact-email-input'
                readOnly={!user!.isEditing}
                type="text"
                value={user!.userDisplayEmail}
                onChange={(value)=>setUser({...user!,userDisplayEmail:value.target.value})}
                />
            </div>
        </div>
    );
};

export default Experience;