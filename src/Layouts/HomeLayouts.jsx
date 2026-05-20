import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../Components/Header/Headers';
import LarestNews from '../Components/LetestNews/LarestNews';


const HomeLayouts = () => {
    return (
        <div>
          
            <Headers>
         <LarestNews></LarestNews>
            </Headers>
           

    
            
           <main>
            {/* Left section==> */}

            <section>

            </section>


            {/* main section==> */}
            <section>
            <Outlet></Outlet>
            </section>

            {/* Right section==> */}
            <section>

            </section>
           </main>
            
        </div>
    );
};

export default HomeLayouts;