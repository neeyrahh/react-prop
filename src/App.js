import React from "react"
import {Data,MyImage,ActionAlert} from "./Profile/Profile.component";


function App() {
  const myStyle = {textAlign :"center", color : " blue", fontSize : 15, fontWeight :400, backgroundColor: "#282c34"};
  const handleName = e => {
    e. preventDefault();
    alert("somoye munirat");
  };
  return (
    <div style = {myStyle} >
      <Data fullName= "somoye munirat" bio = " i love reading and researching" profession = "student"/>
      <MyImage>picture</MyImage>
      <br />
      <ActionAlert handleName = {handleName}></ActionAlert>
    </div>
  );
}

export default App;
