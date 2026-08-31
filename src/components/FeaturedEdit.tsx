import React from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from './ProductCard'

const FeaturedEdit: React.FC = () => {
  const { products } = useProducts()
  const picks = products.filter(p => ['Excellent', 'Very Good'].includes(p.condition)).slice(0, 4)
  // fallback ensure we have 4
  const featured = picks.length >= 4 ? picks : products.slice(0, 4)

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-stone-200">
      <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-[11px] tracking-[0.16em] uppercase font-semibold text-stone-500">Editor’s edit</div>
            <h2 className="display-font text-[28px] sm:text-[32px] leading-none text-neutral-900 mt-2">This week’s best value</h2>
            <p className="text-[13px] text-stone-600 mt-2 max-w-[560px]">Hand-picked for balance of price, battery health and condition. All UK-tested, with real photos before you pay.</p>
          </div>
          <Link to="/?category=iphones" className="text-[13px] font-semibold text-neutral-900 hover:underline">Shop all iPhones →</Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full border border-stone-200 bg-[#fcfcf9] px-3 py-1.5 font-medium text-stone-700">14-day support</span>
          <span className="rounded-full border border-stone-200 bg-[#fcfcf9] px-3 py-1.5 font-medium text-stone-700">Battery health disclosed</span>
          <span className="rounded-full border border-stone-200 bg-[#fcfcf9] px-3 py-1.5 font-medium text-stone-700">Tracked UK → NG shipping</span>
        </div>
      </div>
    </section>
  )
}

export default FeaturedEdit
