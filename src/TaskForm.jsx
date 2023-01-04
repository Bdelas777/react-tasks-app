import React from "react";
import { useState, useEffect } from "react";

function TaskForm(createTask) {
    const [title, setTitle] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTask = {
            title
        }
        createTask(newTask)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Escribe tu tarea"/>
        <button>
            Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
