import React from "react";

function KeysList() {
  const studentlist = [
    { name: "Anusha", age: 23, school: "jkv" },
    { name: "Anu", age: 213, school: "jv" },
    { name: "An", age: 123, school: "jkuv" },
    { name: "Anua", age: 2, school: "vk" },
 //{ name: "Anua", age: 2, school: "vk" },// warning  Encountered two children with the same key, `Anua`. Keys should be unique so that components maintain their identity across updates. 
  ];
 
  //key = {stu.name} is just giving unique identity to all siblings
 
  const student = studentlist.map((stu) => <div key = {stu.name}> {stu.name} {stu.age} {stu.school}</div>)
  return (
    <>
    {student}
    </>
  );
}

export default KeysList;
