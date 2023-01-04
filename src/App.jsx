import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskForm";

export default function App() {

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm  />
        <Tasklist  />
      </div>
      
    </div>
  );
}
