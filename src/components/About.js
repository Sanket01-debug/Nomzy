import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
  constructor(porps){
    super();
    
  }

  componentDidMount(){
    // console.log("Paresnt ComponentDidMount")
  }
  render(){
    // console.log("Parent Render");
    return (
    <div>
      <h1>This is About Section</h1>
      <div>
        User Name:
        <UserContext.Consumer>{({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}</UserContext.Consumer>
      </div>
      <UserClass  name={"Sanket (Class)"} location={"Faridabad"} />
    </div>
    
  );
  }
}

export default About;