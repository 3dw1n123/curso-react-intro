import "./TodoItem.css"
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';

function ToDoItem(props){
    return (
      <li className="itemList">
        <CompleteIcon completed={props.completed} onComplete={props.onComplete}  />
        
        <p className={`text ${props.completed && "text--complete"}` }>{props.text}</p>
        <DeleteIcon 
        onDelete = {props.onDelete}/>
        
      </li>
    );
  }

  export {ToDoItem};