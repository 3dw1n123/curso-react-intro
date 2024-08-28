import "./TodoItem.css"
import logo from "./assets/square.png";
import logo2 from "./assets/check-box.png";
import del from "./assets/delete.png";

function ToDoItem(props){
    return (
      <li className="itemList">
        <span className={`check  ${props.completed && "check--active"}`}>
          <img src={logo}/>
        </span>
        <p className={`text ${props.completed && "text--complete"}` }>{props.text}</p>
        <span className={`delete`}>
          <img src={del}/>
        </span>
      </li>
    );
  }

  export {ToDoItem};