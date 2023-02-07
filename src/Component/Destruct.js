import React, { Component } from 'react'
 //Destructing the  
 const Destruct = (props) => {
    const {name, lastname} = props
   return(
    <>
    <p>function component</p>
    <div> my name is {name} and last name {lastname}</div>
    </>
   )


}
// export class Destruct extends Component {
//   render() {
//    const {name , lastname} = this.props
//     return ( <> 
// <div>This Class component destructing</div>
//       <div>my Name is {name} and last name is {lastname}</div>
//       </>
//     )
//   }
// }

export default Destruct