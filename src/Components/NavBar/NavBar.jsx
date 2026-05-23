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
// .log("user logout")
 }
    return (
        <div className='items-center flex '>
           
         <div>
             
            </div>

             <div className="flex ">
               <div className="nav items-center ">
                  <ul className=' nav flex gap-3  text-[#706F6F] text-[17px] font-normal'>
                   <NavLink to="/"> <li>Home</li></NavLink>
                   <NavLink> <li>About</li></NavLink>
                   <NavLink> <li>Career</li></NavLink>
                   
                </ul>
              </div>
             <div className=" relative left-77">
               <div className=" logIn  gap-2 w-10 items-center   object-cover flex ">
                <img className=' rounded-full' src={`${user ? user.photoURL:User}`} alt="" />
                {
                  user? <NavLink><button onClick={heandelLogout} className='  bg-[#403F3F] text-center p-2 w-35 text-white font-medium rounded-md  hover:hover: -bg-linear-300bg-transparent
    hover:shadow-lg '>LogOut</button></NavLink> : <NavLink to="/auth/login">
      
      
      <button className='bg-[#403F3F] rounded-md hover: -bg-linear-300bg-transparent text-center p-2 w-35 text-white font-semibold'>LogIn</button></NavLink>
                }
              </div>
             </div>
             </div>
               
              


           
         
        </div>
    );
};

export default NavBar;