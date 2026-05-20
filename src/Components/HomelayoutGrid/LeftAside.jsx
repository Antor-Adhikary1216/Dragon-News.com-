import React, { Suspense } from 'react';
import Allcetagorys from './Allcetagorys';

const LeftAside = (cat) => {
  
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><Allcetagorys/></Suspense>
          
        </div>
    );
};

export default LeftAside;