import React from 'react';
import './square.css';

const Square = ({handleClick, selected, children }) => {


  return (
    <div onClick={handleClick} className='box' style={{backgroundColor: selected ? 'red' :'blue'}}>
      <div className='number'>{children}</div>
    </div>

 
  )
}

export default Square;

    {/*<div onClick={props.change} className={props.class} >
        <div className='number'>{props.children}</div>
  </div>*/}