import { useState } from "react";

export default function TaskForm(){
  const [taskName, setTaskName] = useState("");
  return (
    <form>
        <button>+</button>
        <input type="text" value = {taskName}
        onChange={(event => setTaskName(event.target.value))} 
        placeholder="Next Task?"/>
      </form>
  )
}

