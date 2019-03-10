import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../redux/store'

import App from '../App'
import Header from '../Presentation/Header'
import CreateBudget from '../Container/CreateBudget'
import AboutPage from '../Presentation/About'
import EditBudget from '../Container/EditBudget'

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
        <Header />
        <Switch>
          <Route path="/" component={App} exact={true}/>
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