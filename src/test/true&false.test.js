import React, { Fragment } from "react";

//////////////////////////////////
class ChildComponents extends React.Component {
  state = {
    showjobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showjobs: !this.state.showjobs,
    });
  };

  render() {
    let { arrjobs } = this.props;
    let { showjobs } = this.state;
    // let check = showjobs === true ? 'showjobs = true' : 'showjobs = false';
    
    return (
      <>
        {showjobs === false && (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        )}

        {showjobs === true && (
          <Fragment>
            <div className="jobs-list">
              {arrjobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $
                  </div>
                );
              })}
            </div>

            <div>
              <button onClick={() => this.handleShowHide()}>hide</button>
            </div>
          
          </Fragment>
        )}
      </>
    );
  }
}
//////////////////////
// const ChildComponents = (props) => {
//   let { arrjobs } = props;

//   return (
//     <Fragment>
//       <div className="jobs-list">
//         {arrjobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </Fragment>
//   )
// }

export default ChildComponents;
