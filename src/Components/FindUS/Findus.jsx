import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Findus = () => {
    return (
        <div>
            <h1 className='text-2xl mt-7 text-[#5c5b5b] font-semibold'>Find Us On</h1>
            <div className='border border-[#E7E7E7] rounded-sm mt-3'>
                {/* FaceBook */}
                <div className="card1 cursor-pointer  flex gap-2 items-center border-[#E7E7E7] border p-4">
                    <span className='text-[25px] text-blue-600 '><FaFacebook /></span>
                    <p className='text-[#706F6F] text-[17px]'>Facebook</p>
                </div>
                {/* Tewtter */}

                <div className="card2 cursor-pointer  border-[#E7E7E7] flex items-center gap-2  border p-4">
                    <span className='text-[25px]'><FaSquareXTwitter /></span>
                    <p className='text-[#706F6F] text-[17px]'>Twitter(X)</p>
                </div>
                {/* Instagram */}

                <div className="card3 cursor-pointer flex gap-2 items-center  border-[#E7E7E7] border p-4">
                    <span className='text-[25px] text-red-400'><FaSquareInstagram /></span>
                    <p className='text-[#706F6F] text-[17px]'>Instagram</p>
                </div>
            </div>
        </div>
    );
};

export default Findus;