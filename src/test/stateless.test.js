import React, { Fragment } from "react";
import App from "../view/App";

/*
            JSX => return
            fragment boc lai div
            state khai bao thay let
    */
const ChildComponents = (props) => {
  let { arrjobs } = props;

  return (
    <Fragment>
      <div className="jobs-list">
        {arrjobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
////////////////////////////////////
class ChildComponents extends React.Component {
  //

  render() {
    // let Name = this.props.name;
    // let age = this.props.age;

    let { arrjobs } = this.props;

    console.log(">>> check props", this.props);

    return (
      <div className="jobs-list">
        {arrjobs.map((item, index) => {
          if(item.salary >=600){

          
          return (
            <div key={item.id}>
              {item.title} - {item.salary} $
            </div>
          );
        }
        
        })
      }
      </div>
    );
  }
}

export default ChildComponents;
