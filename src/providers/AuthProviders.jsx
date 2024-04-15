import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase-config";

 export const AuthContext = createContext(null);

 

 const auth = getAuth(app);



const AuthProviders = 
({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password )=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const github = () =>{
        return signInWithPopup(auth, githubProvider )
    }

    const singIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        setLoading(true);
      return  signOut(auth);
     
    }


    useEffect( ()=>{
     const unSubscribe =   onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
            
        }
    } , [])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        googleLogin,
        github
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;