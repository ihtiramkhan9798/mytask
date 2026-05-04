import React from 'react';
import { ArrowRight } from 'lucide-react';
import { aboutFeatures } from '../../mock/mock';

const Bubble = ({ title, desc, color, tail = 'br' }) => {
  // tail position: bl, br, tl, tr
  const tailMap = {
    br: 'after:bottom-[-18px] after:right-12 after:border-t-[20px] after:border-l-[18px]',
    bl: 'after:bottom-[-18px] after:left-12 after:border-t-[20px] after:border-r-[18px]',
    tr: 'after:top-[-18px] after:right-12 after:border-b-[20px] after:border-l-[18px]',
    tl: 'after:top-[-18px] after:left-12 after:border-b-[20px] after:border-r-[18px]',
  };

  const isPink = color === 'pink';
  const bg = isPink ? '#ff6b8a' : '#7c5cd9';
  
  // Tailwind v4 requires exact matches for dynamic classes; 
  // using inline styles for the tail border color to ensure it works perfectly.
  const tailDirectionStyle = tail.startsWith('b') 
    ? { borderTopColor: bg } 
    : { borderBottomColor: bg };

  return (
    <div
      className={`relative p-7 rounded-[28px] text-white after:content-[''] after:absolute after:border-l-transparent after:border-r-transparent ${tailMap[tail]}`}
      style={{ background: bg }}
    >
      <div className="absolute inset-0 pointer-events-none" style={tailDirectionStyle} />
      <h4 className="text-xl font-extrabold mb-3">{title}</h4>
      <p className="text-sm leading-relaxed text-white/90">{desc}</p>
      
      {/* Visual Tail Element */}
      <div 
        className={`absolute w-0 h-0 border-l-[18px] border-r-[18px] border-l-transparent border-r-transparent ${tailMap[tail].split(' ')[0]} ${tailMap[tail].split(' ')[1]}`}
        style={tailDirectionStyle}
      />
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden ">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-0 items-center">
       <div className="relative flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/PxRhqFuVPHYeB6S8CNV2ylqx3SM.png"
            alt="Team behind the results\"
            loading="lazy\"
            className="w-full max-w-md object-contain\"
          />
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
            <span className="text-purple-400">✳</span> Our Story
          </div>
          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            The Team Behind <br /> the Results
          </h2>
          <p className="mt-6 text-neutral-200 leading-relaxed">
            With a powerhouse team of over 50 specialists based in the United States, we provide cutting-edge digital marketing strategies to a diverse portfolio of 400+ American businesses. As the top-rated SEO agency on Google, we maintain a stellar 5-star rating backed by more than 450 verified client reviews.
          </p>
          <p className="mt-4 text-neutral-200 leading-relaxed">
            Statistics are great, but what actually matters is your ROI. Our mission is straightforward: we amplify your online visibility to directly increase your revenue. We don't just promise results; we deliver them.
          </p>
        </div>
      </div>

      {/* End-to-End Solutions */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-start mt-32">
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">End-to-End Solutions</h3>
          <p className="mt-6 text-neutral-200 leading-relaxed">
            Our methodology, claiming to master every facet of the search landscape is a big swing, but it's one we knock out of the park daily. We operate like a pack of wolves, attacking your competition from every possible flank. We leave no stone unturned.
          </p>
          <p className="mt-4 text-neutral-200 leading-relaxed">
            From deep-layer technical SEO and content marketing to precision on-page optimization, we do it all. As leaders in the American SEO space, we're already deploying the next-gen strategies other agencies are still trying to figure out.
          </p>
        </div>
    <img src="https://framerusercontent.com/images/P5Phd2iqkZFkXruboeXHhT8Pgg.png" alt="" srcset="" />
            </div>

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 mt-16 flex justify-center">
        <a href="#contact" className="inline-flex items-center gap-3 px-20 py-6 rounded-full text-white font-bold tracking-wide shadow-2xl shadow-purple-900/40 hover:scale-[1.03] transition-transform" style={{background: 'linear-gradient(90deg,#a45cff 0%,#e85ea0 45%,#ff8a3d 100%)'}}>
          GET 30 MIN FREE CONSULTATION <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default About;