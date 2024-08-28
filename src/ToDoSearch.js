import "./ToDoSearch.css";
import React from 'react';

function ToDoInput({
    searchValue,
    setSearchValue,
}){

    

    console.log('Los usuarios buscan: ' + searchValue);
    return(
        <input className="searchInput" placeholder="Limpiar el cuarto"
        value = {searchValue}
        onChange={(event)=>{console.log("Escribiste");
            setSearchValue(event.target.value);
        }
       }
        />
    )    
}

export {ToDoInput};