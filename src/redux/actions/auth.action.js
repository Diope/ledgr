import {firebase, googleAuthProvider, twitterAuthProvider} from '../../firebase/connect'

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

export const firebaseLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  }
}