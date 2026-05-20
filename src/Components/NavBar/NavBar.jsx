import React, { use } from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'


const NavBar = () => {
    return (
        <div className='items-center flex '>
           
         <div>

            </div>

              <div className="nav">
                  <ul className='flex gap-3 text-[#706F6F] text-[17px] font-normal'>
                   <NavLink> <li>Home</li></NavLink>
                   <NavLink> <li>About</li></NavLink>
                   <NavLink> <li>Career</li></NavLink>
                </ul>
              </div>
              <div className=" logIn flex gap-2 md:relative left-96  ">
                <img src={user} alt="" />
                <button className='bg-[#403F3F] text-center p-2 w-35 text-white font-semibold'>Login</button>
              </div>
               
              


           
         
        </div>
    );
};

export default NavBar;