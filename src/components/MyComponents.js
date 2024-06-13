import React, { Fragment } from "react";
import ChildComponents from "./ChildComponents";
import "../view/App.scss";
import Addcomponent from "./AddComponets";

//#24
/*
            JSX => return
            fragment boc lai div
            state khai bao thay let
    */

class MyComponents extends React.Component {
  ///////////////////
  state = {
    arrjobs: [
      { id: "abcjob1", title: "dev", salary: "100" },
      { id: "abcjob2", title: "tes", salary: "300$" },
      { id: "abcjob3", title: "man", salary: "600" },
    ],
  };
  //////////////
  addnewjob = (job) => {
    console.log("check jobs form parents;", job);
    // let currentjobs = this.state.arrjobs;
    // currentjobs.push(job);

    this.setState({
      arrjobs: [...this.state.arrjobs, job],
      // arrjobs: currentjobs,
    });
  };

  deletejob = (job) => {
    let currentjobs = this.state.arrjobs;

    currentjobs = currentjobs.filter((item) => item.id !== job.id);

    this.setState({
      arrjobs: currentjobs,
    });
  };

  componentDidUpdate(prevStage, prevProps) {
    console.log(">>run didUp ", "prevStage", "current stage", this.state);
  }
  componentDidMount() {
    console.log(">>>> run components did mount");
  }

  //////////////
  render() {
    return (
      <>
        <Addcomponent addnewjob={this.addnewjob} />
        <ChildComponents
          arrjobs={this.state.arrjobs}
          deletejob={this.deletejob}
        />
      </>
    );
  }
}

export default MyComponents;
