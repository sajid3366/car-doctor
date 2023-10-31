import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";


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

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, fbProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.emai;
            const loggedUser = { email: userEmail };

            setUser(currentUser)
            console.log(currentUser);
            setLoading(false);
            // for token if usesr exists
            if (currentUser) {
                axios.post('https://car-doctor-server-jet-sigma.vercel.app/jwt', loggedUser, {withCredentials: true})
                    .then(res => {
                        console.log('token response',res.data);
                    })
                    .catch(err =>{
                        console.log(err);
                    })
            }
            else{
                axios.post('https://car-doctor-server-jet-sigma.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log(res.data);
                })
            }
        });
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        logIn,
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