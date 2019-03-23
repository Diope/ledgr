import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from '../../redux/store'
import createHistory from 'history/createBrowserHistory'

import Dashboard from '../Presentation/Dashboard'
import Header from '../Presentation/Header'
import CreateBudget from '../Presentation/CreateBudget'
import AboutPage from '../Presentation/About'
import EditBudget from '../Container/EditBudget'
import LogIn from '../Container/LogIn'

import '../../App.scss'

export const history = createHistory();

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
        <Header />
          <Switch>
            <Route path="/" component={LogIn} exact={true}/>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/create" component={CreateBudget} />
            <Route path="/edit/:id" component={EditBudget} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router> 
    </Provider>
    );
}


 
export default AppRoutes;