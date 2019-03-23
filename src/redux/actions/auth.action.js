import {firebase, googleAuthProvider} from '../../firebase/connect'

export const firebaseLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}