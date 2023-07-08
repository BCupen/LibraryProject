import { doc, setDoc } from "firebase/firestore"
import db from "./firebase";

export const addUser = async (userID: string, username: string) =>{
 const userRef = doc(db, 'users', userID);
 return await setDoc(userRef, { username });
}

export interface BookProps{
    title: string,
    author: string,
    pages: number,
    hasRead: boolean
}