import { useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // function that that will add the task to the end of an array
  function addTask(taskName) {
    setTasks(prev => {
      return [...prev, {name:taskName, done:false}];
    });

  }

  // Defines the onAdd function for the TaskForm component and then loops through the tasks array to display them
  return (
    <main>
      <TaskForm onAdd = {addTask}/>
      {tasks.map(task => (
        <Task {...task}/>
      ))}

    </main>
  );
}

export default App;
