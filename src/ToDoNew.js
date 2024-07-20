import "./ToDoNew.css";
import add from "./assets/add.png";
import think from "./assets/think.png";
function ToDoNew(){
    return (
        <div className="">
            <h1>Crea tu nueva tarea</h1>
            <div className="creationContainer">
                <input className="creationContainerInput" type="text"  placeholder="Tarea"/>
                <button>
                    <img src={add}/>
                </button>
            </div>
            <div className="imageContainer">
                <img src={think}/>
            </div>
            
        </div>
    );
}

export {ToDoNew};