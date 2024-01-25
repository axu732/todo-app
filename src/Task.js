import Checkbox from "./Checkbox";

export default function Task({name, done, onToggle}) {
  /* Feed in the default check state and display name of task */
  return (
    <div className="task">
      <Checkbox checked={done} onClick={() => onToggle(!done)} /> 
        {name}
      </div>
  )
}