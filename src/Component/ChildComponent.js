import React from 'react'

function ChildComponent(props) {
  return (
    <>
    <div>
        {/* <button onClick={props.greetHandler}>Click!!</button> */}
        {/* parameter passing */}
        <button onClick={() => {props.greetHandler('Child')}}>  child button  </button>
    </div>
    </>
  )
}

export default ChildComponent