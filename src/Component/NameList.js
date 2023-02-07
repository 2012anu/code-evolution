import React from "react";
import Person from "./Person";
function NameList() {
  //   const names = ["Anusha", "Aadi", "Arya", "Vruksha"];

  const person = [
    {
      name: "Anusha",
      skill: "React",
      age: 22,
    },

    {
      name: "Arya",
      skill: "app",
      age: 21,
    },
    {
      name: "Vruksha",
      skill: "java",
      age: 20,
    },

    {
      name: "Aadi",
      skill: "c++",
      age: 222,
    },
  ];
  //format code
  //   const lists = names.map(n => <div>{n}</div>)
  //p repesent object in the list , used to access
  const personList = person.map((p) => (
    <div>
      I am {p.name} my age {p.age} and my skills is {p.skill}
    </div>
  ));
  return (
    <div>
      {/* Array way of getting the lists */}
      {/* <p>{names[0]}</p>
          <p>{names[1]}</p>  */}

      {/* map method */}
      {/* {lists} */}

      {/* for obj */}
      {/* {personList} */}

      {/* child compo */}
      <Person person = {person}></Person>
    </div>
  );
}

export default NameList;
