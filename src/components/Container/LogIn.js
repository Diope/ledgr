import React from 'react';
import {connect} from 'react-redux'
import {googleAuth, twitterAuth} from '../../redux/actions/auth.action'

import {Layout, LayoutBox, GoogleButton, TwitterButton} from '../../styles/StyledLogin'


const LogIn = ({googleAuth, twitterAuth}) => {
  return ( 
    <Layout>

      <LayoutBox>
        <h1>Ledgr</h1>
        <h3>Log In</h3>
        <GoogleButton onClick={googleAuth}>Login With Google</GoogleButton>
        <TwitterButton onClick={twitterAuth}>Login With Twitter</TwitterButton>
      </LayoutBox>
      
    </Layout>
   );
}
 
const mapDispatchToProps = (dispatch) => ({
  googleAuth: () => dispatch(googleAuth()),
  twitterAuth: () => dispatch(twitterAuth())
})
 
export default connect(undefined, mapDispatchToProps)(LogIn);