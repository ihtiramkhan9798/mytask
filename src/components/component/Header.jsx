import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'REVIEWS', href: '#reviews' },
  { name: 'BLOG', href: '#blog' },
  { name: 'CONTACT', href: '#contact' },
];

const Header = () => {
  const [active, setActive] = useState('HOME');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'backdrop-blur-md bg-black/50' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex flex-col leading-none font-extrabold text-2xl tracking-tight">
            <img className='max-w-[100px]'  src="https://framerusercontent.com/images/y7q7rzZbi8QBF6gX9yfO8AMg.webp" alt="" srcset="" />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center bg-[#0e0e10]/90 border border-white/10 rounded-full px-2 py-2 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {navLinks.map((l) => (
            <button
              key={l.name}
              onClick={() => setActive(l.name)}
              className={`relative px-5 py-2 text-[12px] font-semibold tracking-[0.15em] transition-colors duration-200 rounded-full ${
                active === l.name
                  ? 'text-white bg-gradient-to-b from-[#2a1a3a] to-[#1a0e2a] shadow-[inset_0_0_0_1px_rgba(168,85,247,0.4)]'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {l.name}
            </button>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:9735631729"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0e0e10] border border-white/10 text-white text-sm font-semibold hover:border-purple-400/40 transition-colors"
        >
          (973) 563-1729
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0c] border-t border-white/10 px-6 py-6 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => { setActive(l.name); setMobileOpen(false); }}
              className={`text-sm font-semibold tracking-[0.15em] py-2 ${active === l.name ? 'text-white' : 'text-neutral-400'}`}
            >
              {l.name}
            </a>
          ))}
          <a href="tel:9735631729" className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#141416] border border-white/10 text-white text-sm font-semibold">
            (973) 563-1729 <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
