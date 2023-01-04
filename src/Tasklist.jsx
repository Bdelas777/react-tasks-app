import { tasks } from "./tasks"
import { useState, useEffect } from "react";


export default function Tasklist() {
  const [tasks, setTasks] = useState([]);
  if(tasks.length === 0)
   return <h1>No hay tareas</h1>
  return (
    <div>
      {tasks.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}
