import React from "react";

function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "02:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "01:30:00",
    },
  ];
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>

       {tarefas.map((assignment,index) => (
        <li key = {index}>
            <h3>{assignment.tarefa}</h3>
            <span>{assignment.tempo}</span>
        </li>
       ))}
       
      </ul>
    </aside>
  );
}

export default Lista;
