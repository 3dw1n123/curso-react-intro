import "./ToDoCounter.css"

function ToDoCounter({completed,total}){
    return (
      completed==total?
      <h1 className="toDoCounter">
        FELICITACIONES COMPLETASTE TUS TODOS
      </h1>
      :
      <h1 className="toDoCounter">
        Haz completado <span>{completed}</span> de <span>{total}</span> ToDos
      </h1>
    );
  }

  export {ToDoCounter};