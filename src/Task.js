import Checkbox from "./Checkbox";

export default function Task({name, done, onToggle}) {
  /* Feed in the default check state and display name of task */
  return (
    //Task div has a ternary operator to distinguish done or not done
    // OnClick will run onToggle from App. It is cycling between done and not done
    <div className={'task ' + (done?'done': 'notDone')}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} /> 
        <span>{name}</span>
      </div>
  )
}