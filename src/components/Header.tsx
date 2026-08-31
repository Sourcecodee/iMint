import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (target: string) => {
    setMenuOpen(false);
    if (target === 'home') {
      onHomeClick?.();
      navigate('/');
    } else if (target.startsWith('#')) {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (target.startsWith('category:')) {
      const cat = target.split(':')[1];
      navigate(`/?category=${cat}`);
      setTimeout(() => {
        document.getElementById('category-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcfcf9]/80 backdrop-blur-xl border-b border-stone-200/70">
      {/* top utility bar - very subtle, editorial */}
      <div className="hidden lg:block border-b border-stone-200/60 bg-stone-900 text-stone-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 flex items-center justify-between py-2 text-[11px] tracking-[0.14em] uppercase font-medium">
          <span className="opacity-80">Lagos • London sourcing • Inspected in the UK</span>
          <span className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              WhatsApp verified seller
            </span>
            <span className="opacity-60">Est. 2021</span>
          </span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px] sm:h-[68px]">
          {/* Left: Brand + Nav */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              onClick={() => onHomeClick?.()}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-[10px] bg-neutral-900 flex items-center justify-center">
                <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <span className="brand-font text-[26px] tracking-tight text-neutral-900">iMint</span>
              <span className="hidden sm:inline-flex items-center ml-1 pl-3 border-l border-stone-200 text-[11px] tracking-[0.16em] uppercase font-semibold text-stone-500">
                Apple Specialists
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-stone-600">
              <button onClick={() => handleNav('category:iphones')} className="hover:text-neutral-900 transition-colors">iPhones</button>
              <button onClick={() => handleNav('category:ipads')} className="hover:text-neutral-900 transition-colors">iPad</button>
              <button onClick={() => handleNav('category:apple-watches')} className="hover:text-neutral-900 transition-colors">Watch</button>
              <button onClick={() => handleNav('category:macbooks')} className="hover:text-neutral-900 transition-colors">MacBook</button>
              <button onClick={() => handleNav('#services')} className="hover:text-neutral-900 transition-colors">Services</button>
            </nav>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 text-[12px] leading-none">
              <div className="hidden xl:block text-right pr-4 border-r border-stone-200">
                <div className="font-semibold text-neutral-900">Need advice?</div>
                <div className="text-stone-500">Chat on WhatsApp — replies in minutes</div>
              </div>
              <a
                href="https://wa.me/447700900123"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-[13px] font-semibold hover:bg-black transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                WhatsApp Us
              </a>
            </div>

            {/* mobile menu */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 bg-white"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-stone-200 pt-4 grid gap-1">
            <button onClick={() => handleNav('category:iphones')} className="text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 text-sm font-medium">iPhones</button>
            <button onClick={() => handleNav('category:ipads')} className="text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 text-sm font-medium">iPads</button>
            <button onClick={() => handleNav('category:apple-watches')} className="text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 text-sm font-medium">Apple Watches</button>
            <button onClick={() => handleNav('category:macbooks')} className="text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 text-sm font-medium">MacBooks</button>
            <button onClick={() => handleNav('#services')} className="text-left px-3 py-2.5 rounded-lg hover:bg-stone-100 text-sm font-medium">Services</button>
            <a href="https://wa.me/447700900123" target="_blank" rel="noreferrer" className="mt-2 inline-flex justify-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-semibold">WhatsApp Us</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
