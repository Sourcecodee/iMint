import React from 'react';

interface FooterProps {
  onCategoryClick?: (categoryId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onCategoryClick }) => {
  return (
    <footer className="bg-[#0f0f0f] text-stone-300 border-t border-stone-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr_0.8fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] bg-white flex items-center justify-center">
                <svg className="w-[18px] h-[18px] text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <span className="brand-font text-[24px] text-white">iMint</span>
              <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-stone-400 border-l border-stone-700 pl-3 ml-1">London • Lagos</span>
            </div>
            <p className="text-[13.5px] leading-6 text-stone-400 mt-4 max-w-[560px]">
              A small team connecting Nigeria with carefully vetted UK Apple stock. We test, photograph, and grade every device — then stay on WhatsApp until you’re settled.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[12px]">
              <span className="rounded-full border border-stone-700 px-3 py-1">UK tested</span>
              <span className="rounded-full border border-stone-700 px-3 py-1">Battery disclosed</span>
              <span className="rounded-full border border-stone-700 px-3 py-1">Tracked shipping</span>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/447700900123" target="_blank" rel="noreferrer" className="rounded-full bg-white text-neutral-900 px-5 py-2.5 text-[13px] font-semibold hover:bg-stone-100">WhatsApp Us</a>
              <a href="mailto:hello@imint.com" className="rounded-full border border-stone-700 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white/10">hello@imint.com</a>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] tracking-[0.14em] uppercase font-semibold text-stone-400">Browse</h4>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li><button onClick={() => onCategoryClick?.('iphones')} className="hover:text-white text-stone-300">iPhones</button></li>
              <li><button onClick={() => onCategoryClick?.('ipads')} className="hover:text-white text-stone-300">iPads</button></li>
              <li><button onClick={() => onCategoryClick?.('apple-watches')} className="hover:text-white text-stone-300">Apple Watches</button></li>
              <li><button onClick={() => onCategoryClick?.('macbooks')} className="hover:text-white text-stone-300">MacBooks</button></li>
              <li><button onClick={() => onCategoryClick?.('airpods')} className="hover:text-white text-stone-300">AirPods</button></li>
              <li><button onClick={() => onCategoryClick?.('chargers')} className="hover:text-white text-stone-300">Chargers & Cables</button></li>
              <li><button onClick={() => onCategoryClick?.('cases')} className="hover:text-white text-stone-300">Cases & Protection</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] tracking-[0.14em] uppercase font-semibold text-stone-400">Visit</h4>
            <div className="mt-4 text-[13.5px] leading-6 text-stone-300">
              <div className="font-medium text-white">By appointment</div>
              <div className="text-stone-400">Lagos dispatch hub • UK sourcing office, London</div>
              <div className="mt-4 font-medium text-white">Hours</div>
              <div className="text-stone-400">Mon–Sat, 10am–6pm WAT<br />WhatsApp replies within the hour</div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-[12px] text-stone-500">
          <div>© {new Date().getFullYear()} iMint. All rights reserved. UK-used Apple specialists.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-stone-300">Privacy</a>
            <a href="#" className="hover:text-stone-300">Terms</a>
            <a href="#" className="hover:text-stone-300">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
