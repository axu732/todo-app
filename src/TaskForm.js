import { useState } from "react";

// Defines that and onAdd function is needed (taken from App.js)
export default function TaskForm({onAdd}){
  const [taskName, setTaskName] = useState("");

  // function that makes it so it prevents a browser refresh and uses the onAdd function
  function handleSubmit(event) {
    event.preventDefault();
    onAdd(taskName);
    setTaskName('');

  }
// Returns the Task form text box for adding a task
  return (
    <form onSubmit={handleSubmit}>
        <button>+</button>
        <input type="text" value = {taskName}
        onChange={(event => setTaskName(event.target.value))} 
        placeholder="Next Task?"/>
      </form>
  )
}

