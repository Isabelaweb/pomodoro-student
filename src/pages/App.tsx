import React, {useState} from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { Itarefa } from '../types/tarefa';
import style from'./App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]| []> ([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
   
     <Formulario setTarefas={setTarefas}/>
     <Lista 
     selecionaTarefa={selecionaTarefa}
     tarefas={tarefas}
     />
     <Cronometro/>
    </div>
  );
}

export default App;
