import React from 'react';
import { ArrowRight, Rocket, Network, UserSquare2 } from 'lucide-react';
import { boostStats, reasons, reasonTags } from '../../mock/mock';

export const Boost = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-0" style={{background: 'radial-gradient(60% 60% at 50% 0%, #070708, transparent 70%)'}} />
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white flex items-center gap-3 leading-tight">
              <span className="text-purple-400">✳</span> Turn Visitors Into <br className="hidden md:block" />Customers
            </h3>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-6">
            <p className="text-neutral-400 max-w-md text-left lg:text-right">Gain a fresh perspective on your most important touchpoints. Let's connect today.</p>
            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold shadow-2xl shadow-purple-900/40 hover:scale-[1.02] transition-transform" style={{background: 'linear-gradient(90deg,#a45cff 0%,#e85ea0 45%,#ff8a3d 100%)'}}>
              BOOK A DISCOVERY CALL <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* BOOST tilted ribbon */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
          <div
            className="px-12 py-6 rounded-2xl shadow-2xl -rotate-6"
            style={{ background: 'linear-gradient(120deg,#a45cff 0%, #e85ea0 50%, #ff8a3d 100%)' }}
          >
            <span className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">BOOST</span>
          </div>
          <span className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            Your Sales
          </span>
        </div>

        {/* Stats row with world-map background */}
        <div className="relative  min-h-[500px]"  style={{
          backgroundSize:'cover',
          background:'radial-gradient(circle, #ff000000, #070708),url(https://framerusercontent.com/images/39wuT5nsIGkXLRtjPPerhQAhwI.webp?width=734&height=473)'
        }}>
         
          
          <div className="relative flex flex-warp justify-center gap-8 py-12">
            {boostStats.map((s, i) => (
              <div key={i} className="text-center   lg:text-left">
                <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">{s.number}</div>
                <p className="mt-3 text-sm text-neutral-300 max-w-[220px] mx-auto lg:mx-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const reasonIcons = [Rocket, Network, UserSquare2];

export const Reasons = () => {
  return (
    <section className="relative py-24"  >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 "
      style={
        {
          background:'radial-gradient(circle, rgba(25, 23, 23, 0.56),#070708),url(https://framerusercontent.com/images/xOz91BrLMifZXksr8HqpgNMqqEc.jpg?scale-down-to=1024&width=2000&height=1333)'
        }
      }
      >
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((r, i) => {
            const Icon = reasonIcons[i] || Rocket; // Fallback to Rocket if index exceeds array
            return (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.03]  transparent backdrop-blur-sm border border-white/10 text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">{r.title}</h3>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {reasonTags.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-5 py-2   transparent backdrop-blur-sm  rounded-full border border-white/15 text-neutral-200 text-sm bg-white/[0.02] hover:bg-white/[0.08] transition-colors">
              <span className="text-purple-400">✳</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};