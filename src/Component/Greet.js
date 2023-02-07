import React from "react";
//ran is other name for props refernece name
const Great = (ran) => {
    console.log(ran)
    return <>
    {/* props.children is used to bind data between tag value <div> this value</div> */}
    {/* <div>Hello from Greet functional component</div> */}

    <h3>Props concept function component</h3>
    <div> hello {ran.name} {ran.lastname}</div>
    {ran.children}
    </>
}

export default Great;