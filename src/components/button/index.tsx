import React from 'react';
import style from './Botao.module.scss';


interface ButtonProps {
    texto: string;
    type?:"button" | "submit" | "reset" 
    abacate?: string;
    quantidade?: number;
}

function Button ({texto,abacate,type}:ButtonProps){
    
    return(
        <button type={type}className={style.botao}>
            {type}
            {texto}
            {abacate}
        </button>
    )
}

export default Button