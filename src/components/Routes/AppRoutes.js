import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from '../App'
import Header from '../Presentation/Header'
import CreateBudget from '../Container/CreateBudget'
import AboutPage from '../Presentation/About'
import EditBudget from '../Container/EditBudget'

const AppRoutes = () => {
  return ( 
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
  );
}
 
export default AppRoutes;