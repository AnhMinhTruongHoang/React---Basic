import React, { Fragment } from "react";
import App from "./App";

/*
            JSX => return
            fragment boc lai div
            state khai bao thay let
    */

class MyComponents extends React.Component {
  state = {
    name: "minh",
    channel: "7",
  };

  handlerClickButton = () => {
    console.log("hit the button !");
    alert("click me !");
  };

  handlerChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handlerChangeNumber = (event) => {
    this.setState({
      channel: event.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="0">hello world, my name is {this.state.name}
          {console.log("hello my name is:", this.state.name)};
        </div>
        <div className="1"> my number is {this.state.channel} </div>
        <div className="3"><button onClick={() => this.handlerClickButton()}>click me</button>
        </div>
        <br />
        <div className="4">
          
          <input onChange={(event) => this.handlerChangeName(event)} /> my name
          is {this.state.name}
        </div>
        <div className="5">
        
          <input
            type="number"
            onChange={(event) => this.handlerChangeNumber(event)}/>and my number is {this.state.channel}
        </div>
      </Fragment>
    );
  }
}

// export default MyComponents;
