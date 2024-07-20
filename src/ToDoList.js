import "./ToDoList.css";

function ToDoList({children}){
    return (
      <ul className="mainList">
        {children}
      </ul>
    );
  }

  export {ToDoList};