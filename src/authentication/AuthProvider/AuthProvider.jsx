import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./../../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
   return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
  };

  const logOut = () => {
    setLoading(true)
   return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });


    return () => unsubscribe();
  }, []);

  const authUser = {
    user,
    createUser,
    loginUser,
    googleSignIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
