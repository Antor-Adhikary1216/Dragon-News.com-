import React, { use } from 'react';
import { NavLink } from 'react-router';
import { Authcontext } from '../Provider/AuthProvider';

const Login = () => {
const {signIn} = use(Authcontext)
  const loginfeandeler=(evnt)=>{
    evnt.preventDefault()
const email = evnt.target.email.value;
const password = evnt.target.password.value;
console.log(email,password)
signIn(email,password).
then((singin)=>{
  const user =singin.user
  console.log(user)

})
.catch(error=>{
  const errorCode = error.code;
  const  errorMessage = error.message
  alert(errorCode,errorMessage)
})

  }
    return (
        <div className=''>
           <div className='login   '>

               {/* <h1 className='text-center text-2xl font-semibold text-[#403F3F]'>Login your account</h1> */}
              {/* login */}
              <div className="hero   min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      {/* <h1 className="text-2xl font-bold">Login your account</h1> */}
    </div>
    <div className="card bg-base-100 w-188 p-5 max-w-sm  ">
         <h1 className="text-2xl text-center font-semibold mt-5">Login your account</h1>
      <div className="card-body">
        <form onSubmit={loginfeandeler} >
            <fieldset className="fieldset gap-4">
          <label className="label text-[17px] text-[#2c2a2a] font-semibold">Email address </label>
          <input type="email" className="input p-3 " name='email'
           placeholder="Enter email address" />
          <label className="label text-[17px] text-[#2c2a2a] font-semibold">Password</label>
          <input type="password" className="input p-3" name='password'
           placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button  className="btn btn-neutral mt-4">Login</button>
          <p>Dont’t Have An Account ?<NavLink to="/auth/Register"> Register</NavLink></p>
        </fieldset>
        </form>
        
      </div>
    </div>
  </div>
</div>
              {/* login-end */}
              
           </div> 
        </div>
    );
};

export default Login;