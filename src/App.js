import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // This will set the tasks array into local storage. It will check if it is 0 and return if it is, making sure it is not set back to an empty array
  useEffect(() => {
    if(tasks.length === 0){
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // We will then read from local storage and setTasks to the tasks array
  useEffect(() => {
    const tasksArray = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasksArray);
  }, []);

  // function that that will add the task to the end of an array
  function addTask(taskName) {
    setTasks((prev) => {
      return [...prev, { name: taskName, done: false }];
    });
  }

  // Defines the onAdd function for the TaskForm component and then loops through the tasks array to display them
  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task {...task} />
      ))}
    </main>
  );
}

export default App;
