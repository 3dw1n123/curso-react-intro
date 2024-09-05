import React from "react";
import {TodoIcon} from "./Todoicon";

function DeleteIcon({onDelete}){
    return (
        <TodoIcon
        type = "delete"
        color ="black"
        onClick={onDelete}
        />
    )
}

export{DeleteIcon};