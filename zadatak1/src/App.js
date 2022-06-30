import React, { useState }  from "react";
import Square from "./Square";

import "./App.css";

function App() {

  // const [squareState, setSquareState] = useState({
  //   activeSquare:null,
  //   data:[{id:1},{id:2},{id:3}]
  // })

    const [squareState, setSquareState] = useState();

    const handleClick = (value) => {
      setSquareState(value);
    }


  // const [number,setNumber] = useState('');

  // const showNumber = (index) =>{
  //  if(index === squareState.data[0].id){
  //   setNumber(1)
  //  }else if(index === squareState.data[1].id){
  //   setNumber(2)
  //  }else if(index === squareState.data[2].id){
  //   setNumber(3)
  //  }
  // }


  // const toggleActive = (index) => {
  //   setSquareState({...squareState, activeSquare: squareState.data[index]})
  //   showNumber(index);
  // }

  // const toggleActiveStyles = (index) =>{
  //   if(squareState.data[index] === squareState.activeSquare){
  //     return "box active";
  //   }else{
  //     return "box inactive";
  //   }
  // }


  return (
    <div className="App">
      {/* <Square change={() => toggleActive(1)} class={toggleActiveStyles(1)}/>
      <Square change={() => toggleActive(2)} class={toggleActiveStyles(2)} >{number}</Square>
      <Square change={() => toggleActive(3)} class={toggleActiveStyles(3)}/>      */}
      <Square value={1} selected={squareState === 1} handleClick={() => handleClick(1)}/>
      <Square value={2} selected={squareState === 2} handleClick={() => handleClick(2)}>{squareState}</Square>
      <Square value={3} selected={squareState === 3} handleClick={() => handleClick(3)}/>
    </div>
  );
}

export default App;

