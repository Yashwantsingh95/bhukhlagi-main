import React from 'react';
import '../fonts.css';

const FarmToFeed = ({ toImageSrc = '/images/burger.png' }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#4a3428] font-serif bricolage-grotesque-regular">
                Bhukh
            </h1>

            {/* <div className='pb-2'>
                <img
                    src={toImageSrc}
                    alt="to"
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                />
                <div className='border-b-[10px] border-b-[#9d4300] border-solid rounded-[10px]'></div>
            </div> */}

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#4a3428] font-serif bricolage-grotesque-regular">
                Lagi
            </h1>
        </div>
    );
};

export default FarmToFeed;