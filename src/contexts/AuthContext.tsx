import { createContext, useEffect, useState } from "react";
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext<any>({});

interface AuthContextProviderProps{
    children: React.ReactNode;
}

export default function AuthContextProvider({children}: AuthContextProviderProps){
    const [ user, setUser] = useState({});

    const googleSignin = () =>{
        signInWithPopup(auth, provider);
    };

    const googleSignOut = ()=>{
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((currentUser)=>{
            setUser(currentUser || {});
            console.log(user)
        })

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ googleSignin, googleSignOut, user }}>
            {children}
        </AuthContext.Provider>
    );
}