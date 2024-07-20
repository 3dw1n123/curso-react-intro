import "./TodoItem.css"
import logo from "./assets/square.png";
import logo2 from "./assets/check-box.png";
import del from "./assets/delete.png";

function ToDoItem(props){
    return (
      <li className="itemList">
        <span className="check">
          <img src={logo}/>
        </span>
        <p>{props.text}</p>
        <span className="delete">
          <img src={del}/>
        </span>
      </li>
    );
  }

  export {ToDoItem};