import React from 'react';
import style from './Botao.module.scss';

interface ButtonProps {
    texto: string;
    abacate?: string;
    quantidade?: number;
}

function Button ({texto,abacate}:ButtonProps){
    
    return(
        <button className={style.botao}>
            {texto}
            {abacate}
        </button>
    )
}

export default Button