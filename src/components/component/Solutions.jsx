import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { websiteOpsFeatures, supportFeatures } from "../../mock/mock"

export const Operations = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[5/4] border border-white/10" style={{background: 'linear-gradient(135deg, #2a1340 0%, #6b2bb3 50%, #ff6b8a 100%)'}}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <span className="text-white text-6xl font-extrabold">360°</span>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <p className="text-white text-sm italic">“Mindblowing Results.”</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Website Operations</h2>
          <ul className="mt-8 space-y-4">
            {websiteOpsFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-200">
                <span className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-purple-300" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-neutral-400">Keep your website running smoothly and performing at its best with our full-service maintenance solutions.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold border border-white/20 hover:bg-white/10 transition-colors">
            Hire Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export const Support = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Flexible Support, Scaled to You</h2>
          <ul className="mt-8 space-y-4">
            {supportFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-200">
                <span className="mt-1 w-5 h-5 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-pink-300" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-neutral-400">Receive actionable, strategic guidance across your entire digital landscape — from ads and analytics to growth — delivered by marketers who’ve led at the highest level.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold border border-white/20 hover:bg-white/10 transition-colors">
            Let&apos;s Chat <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden aspect-[5/4] border border-white/10" style={{background: 'linear-gradient(135deg, #2a1340 0%, #b53d8a 60%, #ff8a3d 100%)'}}>
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-6 opacity-30">
            {Array.from({length:9}).map((_,i)=>(<div key={i} className="rounded-xl bg-white/10"/>))}
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <p className="text-white text-sm italic">“Clear strategy. Real movement. Proven results.”</p>
          </div>
        </div>
      </div>
    </section>
  );
};
