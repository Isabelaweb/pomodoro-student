import Button from "../button";
import { Relogio } from "./Relogio";
import style from './Cronometro.module.scss'

export default function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio></Relogio>

            </div>
            <Button
            texto="Começar!"
            />  
        </div>
        
    );
}


// Usando o default posso importar e chamar o componente de qualquer nome ex: import Batatinha from './cronometro'