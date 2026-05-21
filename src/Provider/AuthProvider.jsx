import React, { createContext, use, useState } from 'react';
export const Authcontext = createContext()
const AuthProvider = ({children}) => {

    const [user,setUsre]= useState({
        name:"Antor",
        Email:"antor@ab.com"
    });
    const authData={
        user,
        setUsre

    }

    return (
        

        <Authcontext value={authData} > {children}</Authcontext>
    );
};

export default AuthProvider;