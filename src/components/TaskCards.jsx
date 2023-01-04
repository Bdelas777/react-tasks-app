import { TaskContext } from "../context/TaskContext";

function TaskCards({ task, deleteTask }) {

  const valor = useContext(TaskContext)

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCards;
