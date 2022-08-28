import React from 'react';
import { Itarefa } from '../../types/tarefa';
import Button from  '../button';
import style from  './Formulario.module.scss';



class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
    state = {
        tarefa:"",
        tempo: "00:00"
    }
    adicionarTarefa(evento:React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTarefas(TarefasAntigas => [...TarefasAntigas, {...this.state}] );
    }
    render() {
        return(
            <form action="" className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" name="tarefa" id="tarefa" 
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa:evento.target.value})}
                    placeholder='O que você quer estudar' required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" step="1"name="tempo" id="tempo" min="00:00:00" max="01:30:00"
                    onChange={evento => this.setState({...this.state, tempo:evento.target.value})}
                    value={this.state.tempo} required/>
                </div>
                <Button
                texto = "qualquer"

                />
                
            </form>
        )
    }
}
// Class components era usado para usar um state, antes da chegada dos hooks
export default Formulario