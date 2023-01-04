import Tasklist from "./Tasklist";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask (task){
    setTasks([...tasks,task])
  }

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <Tasklist tasks={tasks} />
    </div>
  );
}

export default App;
