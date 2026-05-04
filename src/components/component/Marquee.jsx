import React from 'react';

const Marquee = ({ items, gradient = false }) => {
  const list = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-10 border-y border-white/5">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {list.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span
              className={`px-8 text-5xl md:text-7xl font-extrabold tracking-tight ${
                gradient
                  ? 'bg-gradient-to-b from-white via-neutral-300 to-neutral-600 bg-clip-text text-transparent'
                  : 'bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent'
              }`}
            >
              {item}
            </span>
            <span className="text-purple-400 text-3xl px-4">✳</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-33.3333%);} }`}</style>
    </div>
  );
};

export default Marquee;
