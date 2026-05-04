import React from 'react';
import { projects } from '../../mock/mock';

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-12">
        <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
          <span className="text-purple-400">✳</span> Case Studies
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Sneak Peek Of Our Work
        </h2>
      </div>

      <div className="relative">
        {/* Scroll Container */}
        <div className="flex gap-6 px-10 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {/* Mapping twice for infinite feel or extra content */}
          {[...projects, ...projects].map((p, i) => (
            <div 
              key={i} 
              className="shrink-0 snap-start w-[260px] md:w-[300px] aspect-[9/19] rounded-3xl overflow-hidden border border-white/10 relative group cursor-pointer hover:scale-[1.02] transition-transform"
            >
              {/* Image with self-closing tag fix */}
              <img 
                src={p.img} 
                alt={p.name} 
                loading="lazy" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              {/* Overlay Gradient - Fixed black/80 syntax */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold text-sm">{p.name}</p>
              </div>

              {/* Hover Arrow Icon - Fixed span and unicode syntax */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;