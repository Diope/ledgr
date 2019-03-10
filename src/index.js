import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import CreateBudget from './components/CreateBudget'
import AboutPage from './components/About'
import EditBudget from './components/EditBudget'

const routes = (
  <Router>
    <div>
      <Route path="/" component={App} exact={true}/>
      <Route path="/create" component={CreateBudget} />
      <Route path="/edit" component={EditBudget} />
      <Route path="/about" component={AboutPage} />
    </div>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
