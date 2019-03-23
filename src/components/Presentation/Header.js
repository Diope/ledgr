import React from 'react';
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux';
import { firebaseLogOut } from '../../redux/actions/auth.action';

const Header = ({firebaseLogOut}) => {
  return (
    <header>
      <h1>Financial Budgeting</h1>
      <NavLink to="/dashboard" activeClassName="active-link" >Dashboard</NavLink>
      <NavLink to="/create" activeClassName="active-link">Create A Budget</NavLink>
      <NavLink to="/about" activeClassName="active-link">About</NavLink>
      <button onClick={firebaseLogOut}>Log Out</button>
    </header>
   );
}

const mapDispatchToProps = (dispatch) => ({
  firebaseLogOut: () => dispatch(firebaseLogOut())
})
 
export default connect(undefined, mapDispatchToProps)(Header);