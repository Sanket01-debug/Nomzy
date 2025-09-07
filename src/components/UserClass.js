import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy loc",
      },
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child componentDidMount");
    const data = await fetch("https://api.github.com/users/Sanket01-debug");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log("Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>User Name : @kansal_sanket</h4>
      </div>
    );
  }
}

export default UserClass;