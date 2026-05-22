import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, use, useEffect, useState } from 'react';
import { app } from '../firebase.com/firebase.config';
export const Authcontext = createContext()




const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUsre]= useState();
    const createUsr= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signIn=(email,password)=>{
        return  signInWithEmailAndPassword(auth,email,password)

    }

    const logout = ()=>{

        return signOut(auth)  
      }



    useEffect(()=>{
     const onauth=   onAuthStateChanged(auth,(careentuser)=>{

            setUsre(careentuser)
        })
        return()=>{
                onauth();
        }
    },[])
    const authData={
        user,
        setUsre,
        createUsr,
        logout,
        signIn,


    }

    return (
        

        <Authcontext value={authData} > {children}</Authcontext>
    );
};

export default AuthProvider;