import * as firebase from 'firebase'

let config = {
  apiKey: "AIzaSyALDpA2Agm-4b9G1B6nyRPIEDpvHvZ04oM",
  authDomain: "financial-budgeting.firebaseapp.com",
  databaseURL: "https://financial-budgeting.firebaseio.com",
  projectId: "financial-budgeting",
  storageBucket: "financial-budgeting.appspot.com",
  messagingSenderId: "950138150712"
};;

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default}