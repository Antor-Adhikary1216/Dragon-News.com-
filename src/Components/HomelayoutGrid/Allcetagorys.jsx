import React, { use } from 'react';
import LeftAside from './LeftAside';
import { NavLink } from 'react-router';

const catagorysPromis = fetch("/categories.json").then((res)=>res.json())


const Allcetagorys = () => {
    const catagorys = use(catagorysPromis)
   
    return (
        <div>
            <h2 className="font-black"> All Caterogy {}</h2>
            <div className="grid grid-cols-1  mt-5 ">
                {
                    catagorys.map((cat)=> (<div className=' catagory    text-[18px] font-semibold text-[#9F9F9F] p-5 hover:bg-base-300 hover:text-black'><NavLink key={cat.id} to={`cetagory/${cat.id}`} >{cat.name}</NavLink></div>))
                }
            </div>
        </div>
    );
};

export default Allcetagorys;