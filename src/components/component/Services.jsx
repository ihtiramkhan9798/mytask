
import { ArrowUpRight, Search, FileText, Layout, Layout as Instagram } from 'lucide-react';
import React from 'react';
import { services } from '../../mock/mock';

const iconMap = { Search, FileText, Layout, Instagram };

const Services = () => {
  return (
    <>
    
     
    <section id="services" className="relative py-24">

        
      <div className="flex items-center   justy flex-col max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center rounded-full bg-white/10 py-3 px-3 gap-2 text-neutral-400 text-sm mb-3">
          <span className="text-purple-400">✳</span> Our Best Services
        </div>
        <div className="flex flex-col  gap-10 items-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center text-white leading-[1.05] tracking-tight">
            The Full Throttle Growth <br />  Engine
          </h2>
          <div  className='flex flex-col  items-center '>
            <p className=" px-70 text-center text-neutral-200 leading-relaxed">
              Let’s be real, most “full-service” agencies in the USA are just collections of freelancers in a trench coat. We’re different. We’ve built a coordinated strike team that hits your market from every conceivable angle. Whether we’re rebuilding your digital storefront from the studs up or hunting down the top spot on Google, our approach is relentless, data-backed, and dare we say a little bit obsessed.
            </p>
            <a href="#services" className="p-6 rounded-full mt-6 inline-flex items-center gap-2 text-white text-sm font-semibold border-b border-white/30 pb-1 hover:border-white" style={{background: 'linear-gradient(90deg,#a45cff 0%,#e85ea0 45%,#ff8a3d 100%)'}}>
              View All Services <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={i} className="group relative rounded-3xl p-8 border border-white/10 overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform" style={{background: 'radial-gradient(circle at 30% 0%, rgba(120,60,200,0.55), rgba(40,15,70,0.7) 60%, rgba(15,8,25,0.85) 100%)'}}>
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-20">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-neutral-300/90 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-white text-xs tracking-[0.15em] font-semibold">
                  LEARN MORE
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"><ArrowUpRight className="w-3.5 h-3.5" /></span>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section></>
  );
};

export default Services;
