import { Itarefa } from "../../types/tarefa";
import {Item} from "./Item";
import style from "./Lista.module.scss";


function Lista({tarefas}: {tarefas:Itarefa[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
       {tarefas.map((assignment,index) => (
        <Item
        key={index}
         {...assignment} // desestruturação 
        />
       ))}
       
      </ul>
    </aside>
  );
}

export default Lista;
