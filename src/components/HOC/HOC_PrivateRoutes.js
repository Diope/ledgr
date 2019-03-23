import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

import Header from '../Presentation/Header';



export const PrivateRoutes = ({isAuth, component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    isAuth ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoutes)
