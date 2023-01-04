import TaskContext from "../context/TaskContext";
import TaskCards from "./TaskCards";
import { useContext } from "react";

export default function Tasklist() {

  const { tasks} = useContext(TaskContext)

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  return (
    <TaskContext>
      <div>
        {tasks.map((task) => (
          <TaskCards key={task.id} task={task}  />
        ))}
      </div>
    </TaskContext>
  );
}
