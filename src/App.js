import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // This will set the tasks array into local storage. It will check if it is 0 and return if it is, making sure it is not set back to an empty array.
  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // We will then read from local storage and setTasks to the tasks array. If it tasks is null, we will skip this step.
  useEffect(() => {
    const tasksArray = JSON.parse(localStorage.getItem("tasks"));
    if (tasksArray !== null && tasksArray !== undefined) {
      setTasks(tasksArray);
    }
  }, []);

  // function that that will add the task to the end of an array
  function addTask(taskName) {
    setTasks((prev) => {
      return [...prev, { name: taskName, done: false }];
    });
  }

  // This will update the task of at taskIndex if it is done or not
  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const tasksComplete = tasks.filter((t) => t.done).length;
  const totalTasks = tasks.length;

  // Dynamic message based on how many tasks have been done by the user
  function getMessage() {
    const percentage = (tasksComplete / totalTasks) * 100;

    if (percentage === 100) {
      return "Good work!";
    }

    if (percentage === 0) {
      return "Try to do one today!";
    }

    return "Keep it up!";
  }

  //Function will check the previous state of tasks and then filter the tasks removing the one at task index.
  // Then we will save the array to local storage
  function removeTask(taskIndex) {
    setTasks((prev) => {
      const newTasks = prev.filter((task, index) => index !== taskIndex);
      localStorage.setItem("tasks", JSON.stringify(newTasks)); // Update local storage
      return newTasks;
    });
  }

  function renameTask(taskIndex, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].name = newName;
      return newTasks;
    })
  }

  // Defines the onAdd function for the TaskForm component and then loops through the tasks array to display them.
  // Header updates based on how many tasks have been completed
  return (
    <main>
      <h1>
        Tasks: {tasksComplete} / {totalTasks} done{" "}
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, taskIndex) => (
        <Task
          {...task}
          onRename={newName => renameTask(taskIndex, newName)}
          onDelete={() => removeTask(taskIndex)}
          onToggle={(done) => updateTaskDone(taskIndex, done)}
        />
      ))}
    </main>
  );
}

export default App;
