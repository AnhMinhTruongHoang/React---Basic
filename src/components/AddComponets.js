import React from "react";

class Addcomponent extends React.Component {
  state = {
    title: "",
    Salary: "",
  };

  changejobs = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  changeSalary = (event) => {
    this.setState({
      Salary: event.target.value,
    });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    // ( !this.state.title || !this.state.Salary ) or
    if( this.state.title ==='' || this.state.Salary ===''){
        alert('missing param')
        return;
    }

    // console.log("check data", this.state);
    
    this.props.addnewjob({ 
        id: Math.floor(Math.random()* 1001) , /// id ngau nhien
         title:this.state.title,
         Salary:this.state.Salary,
    })
    this.setState({
        title: '',
        Salary: '',
    })
  };
  
  render() {
    return (
      <form>
        <label for="fname">JobsTittle: </label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.changejobs(event)}
        />
        <br />
        <label for="salary">Salary: </label>
        <input
          
          value={this.state.Salary}
          onChange={(event) => this.changeSalary(event)}
        />
        
        <br />
        <input type="submit" onClick={(event) => this.handlerSubmit(event)} />
      </form>
    );
  }
}

export default Addcomponent;
