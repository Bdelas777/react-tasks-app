import TaskContext from "../context/TaskContext";
import TaskCards from "./TaskCards";

export default function Tasklist({ tasks, deleteTask }) {
  if (tasks.length === 0) return <h1>No hay tareas</h1>;
  return (
    <TaskContext>
      <div>
        {tasks.map((task) => (
          <TaskCards key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </TaskContext>
  );
}
