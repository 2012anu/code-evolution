import "./App.css";
import Great from "./Component/Greet";
import Welcome from "./Component/Welcome";
import Message from "./Component/Message";
import Jsx from "./Component/Jsx";
import Counter from "./Component/Counter";
import Destruct from "./Component/Destruct";
import ClickFunction from "./Component/ClickFunction";
import ClickClass from "./Component/ClickClass";
import EventBinding from "./Component/EventBinding";
import ParentComponent from "./Component/ParentComponent";
import IfElse from "./Component/IfElse";
import NameList from "./Component/NameList";
import KeysList from "./Component/KeysList";
import Form from "./Component/Form";
import LifeCycle from "./Component/LifeCycle-A";
import PureComp from "./Component/PureComp";
import ParentComp from "./Component/ParentComp";
import RefsComp from "./Component/RefsComp";
function App() {
  return (
    <div>
      {/* <Great name="Anusha" lastname="Arunkumar">
        This is first sentence 'props.children is used to print here'
      </Great>
      <Great name="Vruksha" lastname="Rao">
        <button className="button"> This is second sentence</button>
      </Great>
      <Great name="Aadi" lastname="Hegde"><textarea>This is third sentence</textarea></Great>
      <br></br>
      <br></br>
      <br></br>
      <Welcome name1="Arya"></Welcome>  */}
      {/* <Jsx></Jsx> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <Destruct name="Anusha" lastname="Arun kumar"></Destruct> */}
      {/* <ClickFunction></ClickFunction>
     <br></br>
     <br></br>
     <ClickClass></ClickClass> */}
      <EventBinding></EventBinding>
      {/* <ParentComponent></ParentComponent> */}
      {/* <IfElse></IfElse> */}
      {/* <NameList></NameList> */}
      {/* <KeysList></KeysList> */}
      {/* <Form className="form"></Form> */}
      {/* <LifeCycle></LifeCycle> */}
    
       {/* <PureComp></PureComp>  instead of this 
       <ParentComp></ParentComp> */}

        <RefsComp></RefsComp>
    </div>
  );
}

export default App;
