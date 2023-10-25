import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const facebookLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, fbProvider);
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        creatUser,
        googleLogin,
        facebookLogin,
        logOut
        

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;