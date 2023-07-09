import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
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

    const toggleRead = async (bookId: string, hasRead: boolean) =>{
        const docRef = doc(db, `users/${userID}/books`, bookId);
        await setDoc(docRef, {hasRead}, {merge: true});
    }

    const deleteBook = async (bookId: string) =>{
        const docRef = doc(db, `users/${userID}/books`, bookId);
        await deleteDoc(docRef);
    }

    useEffect(()=>{
        const unsubscribe = onSnapshot(collection(db, 'users', userID, 'books'), (snapshot)=>{
            setBooks([...snapshot.docs.map((doc)=> doc.data())])
        })

        return ()=> unsubscribe();
    }, [user])

    return (
        <BookContext.Provider value={{books, addBook, toggleRead, deleteBook}}>
            {children}
        </BookContext.Provider>
    )

}