import React from 'react'

const JournalStrip: React.FC = () => {
  return (
    <section id="faq" className="py-10 sm:py-12 bg-white border-y border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-stone-500">Notes</div>
            <h3 className="display-font text-[24px] leading-none text-neutral-900 mt-2">Buying UK-used, made simple</h3>
            <p className="text-[13px] leading-6 text-stone-600 mt-3">Three quick answers we give every customer on WhatsApp.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
            {[
              { q: 'How do you grade?', a: 'We use three grades only. You’ll get photos and battery health before payment. No surprises.' },
              { q: 'What about warranty?', a: '14-day support for setup and hardware checks. We stay reachable, not a ticket queue.' },
              { q: 'Shipping to Nigeria?', a: 'Insured UK → Lagos dispatch. Tracking shared same day, with pickup or delivery options.' },
            ].map(item => (
              <div key={item.q} className="rounded-[20px] bg-[#fcfcf9] border border-stone-200 p-5">
                <div className="text-[13px] font-semibold text-neutral-900">{item.q}</div>
                <div className="text-[13px] leading-5 text-stone-600 mt-2">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JournalStrip
