import React from 'react';
import Login from '../Page/Login';
import Register from '../Page/Register';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';

const AuthLayot = () => {
    return (
        <div className='bg-[#F3F3F3]  min-h-screen'>
            <div className="w-285 mx-auto py-4  ">
                <header>
                <NavBar/>
            </header>
            <main className='mt-4'>
                
                <Outlet></Outlet>
            </main>
           
            </div>
            
            
        </div>
    );
};

export default AuthLayot;
