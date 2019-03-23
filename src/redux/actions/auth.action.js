import {firebase, googleAuthProvider, twitterAuthProvider} from '../../firebase/connect'
import { LOGOUT, LOGIN } from '../actionTypes';

export const login = (uid) => ({
  type: LOGIN,
  uid
})

export const googleAuth = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const twitterAuth = () => {
  return () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider)
  }
}

// ----

export const logout = () => ({
  type: LOGOUT
})

export const firebaseLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  }
}