import React from 'react';
import { ArrowRight } from 'lucide-react';


const Hero = () => {
 const svgDataUri = `data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V0C4.477 0 0 4.477 0 10v30zm22 0c-5.523 0-10-4.477-10-10V0c5.523 0 10 4.477 10 10v30z' fill='%23171717' fill-rule='evenodd'/%3E%3C/svg%3E`;


  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 overflow-hidden   ">
    
  
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-[#a45cff]/30 blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#ff5e8a]/20 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px'}} />
  
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <h2 className="text-white/95 font-extrabold text-4xl md:text-5xl tracking-tight" style={{fontFamily: 'Inter, sans-serif'}}>
            STOP SEARCHING
          </h2>
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="bg-gradient-to-b from-blue via-neutral-300 to-neutral-500 bg-clip-text text-transparent">YOU’VE FOUND THE TOP DIGITAL MARKETING AGENCY</span>
          </h1>


   <div className =" pl-7 flex m-auto flex-col bg-[#0e0e10] border border-white/10 rounded-full "> 
          <div className=" inline-flex items-center gap-3 border-b border-white/10 pl-4 pr-2 py-2">
            <span className="text-xs font-semibold tracking-[0.18em] text-white">OUR CLIENTS LOVE WORKING WITH US</span>
          </div>
          <div className="mt-3 flex items-center gap-3 text-white">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </div>
            <div>
              <div className="flex gap-0.5 text-yellow-400 text-sm">★★★★★</div>
              <p className="text-sm font-semibold">267+ 5 Star Reviews</p>
            </div>
          </div>
</div>
        </div>

        <div className="relative z-10 lg:pl-10">
          <p className="text-neutral-300 text-lg leading-relaxed max-w-xl">
            Most agencies are great at sending monthly reports full of “vanity metrics” that don’t pay the bills. We’re different. We operate like a pack of wolves—calculated, aggressive, and hitting your market from every possible angle to ensure your competitors never see you coming.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full text-white font-semibold tracking-wide shadow-lg shadow-purple-900/40 hover:scale-[1.02] transition-transform"
            style={{ background: 'linear-gradient(90deg,#a45cff 0%,#e85ea0 50%,#ff8a3d 100%)' }}
          >
            Book a Call With Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
