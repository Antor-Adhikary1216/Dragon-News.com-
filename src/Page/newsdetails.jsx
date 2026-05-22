import React, { use, useEffect, useState } from 'react';
import Headers from '../Components/Header/Headers';
import Rightaside from '../Components/HomelayoutGrid/Rightaside';
import NewsDetailsCard from '../Components/HomelayoutGrid/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const Newsdetails = () => {
    
    const data = useLoaderData()
    const [news , setNwes] =useState({})
    const {id} = useParams()
    useEffect(()=>{
        const newdata = data.find(singelnews=> singelnews.id == id)
        setNwes(newdata)
    }
    ,[data,id])
    console.log(news)
    
    return (
        <div className='w-285 mx-auto'>
                <Headers></Headers>
         <main className=" my-10 gap-5 grid grid-cols-12">
            <section className=" col-span-9 ">
                <h2 className='text-[22px]  font-semibold'>Dragon News</h2>
                <NewsDetailsCard  news={news} ></NewsDetailsCard>
            </section>
            <aside className="col-span-3">
                <Rightaside></Rightaside>
            </aside>
         </main>
          
        </div>
    );
};

export default Newsdetails; 