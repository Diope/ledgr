import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes, {history} from './components/Routes/AppRoutes';
import {firebase} from './firebase/connect'
import 'normalize.css';

import * as serviceWorker from './serviceWorker';
import { login, logout } from './redux/actions/auth.action';
import { store } from './redux/store';

let appRendered = false;
const renderApp = () => {
  if (!appRendered) {
    ReactDOM.render(<AppRoutes/>, document.getElementById('root'));
    appRendered = true;
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard')
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
