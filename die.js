import React from "react";


export default function Die(props){
    return(
        <div style={props.isHeald ? {backgroundColor:"green"} : {backgroundColor:"white"}} 
        onClick={()=>props.holdDice(props.id)} className="die-num">
            <div className="die">
                <h2>{props.die}</h2>
            </div>
        </div>

    )
}