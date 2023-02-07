import React from "react";
import "./compcss.css";
const Jsx = () => {
  // this is normal jsx way of coding
  //    return <>
  //     <div>
  //         <h3 className= 'nonJsx'>Normal Jsx way of coding</h3>
  //     </div>
  //     </>

  // without jsx

  // return React.createElement('div' ,null, 'Non Jsx way');
  // return React.createElement('div' , {className: 'nonJsx', id: 'ID' } , 'Hello');
  return React.createElement(
    "div",
    { className: "nonJsx", id: "ID" },
     React.createElement( 'h1' , null, "Non Jsx coding")
   
  );
};

export default Jsx;
