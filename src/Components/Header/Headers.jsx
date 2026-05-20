import React from 'react';
import logo  from '../../assets/logo.png'
import { format,} from "date-fns";



const Headers = () => {
    return (
        <>
        <div  className=' justify-center flex flex-col items-center mt-10'>
          <div className='items-center justify-center flex flex-col'>
              <img src={logo} alt="" />
              <p className='text-[#706F6F]  text-[18px] mt-4'>Journalism Without Fear or Favour</p>
              <p className='font-semibold text-[#756b6b]'>{format(new Date() ," EEEE, MMMM dd , y")}</p>

          </div>

            
        </div>
       
        </>
        
    );
};

export default Headers;