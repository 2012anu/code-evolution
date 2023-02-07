import React from 'react'

function Person({person}) {
    //person props name is same name as person obj becasue it as know the
//p repesent object in the list , used to access 
    const personList = person.map((p) => <div>I am {p.name} my age {p.age} and my skills is {p.skill}</div>);
  return (
    <div>
        {personList}
    </div>
  )
}

export default Person