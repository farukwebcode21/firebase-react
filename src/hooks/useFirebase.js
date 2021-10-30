import { useEffect, useState } from "react"
import initializeAuthenaticfation from "../Firebase/firebase.init";
import {
    getAuth, signInWithPopup, GithubAuthProvider,
    signOut, GoogleAuthProvider, onAuthStateChanged
} from "firebase/auth";

initializeAuthenaticfation();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


   const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUserGoogel = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            setUser(result.user)
            })
            .catch(error => {
            setError(error.message)
        })

    }
    const signInUserGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
        })
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
                setUser(user)
            }
        })
    }, []);

    return {
        user,
        error,
        signInUserGoogel,
        logout,
        signInUserGithub,
    }

}
export default useFirebase;