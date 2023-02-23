
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {auth,db} from '../Firebase';
import {setDoc, doc} from 'firebase/firestore';



const Authcontext = createContext();

export function Authprovider({ children }) {

    const [user , setuser] = useState({})

    function signUp(email, password) {
         createUserWithEmailAndPassword(  auth,email, password);
        setDoc(doc(db, 'users', email),{
            savedShows:[]
        })
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function LogOut() {
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged (auth,  (currentuser)=>{
         setuser(currentuser)
         return () =>{
            unsubscribe()
         }
       }) 
    },[])

    return (
      
        <Authcontext.Provider value={{signUp, signIn, LogOut, user}}>
            {children}
        </Authcontext.Provider>
    )

}

export function UserAuth(){
    return useContext(Authcontext)
}