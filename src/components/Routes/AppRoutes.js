import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../redux/store'

import Dashboard from '../Presentation/Dashboard'
import Header from '../Presentation/Header'
import CreateBudget from '../Presentation/CreateBudget'
import AboutPage from '../Presentation/About'
import EditBudget from '../Container/EditBudget'

import '../../App.scss'

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true}/>
          <Route path="/create" component={CreateBudget} />
          <Route path="/edit" component={EditBudget} />
          <Route path="/about" component={AboutPage} />
        </Switch>
        </div>
      </Router> 
    </Provider>
    );
}
 
export default AppRoutes;