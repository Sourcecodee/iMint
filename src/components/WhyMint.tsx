import React from 'react'

const WhyMint: React.FC = () => {
  return (
    <section id="services" className="py-10 sm:py-14 bg-[#fcfcf9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-stone-500">Why iMint</div>
            <h2 className="display-font text-[32px] sm:text-[38px] leading-[0.95] text-neutral-900 mt-3">Not a marketplace.<br />A small team that<br /><span className="italic">stands behind every device.</span></h2>
            <p className="text-[14px] leading-6 text-stone-600 mt-4 max-w-[520px]">
              We buy in the UK, test thoroughly, grade honestly, and answer on WhatsApp like humans. No dropshipping, no stock photos. What you see is what ships.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/447700900123" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-900 text-white px-6 py-3 text-[13px] font-semibold hover:bg-black">Chat before you buy</a>
              <a href="#faq" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-[13px] font-semibold text-neutral-900 hover:bg-stone-50">How we grade</a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'UK-sourced, UK-checked', desc: 'Every phone is tested for Face ID, display, battery, mics, cameras, and network before it leaves the UK.', meta: 'Checklist logged per IMEI' },
              { title: 'Honest grading', desc: 'Excellent = near flawless, Very Good = light signs, Good = visible wear but fully working. Photos match the grade.', meta: 'Ask for video on WhatsApp' },
              { title: 'Clear pricing', desc: 'No hidden swap fees. Price includes testing, cleaning, and tracked shipping. You approve the device first.', meta: 'Pay after verification' },
              { title: 'After-sales help', desc: 'Stuck with setup or iCloud? We stay on WhatsApp to help you transfer and settle in.', meta: 'Avg reply < 30 min' },
            ].map(card => (
              <div key={card.title} className="rounded-[20px] bg-white border border-stone-200 p-5 sm:p-6">
                <h3 className="text-[14px] font-semibold text-neutral-900">{card.title}</h3>
                <p className="text-[13px] leading-5 text-stone-600 mt-2">{card.desc}</p>
                <div className="mt-4 text-[11px] tracking-[0.08em] uppercase font-semibold text-stone-500">{card.meta}</div>
              </div>
            ))}
          </div>
        </div>

        {/* social proof strip */}
        <div className="mt-10 rounded-[24px] bg-white border border-stone-200 p-5 sm:p-6 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-[11px] font-semibold">AD</div>
              <div className="w-9 h-9 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center text-[11px] font-semibold text-white">TK</div>
              <div className="w-9 h-9 rounded-full bg-stone-300 border-2 border-white flex items-center justify-center text-[11px] font-semibold">SM</div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-neutral-900">Loved by first-time switchers & return customers</div>
              <div className="text-[12px] text-stone-600">“They sent a video, showed battery at 89%, and helped me set up eSIM on arrival.” — Chidi, Lagos</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-center">
            <div><div className="text-[20px] font-semibold text-neutral-900">4.8/5</div><div className="text-[11px] tracking-wide uppercase font-medium text-stone-500">WhatsApp feedback</div></div>
            <div className="w-px h-10 bg-stone-200" />
            <div><div className="text-[20px] font-semibold text-neutral-900">500+</div><div className="text-[11px] tracking-wide uppercase font-medium text-stone-500">Devices placed</div></div>
            <div className="w-px h-10 bg-stone-200" />
            <div><div className="text-[20px] font-semibold text-neutral-900">2021</div><div className="text-[11px] tracking-wide uppercase font-medium text-stone-500">Trading since</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMint
