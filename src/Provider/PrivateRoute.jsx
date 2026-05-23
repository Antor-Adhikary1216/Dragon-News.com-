import React, { use } from 'react';
import { Authcontext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Page/Loading';

const PrivateRoute = ({children}) => {

    const location = useLocation()
    // console.log(location)
  
const {user,loading} = use(Authcontext)
// .log(user)

if(loading){
    return  <Loading/>
    
}

if(user && user?.email){
    return children
}else{
    return    <Navigate state={location.pathname} to="/auth/login"></Navigate>
}
    

    
return children;
};

export default PrivateRoute;