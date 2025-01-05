import React from "react";
import { useState } from "react";

class UserClass extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      count: 0,
      userInfo:{
        name:"dummyName",
        location:'dummyLocation',
      },
    };
  }

  async componentDidMount(){

    const data = await fetch('https://api.github.com/users/SamarthMotka');
    const json  = await data.json();

    this.setState({
      userInfo: json,
    });

  }

 

  render() {
    const {name,location,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3> Location : {location}</h3>
        <h4>Contack : +91-8153933938</h4>
      </div>
    );
  }
}

export default UserClass;
