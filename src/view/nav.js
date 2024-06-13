import React from "react";
import '../styles/nav.scss'
import {  Link, NavLink ,} from "react-router-dom";


class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        
        <NavLink to='/' activeClassName="active"  exact={true}>Home</NavLink>
        
        <NavLink to='/todo' activeClassName="active" >todo</NavLink>
        
        <NavLink to='/about' activeClassName="active" >about</NavLink>
        
        <NavLink to='/Listuser' activeClassName="active" >user</NavLink>

        
        
       
      </div>
    );
  }
}

export default Nav;
