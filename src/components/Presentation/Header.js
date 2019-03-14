import React from 'react';
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>Financial Budgeting</h1>
      <NavLink to="/" activeClassName="active-link" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="active-link">Create A Budget</NavLink>
      <NavLink to="/about" activeClassName="active-link">About</NavLink>
    </header>
   );
}
 
export default Header;