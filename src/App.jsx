import './App.css'
import Languages from './component/Languages';
import Message from './component/Message';
import Counter from './component/Counter';
import ChangeName from './component/ChangeName';
import React, { useState } from 'react'
import ControlledName from './component/ControlledName';
import ControlledInfo from './component/ControlledInfo';
import MyCounter from './component/MyCounter';


function App() {
  // Lifting of State - when state remove from child component and manage by parent component 
  //Central management control tool = Redux
  // const [name, setName] = useState("JAI SHREE RAM");
  // const [name, setName] = useState("KIET");


  return (
    <>
      {/* <Message/>
      <Languages/> */}
      {/* <ChangeName name={name} onUpdate={()=>setName("HAR HAR MAHADEV")}/> */}
      {/* <ControlledName name={name} onUpdate={()=>setName("MCA")}/> */}
      {/* <ControlledInfo/> */}
      {/* <Counter/> */}
      <MyCounter/>
    </>
  );
}

export default App