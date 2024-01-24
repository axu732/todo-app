import { useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskName) {
    setTasks(prev => {
      return [...prev, {name:taskName, done:false}];
    });

  }

  return (
    <main>
      <TaskForm onAdd = {addTask}/>
      <Task />

    </main>
  );
}

export default App;
