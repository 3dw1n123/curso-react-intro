import React from "react";
import {ReactComponent as CheckSVG} from './assets/check_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import {ReactComponent as DeleteSVG} from './assets/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24(1).svg';
import "./Todoicon.css";

const iconType = {
    "check": (color)=><CheckSVG className="iconSvg" fill={color} />,
    "delete":(color)=><DeleteSVG className="iconSvg" fill={color}/>,
};

function TodoIcon({type,color,onClick}){
    
    return(
        <span
        className={`icon Icon-${type}`}
        onClick={onClick}>
            {iconType[type](color)}
            
        </span>
    )
}


export {TodoIcon};