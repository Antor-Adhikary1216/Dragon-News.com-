import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../Components/Header/Headers';
import LarestNews from '../Components/LetestNews/LarestNews';
import NavBar from '../Components/NavBar/NavBar';
import LeftAside from '../Components/HomelayoutGrid/LeftAside';
import Rightaside from '../Components/HomelayoutGrid/Rightaside';


const HomeLayouts = () => {
    return (
        <div className=''>
          
            <Headers></Headers>
     
            <LarestNews/>
       <section className='justify-center flex flex-col items-center mt-5'>
        <NavBar></NavBar>
       </section>
        

    
            
           <main className=' w-285 mx-auto mt-10 grid grid-cols-12 '>
            {/* Left section==> */}

            <section className='col-span-3'>
                <LeftAside></LeftAside>
            </section>


            {/* main section==> */}
            <section className='col-span-6'>
            <Outlet></Outlet>
            </section>

            {/* Right section==> */}
            <section className='col-span-3'>
                <Rightaside/>
            </section>
           </main>
            
        </div>
    );
};

export default HomeLayouts;