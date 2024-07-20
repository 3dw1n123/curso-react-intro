import "./ToDoCounter.css"

function ToDoCounter({completed,total}){
    return (
      <h1>
        Haz completado {completed} de {total} ToDos
      </h1>
    );
  }

  export {ToDoCounter};