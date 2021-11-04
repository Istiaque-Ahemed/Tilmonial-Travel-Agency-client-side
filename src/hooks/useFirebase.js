import { useState } from "react"
import initializeAuthentication from './../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsinGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        logout,
        signInUsinGoogle


    }


}
export default useFirebase;