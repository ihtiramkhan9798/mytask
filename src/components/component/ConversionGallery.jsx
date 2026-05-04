import React from 'react';

// "Conversion-Focused Design" gallery - mosaic of logo cards, badge tags, and review quotes
const Tag = ({ children, color = 'orange' }) => {
  // Map colors to hex or specific classes for Tailwind v4
  const bg = color === 'orange' ? 'bg-[#c98a3d]' : 'bg-[#7c5cd9]';
  return (
    <span className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-white font-semibold text-sm ${bg}`}>
      {children}
    </span>
  );
};

const LogoCard = ({ children, big = false }) => (
  <div className={`rounded-2xl bg-[#141416] border border-white/10 flex flex-col items-center justify-center ${big ? 'aspect-[4/3]' : 'aspect-square'} p-6`}>
    <div className="text-white/80 font-extrabold tracking-wide text-center leading-tight">{children}</div>
  </div>
);

const ReviewCard = ({ stars = 5, quote, author }) => (
  <div className="rounded-2xl bg-[#141416] border border-white/10 p-6 flex flex-col gap-4">
    <div className="text-yellow-400 text-xl tracking-wider">{'★'.repeat(stars)}</div>
    <p className="text-white text-base leading-snug">"{quote}"</p>
    {author && <p className="text-white/60 font-semibold text-sm">— {author}</p>}
  </div>
);

const StatCard = ({ stat, text }) => (
  <div className="rounded-2xl bg-[#141416] border border-white/10 p-6 flex items-center gap-4">
    <span className="text-yellow-400 text-4xl font-extrabold">{stat}</span>
    <span className="text-white/90 text-sm leading-snug">{text}</span>
  </div>
);

const ConversionGallery = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#070708]">
  <img src="https://framerusercontent.com/images/cZSRzq0SOyVgW917zjEMq8OWk.webp?width=1920&height=1080" alt="" srcset="" />
    </section>
  );
};

export default ConversionGallery;