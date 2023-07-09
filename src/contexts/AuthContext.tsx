import { createContext, useEffect, useState } from "react";
import { auth, provider } from '../firebase';
import { getAdditionalUserInfo, signInWithPopup, signOut } from "firebase/auth";
import { addUser } from "../utils";

export const AuthContext = createContext<any>({});

interface AuthContextProviderProps{
    children: React.ReactNode;
}

export default function AuthContextProvider({children}: AuthContextProviderProps){
    const [ user, setUser] = useState({});

    const googleSignin = () =>{
        provider.setCustomParameters({
            prompt: 'select_account',
        })
        signInWithPopup(auth, provider).then(async (result) =>{
            const user = result.user;

            const { isNewUser } = getAdditionalUserInfo(result) || { isNewUser: false };
            if( isNewUser ){
                await addUser(user.uid, user.displayName || '');
            }
        });
    };

    const googleSignOut = ()=>{
        signOut(auth);
        setUser({});
    }

    useEffect(()=>{ 
        console.log('unknown state')
        const unsubscribe = auth.onAuthStateChanged((currentUser)=>{
            if(currentUser){
                console.log('signed in');
                setUser(currentUser || {});
            }
            
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