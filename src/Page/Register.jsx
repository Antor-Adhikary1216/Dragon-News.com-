import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
        <div>
                 <div className="hero   min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      {/* <h1 className="text-2xl font-bold">Login your account</h1> */}
    </div>
    <div className="card bg-base-100 w-188 p-5 max-w-sm  ">
         <h1 className="text-2xl text-center font-semibold mt-5">Create account Now!</h1>
      <div className="card-body">
        <form >
            <fieldset className="fieldset gap-4">
          <label className="label text-[17px] text-[#2c2a2a] font-semibold">Your Name </label>
          <input type="email" className="input p-3 " placeholder="Enter Your Name" />
          <label className="label text-[17px] text-[#2c2a2a] font-semibold">Photo URL </label>
          <input type="email" className="input p-3 " placeholder="Enter Your URL" />
          <label className="label text-[17px] text-[#2c2a2a] font-semibold">Email address </label>
          <input type="email" className="input p-3 " placeholder="Enter email address" />
          <label className="label text-[17px] text-[#2c2a2a] font-semibold">Create Password</label>
          <input type="password" className="input p-3" placeholder="Password" />
          <div className='flex items-center gap-2'>
            <input type="checkbox" defaultChecked className="checkbox" />
            <p>Accept Term & Conditions</p>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>you have a already Account ?<NavLink  to="/auth/login"> Login</NavLink></p>
        </fieldset>
        </form>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;