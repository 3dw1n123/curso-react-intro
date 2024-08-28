import "./ToDoNew.css";
import add from "./assets/add.png";
import think from "./assets/think.png";
function ToDoNew(){
    return (
        <div className="creationMainDiv">
            <div className="try">
                <h1>Crea tu nueva tarea</h1>
                <div className="creationContainer">
                    <input className="creationContainerInput" type="text"  placeholder="Tarea"/>
                    <button>
                        <img onClick={()=>console.log("Click")} src={add}/>
                    </button>
                </div>
            </div>
            
            <div className="imageContainer">
                <img src={think}/>
                
            </div>
            
        </div>
    );
}

export {ToDoNew};