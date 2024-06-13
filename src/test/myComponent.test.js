import React, { Fragment } from "react";
import ChildComponents from "./ChildComponents";
import "../view/App.scss";
import Addcomponent from "../components/AddComponets";

/*
            JSX => return
            fragment boc lai div
            state khai bao thay let
    */

class MyComponents extends React.Component {
  ///////////////////
  state = {
    Firstname: "",
    lasttname: "",
    arrjobs: [
      { id: "abcjob1", title: "dev", salary: "100" },
      { id: "abcjob2", title: "tes", salary: "300$" },
      { id: "abcjob3", title: "man", salary: "600" },
    ],
  };
  //////////////
  addnewjob = (job) => {
    // let currentjobs = this.state.arrjobs
    this.setState({
      arrjobs: this.state.arrjobs,
    });
  };

  //////////////
  render() {
    return (
      <>
        <box>
          <Addcomponent />
          <form>
            <label for="fname">First Name</label>
            <input
              type="text"
              value={this.state.Firstname}
              onChange={(event) => this.changeF(event)}
            />
            <br />
            <label for="lname">Last Name</label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={(event) => this.changeL(event)}
            />{" "}
            <br />
            <input
              type="submit"
              onClick={(event) => this.handlerSubmit(event)}
            />
          </form>
        </box>
        <ChildComponents
          name={this.state.Firstname}
          age={21}
          arrjobs={this.state.arrjobs}
        />
      </>
    );
  }
}

export default MyComponents;
