import React from 'react';
import {Link} from "react-router-dom"
import {connect} from 'react-redux';
import { firebaseLogOut } from '../../redux/actions/auth.action';

import {HeaderStyle, HeaderContent, LogOutButton} from '../../styles/HeaderStyle'
import {ContentContainer} from '../../styles/BudgetContainer'

const Header = ({firebaseLogOut}) => {
  return (
    <HeaderStyle>
      <ContentContainer>
        <HeaderContent>
          <Link to="/dashboard" className="title"><h1>Financial Balancing</h1></Link>
          <LogOutButton onClick={firebaseLogOut}>Log Out</LogOutButton>
        </HeaderContent>
      </ContentContainer>
    </HeaderStyle>
   );
}

const mapDispatchToProps = (dispatch) => ({
  firebaseLogOut: () => dispatch(firebaseLogOut())
})
 
export default connect(undefined, mapDispatchToProps)(Header);