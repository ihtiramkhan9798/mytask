import React from 'react';
import { stats } from '../../mock/mock';

const Stats = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 -mt-20 flex flex-wrap justify-center  gap-4">
    {[
      'https://framerusercontent.com/images/Wk9abNC6wrvbpFTvRBQEbZlHpBQ.svg',
      'https://framerusercontent.com/images/OiqLu1V7BGzaa3VAJAPFnyKivA.svg',
      'https://framerusercontent.com/images/wOIVYQVwYZeRiPZwWU7LtqCVok.svg',
      'https://framerusercontent.com/images/P1K0vbIuFtj6qDOLBaFZJ5Vt0Zs.svg',
      'https://framerusercontent.com/images/ylygHIGZLGQWdyEuzHn11SJt74.svg',
    ].map((src, i) => (
      <div 
        key={i} 
        
        className="  h-20 bg-white/[0.04] border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm px-4" 
        style={
            {
      width:'fit-content '
      }
        }
      >
        <img 
          src={src} 
          alt="partner" 
          loading="lazy" 
          /* 2. Changed max-h to w-auto and max-w-full to respect parent container */
          className="max-h-8 w-auto max-w-[100%] object-contain opacity-90" 
        />
      </div>
    ))}
  </div>
  );
};

export default Stats;