import { ToDoCounter } from './ToDoCounter';
import { ToDoInput } from './ToDoSearch';
import { ToDoItem } from './TodoItem';
import { ToDoList } from './ToDoList';
import { ToDoNew } from './ToDoNew';
import React from 'react';
import "./App.css";


const defaultTodos = [
  {text:`Probando`, completed: true},
  {text:`Probando 2`, completed: true},
  {text:`Probando 3`, completed: false},
  {text:`Probando 4`, completed: true},
  {text:`Probando 5`, completed: true},
  {text:`Probando 6`, completed: false},
  {text:`Probando 7`, completed: true},
  {text:`Probando 8`, completed: true},
  {text:`Probando 9`, completed: false},
  {text:`Probando 10`, completed: true},
  {text:`Probando 11`, completed: true},
  {text:`Probando 12`, completed: false},
];

function App() {
  return (
    <>
        <div className='list'>
            <ToDoCounter completed={10} total={20}/>
            <ToDoInput/>
            <ToDoList>
            {defaultTodos.map(todo=>(
              <ToDoItem key={todo.text} text={todo.text} completed={todo.completed}/>
            ))}
            </ToDoList>
        </div>

        <div className='creation'>
          <ToDoNew/>
        </div>      
    </>
     
  
    
  );
}



export default App;
