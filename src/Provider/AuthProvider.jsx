import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, use, useEffect, useState } from 'react';
import { app } from '../firebase.com/firebase.config';
export const Authcontext = createContext()




const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUsre]= useState();
    const [loading , setLoading]=useState(true)
    const createUsr= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

        setLoading(true)
    }

    const updetedUser = (updetedData)=>{
        return updateProfile(auth.currentUser, updetedData );
    }

    const signIn=(email,password)=>{
        return  signInWithEmailAndPassword(auth,email,password)
        setLoading(true)

    }

    const logout = ()=>{

        return signOut(auth)  
        setLoading(true)
      }



    useEffect(()=>{
     const onauth=   onAuthStateChanged(auth,(careentuser)=>{

            setUsre(careentuser)
            setLoading(false)
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
        loading,
        setLoading,
        updetedUser


    }

    return (
        

        <Authcontext value={authData} > {children}</Authcontext>
    );
};

export default AuthProvider;