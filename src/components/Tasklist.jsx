import TaskCards from "./TaskCards";

export default function Tasklist({tasks, deleteTask}) {
  if (tasks.length === 0) return <h1>No hay tareas</h1>;
  return (
    <div>
      {tasks.map((task) => (
        <TaskCards key ={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}
