import React from 'react';

// CSS
import '../styles/component-styles/MyHistoryStyle.css';

const MyHistory: React.FC = () => {
    return (
        <div id='my-history-content'>
            <p id='my-history-title'>Minha história</p>
            <p id='my-history-text'>
                Minha jornada na tecnologia começou há alguns anos, quando descobri a 
                paixão por resolver problemas e criar soluções práticas. Comecei 
                experimentando linguagens de programação e rapidamente percebi que 
                esse mundo era vasto e cheio de possibilidades.

                Após os primeiros passos, decidi me aprofundar mais, estudando 
                diferentes ferramentas e tecnologias que me ajudaram a entender 
                melhor como desenvolver soluções úteis. Essa experiência foi crucial 
                para moldar minha visão e me impulsionar a sempre buscar aprender 
                novas habilidades e explorar novas áreas.

                Hoje, continuo aprimorando meus conhecimentos e me desafiando com 
                projetos que trazem impacto real e ajudam outras pessoas. Essa 
                paixão pelo aprendizado constante é o que me mantém motivada e 
                pronta para enfrentar qualquer desafio!
            </p>
        </div>
    );
};


export default MyHistory;