import React from 'react';
import Swim from '../../assets/swimming.png'
import Class from '../../assets/class.png'
import playground from '../../assets/playground.png'

const QZone = () => {
    return (
        <div>
            <div className="bg-base-300 mt-5 rounded-sm p-5">
                <h1 className='font-bold text-2xl'>Q-Zone</h1>
                <div className="img">
                    <img src={Swim}alt="" />
                    <img src={Class}alt="" />
                    <img src={playground}alt="" />
                </div>
            </div>
        </div>
    );
};

export default QZone;