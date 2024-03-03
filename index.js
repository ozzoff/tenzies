import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Die from "./die";
import { nanoid } from "nanoid";



function Main(){
  let[dice,setdice]=React.useState(allDiceGenerator())
  let[tenzies,settenzies]=React.useState(false)



  React.useEffect(()=>{
    let allHeald=dice.every(die=>die.isHeald)
    let firstValue=dice[0].value
    let allSame=dice.every(die=> die.value === firstValue)

    if(allHeald && allSame){
      settenzies(true)
    }



  },[dice])

  function allDiceGenerator(){
    let newDice=[]
    for(let i=0;i<10;i++){
      newDice.push({value:Math.floor(Math.random()*2),id:nanoid(),isHeald:false})
    }

    return newDice
  }


  function rollDice(){

    if(tenzies){
      settenzies(false)
      setdice(allDiceGenerator())

      

    }

    else{
      setdice(prev=>prev.map(die=>{
        return die.isHeald ? die : {value:Math.floor(Math.random()*2),id:nanoid(),isHeald:false}
      }))
    }
    
  }

  function holdDice(id){

    setdice(prev=>prev.map(die=>{
      return die.id === id ? {...die,isHeald:!die.isHeald} : die
    }))

  }

  


  return (
    <div className="game_container">
      <div className="txt">
        <h1>Tenzies</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsum?</p>
      </div>

      <div className="allDice">
        {
          dice.map(die=>(
            <Die isHeald={die.isHeald} holdDice={holdDice} id={die.id} die={die.value} ></Die>
          ))
        }
      </div>

      <button onClick={rollDice}>

        {
          tenzies ? "Reset" : "Roll"
        }
      </button>
      
    </div>
  )
}


ReactDOM.render(<Main />, document.getElementById("root"));