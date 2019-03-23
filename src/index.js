import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/Routes/AppRoutes';
import {firebase} from './firebase/connect'
import 'normalize.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRoutes/>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logged')
  } else {
    console.log('Logged Owt');
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
