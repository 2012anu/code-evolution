import React, { Component } from 'react'
import './compcss.css';
  //Event Handling wrt onclick()
function ClickFunction() 
 {
function clickHandler() {
    console.log("button is clicked in function");
}
{
    return (
        <>
        <div>
            {/* never use clickHandler() because its function call */}
            <button className='Click' onClick={clickHandler} > Click button in Function Component</button>
        </div>
        </>
    );
}
 }
export default ClickFunction