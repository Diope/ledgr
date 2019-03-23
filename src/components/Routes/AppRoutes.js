import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from '../../redux/store'
import createHistory from 'history/createBrowserHistory'

import Dashboard from '../Presentation/Dashboard'
import CreateBudget from '../Presentation/CreateBudget'
import AboutPage from '../Presentation/About'
import EditBudget from '../Container/EditBudget'
import LogIn from '../Container/LogIn'
import HOCPrivateRoutes from '../HOC/HOC_PrivateRoutes';
import HOCPublicRoutes from '../HOC/HOC_PublicRoutes';

import '../../App.scss'

export const history = createHistory();

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <HOCPublicRoutes path="/" component={LogIn} exact={true}/>
            <HOCPrivateRoutes path="/dashboard" component={Dashboard} />
            <HOCPrivateRoutes path="/create" component={CreateBudget} />
            <HOCPrivateRoutes path="/edit/:id" component={EditBudget} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router> 
    </Provider>
    );
}


 
export default AppRoutes;