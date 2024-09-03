import { ToDoCounter } from './ToDoCounter';
import { ToDoInput } from './ToDoSearch';
import { ToDoItem } from './TodoItem';
import { ToDoList } from './ToDoList';
import { ToDoNew } from './ToDoNew';
import React from 'react';
import "./App.css";


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan: ' + searchValue);

  const [todos,setTodos] = React.useState([
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
  ]);

  
  const countCompleted = todos.filter(todos => todos.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todos => 
    todos.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  
  const checkTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text == text
    );

    console.log(todoIndex);
    if(newTodos[todoIndex].completed == false){
      console.log("Entró");
      newTodos[todoIndex].completed = true;
    }else{
      console.log("No entró");
      newTodos[todoIndex].completed = false;
    }
    setTodos(newTodos);
  }

  const deleteTodo =(text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text == text
    );
    console.log(todoIndex);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  } 

  return (
    <>
        <div className='list'>
            <ToDoCounter completed={countCompleted} total={totalTodos}/>
            <ToDoInput 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            <ToDoList>
            {searchedTodos.map(todo=>(
              <ToDoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={()=> checkTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}

              />
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
