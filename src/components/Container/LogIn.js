import React from 'react';
import {connect} from 'react-redux'
import {googleAuth, twitterAuth} from '../../redux/actions/auth.action'

const LogIn = ({googleAuth, twitterAuth}) => {
  return ( 
    <div>
      <button onClick={googleAuth}>Login With Google</button>
      <button onClick={twitterAuth}>Login With Twitter</button>
    </div>
   );
}
 
const mapDispatchToProps = (dispatch) => ({
  googleAuth: () => dispatch(googleAuth()),
  twitterAuth: () => dispatch(twitterAuth())
})
 
export default connect(undefined, mapDispatchToProps)(LogIn);