import React from "react";
import {TodoIcon} from './Todoicon';

function CompleteIcon({completed,onComplete}){  
    return (
        <TodoIcon
        type = "check"
        color ={completed?'green':"black"}
        onClick={onComplete}

        />
    )
}

export{CompleteIcon};