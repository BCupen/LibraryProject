import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import db from "../firebase"
import { AuthContext } from "./AuthContext";
import { BookProps } from "../utils";


export const BookContext = createContext<any>({});

interface AuthContextProviderProps{
    children: React.ReactNode;
}

export default function BookContextProvider({children}: AuthContextProviderProps){

    const [books, setBooks] = useState<any[]>([]);
    const userID = auth.currentUser?.uid || 'loading';
    const  { user } = useContext(AuthContext);

    const addBook = async (book: BookProps) =>{
        const docRef = doc(db, `users/${userID}/books`, `${book.title}-${book.author}`)
        await setDoc(docRef, {id:`${book.title}-${book.author}`, ...book});
    }

    useEffect(()=>{
        const unsubscribe = onSnapshot(collection(db, 'users', userID, 'books'), (snapshot)=>{
            setBooks([...snapshot.docs.map((doc)=> doc.data())])
        })

        return ()=> unsubscribe();
    }, [user])

    return (
        <BookContext.Provider value={{books, addBook}}>
            {children}
        </BookContext.Provider>
    )

}