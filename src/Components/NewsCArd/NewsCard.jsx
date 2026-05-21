import React, { useState } from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

const NewsCard = ({news}) => {

const [ fulltext,setFulltext]=useState(false)


    const {image_url,title,author,thumbnail_url,details,rating,total_view}=news
    return (
        <div className='main-card w-139 h-full shadow-md p-2  ' >
            <div className='flex bg-base-300 p-3 gap-3  rounded-md'>
                <img src={author.img} alt="" className='w-10 h-10 rounded-full' />
               
                    <div>
                    <p className='text-[20px] text-[#545252] '>{author.name}</p>
                    <p  className='text-[16px]'>{author.published_date}</p>
                 </div>
                <div className="flex items-center  gap-3 text-[30px] ml-40">
                    <span className='cursor-pointer'><CiBookmark /></span>
                    <span className='cursor-pointer'><CiShare2 /></span>
                </div>
                
                
            </div>
           <div className="mt-3">
            <p className='text-[25px] text-[#4e4d4d]'>{title}</p>
            <div className='mt-3 '>
                <img src={image_url} alt=""  className='rounded-md'/>
            </div>
           <div className=''>
             <p className=" text-[16px] text-[#706F6F] h-40 overflow-y-auto scroll-smooth">{fulltext ?  details:details.slice(0,400)}

            </p>

            <span  onClick={()=>setFulltext(!fulltext)} className='cursor-pointer text-[20px] text-orange-400' >
                { 
                    fulltext?  "Show less":"Read More"
                }
                </
            span>
            
           </div>
           </div>
           <div className="border-b text-[#ada4a4] mt-4  w-[95%] mx-auto "></div>


           <div className="flex justify-between">
            <div className="flex gap-4 text-[19px] text-[#7e7979]">
            <div className="stras flex gap-1.5 text-[20px] text-orange-500">
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
            </div>
            <p>{rating.number}</p>
           </div>
           <div className="flex items-center gap-4 p-2">
           <span className='text-[25px] text-[#7e7979]'> <IoEyeSharp /></span>
            <p className='text-[20px] text-[#7e7979]'>{total_view}</p>
           </div>

           </div>

           
            
        </div>
    );
};

export default NewsCard;

