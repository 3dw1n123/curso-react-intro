import logo from './platzi.webp';
import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoInput } from './ToDoSearch';
import { ToDoItem } from './TodoItem';
import { ToDoList } from './ToDoList';
import { ToDoNew } from './ToDoNew';

function App() {
  return (
    <div>
    <ToDoCounter/>
    <ToDoInput/>
    <ToDoList>
      <ToDoItem/>
    </ToDoList>
    <ToDoNew/>
    
    
    </div>
    
  );
}



export default App;
