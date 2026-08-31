import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#fcfcf9] pt-[88px] sm:pt-[96px] lg:pt-[104px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial hero - split, paper tone, huge serif, human */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-6 items-start py-8 sm:py-10 lg:py-12">
          {/* Left copy */}
          <div className="pt-2 lg:pt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] tracking-[0.12em] uppercase font-semibold text-stone-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Now available — iPhone 17 family • UK inspected
            </div>

            <h1 className="display-font text-[40px] sm:text-[54px] lg:text-[64px] font-normal text-neutral-900 mt-5 leading-[0.9]">
              Apple, <span className="italic font-normal">properly</span>
              <br />
              <span className="text-stone-500">sourced.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] sm:text-[16px] leading-7 text-stone-600">
              UK-used iPhones, iPads, Watches and MacBooks — hand-checked in the UK, priced clearly, and ready to ship to Nigeria. No gimmicks. Just honest condition grades and real photos.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                to="/?category=iphones"
                onClick={() => setTimeout(() => document.getElementById('category-section')?.scrollIntoView({ behavior: 'smooth' }), 100)}
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-7 py-3.5 text-[14px] font-semibold hover:bg-black transition-colors"
              >
                Browse iPhones
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <a
                href="https://wa.me/447700900123"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-[14px] font-semibold text-neutral-900 hover:bg-stone-50 transition-colors"
              >
                Ask a human on WhatsApp
              </a>
            </div>

            {/* Proof row */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-[520px] border-t border-stone-200 pt-6">
              <div>
                <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-stone-500">Condition</div>
                <div className="text-[13px] font-semibold text-neutral-900 mt-1">Graded honestly</div>
                <div className="text-[12px] text-stone-500">Excellent / Very Good / Good</div>
              </div>
              <div className="border-l border-stone-200 pl-4">
                <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-stone-500">Shipping</div>
                <div className="text-[13px] font-semibold text-neutral-900 mt-1">UK → Lagos</div>
                <div className="text-[12px] text-stone-500">Tracked & insured</div>
              </div>
              <div className="border-l border-stone-200 pl-4">
                <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-stone-500">Support</div>
                <div className="text-[13px] font-semibold text-neutral-900 mt-1">After-sales help</div>
                <div className="text-[12px] text-stone-500">WhatsApp, quick replies</div>
              </div>
            </div>
          </div>

          {/* Right visual - editorial card */}
          <div className="relative">
            <div className="rounded-[24px] bg-white border border-stone-200 p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="rounded-[16px] bg-[#f5f5f2] overflow-hidden relative aspect-[4/3] sm:aspect-[1.15/1]">
                <img
                  src="/assets/iPhone/iPhone 17/iPhone-17-Pro-Max.jpeg"
                  alt="iPhone 17 Pro Max"
                  className="absolute inset-0 w-full h-full object-contain p-6 sm:p-8"
                  loading="eager"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white border border-stone-200 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-neutral-900 shadow-sm">
                  UK Used • Verified
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <div className="rounded-2xl bg-white border border-stone-200 px-4 py-3 shadow-sm">
                    <div className="text-[11px] tracking-[0.12em] uppercase font-semibold text-stone-500">Starting from</div>
                    <div className="text-[16px] font-semibold text-neutral-900">₦650,000</div>
                    <div className="text-[11px] text-stone-500">iPhone 16 • 128GB • Excellent</div>
                  </div>
                  <div className="hidden sm:flex w-12 h-12 rounded-full bg-neutral-900 text-white items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-3">
                {[
                  { k: '500+', v: 'devices sold' },
                  { k: '4.8/5', v: 'avg. feedback' },
                  { k: '48h', v: 'avg. dispatch' },
                ].map(s => (
                  <div key={s.k} className="rounded-2xl bg-[#fcfcf9] border border-stone-200 px-3 py-3 text-center">
                    <div className="text-[16px] font-semibold tracking-tight text-neutral-900">{s.k}</div>
                    <div className="text-[11px] tracking-[0.06em] uppercase font-medium text-stone-500">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* tiny caption like a print footnote */}
            <div className="mt-3 text-center text-[11px] tracking-[0.08em] uppercase font-medium text-stone-500">
              Photos are of actual grading stock • Lagos pickup available
            </div>
          </div>
        </div>

        {/* Subtle trust bar */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-stone-200 py-3 text-[12px] text-stone-600">
          <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neutral-900" /> Every device tested & data-wiped</span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>Battery health disclosed</span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>14-day support window</span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>Pay on verification available</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
