import { auth } from '../services/firebase';

export const createUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
}

export const signUp = (email, password) => {
  return auth.signUpWithEmailAndPassword(email, password);
}
