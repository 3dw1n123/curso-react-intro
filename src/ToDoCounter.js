import "./ToDoCounter.css"

function ToDoCounter({completed,total}){
    return (
      <h1 className="toDoCounter">
        Haz completado <span>{completed}</span> de <span>{total}</span> ToDos
      </h1>
    );
  }

  export {ToDoCounter};