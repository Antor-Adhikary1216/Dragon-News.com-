import React, { use } from 'react';
import { NavLink } from 'react-router';
import User from '../../assets/user.png'
import { Authcontext } from '../../Provider/AuthProvider';


const NavBar = () => {
 const {  user,logout} = use(Authcontext)
 const heandelLogout = ()=>{
  logout().then((loGout)=>{
    alert("Your Log out SuccessFully")
  })
console.log("user logout")
 }
    return (
        <div className='items-center flex '>
           
         <div>
             
            </div>

              <div className="nav">
                  <ul className=' nav flex gap-3  text-[#706F6F] text-[17px] font-normal'>
                   <NavLink to="/"> <li>Home</li></NavLink>
                   <NavLink> <li>About</li></NavLink>
                   <NavLink> <li>Career</li></NavLink>
                   
                </ul>
              </div>
              <div className=" logIn flex gap-2 md:relative left-96  ">
                <img src={User} alt="" />
                {
                  user? <NavLink><button onClick={heandelLogout} className='bg-[#403F3F] text-center p-2 w-35 text-white font-semibold'>Logout</button></NavLink> : <NavLink to="/auth/login"><button className='bg-[#403F3F] text-center p-2 w-35 text-white font-semibold'>Login</button></NavLink>
                }
               
                
            
              </div>
               
              


           
         
        </div>
    );
};

export default NavBar;