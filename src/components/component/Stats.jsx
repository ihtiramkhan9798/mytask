import React from 'react';
import { stats } from '../../mock/mock';

const Stats = () => {
  return (
    <section className="relative py-16">
      <div className="max-w-[1440px]    mx-auto px-6  flex flex-wrap  justify-center  gap-2">
        {stats.map((s, i) => (
          <div key={i} className="max-w-[250px]   -m-3   p-5  relative aspect-square flex flex-col items-center justify-center rounded-full" style={{background: 'rgba(155, 158, 180, 0.51)'}}>
            
            <div className="relative text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white">{s.number}</div>
              <div className="mt-2 text-sm text-neutral-400 font-medium">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
