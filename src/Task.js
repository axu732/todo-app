import Checkbox from "./Checkbox";

export default function Task({name, done}) {
  /* Feed in the default check state and display name of task */
  return (
    <div className="task">
      <Checkbox defaultChecked={done} /> 
        {name}
      </div>
  )
}