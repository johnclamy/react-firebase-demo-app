import { auth } from './firebase'

// Sign Up
export const createUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

// Sign In
export const signInUser = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

// Sign Out
export const signOutUser = () => auth.signOut()

// Password Reset
export const resetUserPassword = (password) =>
  auth.currentUser.updatePassword(password)
