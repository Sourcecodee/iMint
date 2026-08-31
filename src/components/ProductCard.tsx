import React from 'react';
import { Link } from 'react-router-dom';
import { getProductImage } from '../utils/iphoneImageMapper';

export interface Product {
  id: number;
  name: string;
  image: string;
  condition: 'Excellent' | 'Very Good' | 'Good';
  discount: number;
  storage?: string;
  currentPrice: number;
  originalPrice: number;
  seller: string;
  compatible?: string;
  category: string; // Required category field
  // iPhone-specific properties
  display?: string;
  chip?: string;
  ram?: string;
  cameras?: {
    rear: string;
    front: string;
  };
  battery?: string;
  releaseYear?: number;
  description?: string;
  // Additional properties
  color?: string;
  status?: string;
}

interface ProductCardProps {
  product: Product;
  isCategoryView?: boolean;
  currentCategory?: string;
  onProductClick?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, currentCategory }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Get the appropriate image for products
  const getImageSrc = () => {
    return getProductImage(product);
  };

  const cardContent = (
    <div className="group bg-white border border-stone-200/80 rounded-[22px] sm:rounded-[20px] overflow-hidden shadow-[0_4px_18px_rgba(0,0,0,0.04)] sm:shadow-none hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-stone-300 transition-all duration-300">
      {/* Image — larger on mobile for thumb appeal */}
      <div className="relative bg-[#f6f6f4] aspect-[1/1] sm:aspect-[1/1] overflow-hidden">
        <img
          src={getImageSrc()}
          alt={product.name}
          className="w-full h-full object-contain p-4 sm:p-6 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            (target.parentElement as HTMLElement).innerHTML = `
              <div class="w-full h-full flex items-center justify-center">
                <div class="w-20 h-20 rounded-xl bg-stone-200 flex items-center justify-center text-stone-500">No image</div>
              </div>
            `;
          }}
        />
        {/* Badges — tighter on mobile, still legible */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5">
          <span
            className={`px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.05em] uppercase border backdrop-blur bg-white/95 shadow-sm ${
              product.condition === 'Excellent'
                ? 'border-emerald-200 text-emerald-700'
                : product.condition === 'Very Good'
                ? 'border-stone-200 text-stone-700'
                : 'border-amber-200 text-amber-700'
            }`}
          >
            {product.condition}
          </span>
        </div>
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 rounded-full bg-neutral-900 text-white px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-wide shadow-md">
          –{product.discount}%
        </div>
        {/* Mobile-only quick tap hint - subtle */}
        <div className="absolute bottom-2.5 right-2.5 sm:hidden w-7 h-7 rounded-full bg-white/90 backdrop-blur border border-stone-200 flex items-center justify-center shadow-sm">
          <svg className="w-3.5 h-3.5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h4 className="text-[13px] sm:text-[14px] font-semibold leading-[1.35] text-neutral-900 line-clamp-2 min-h-[36px] sm:min-h-[40px]">{product.name}</h4>

        <div className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-[12px] leading-5 text-stone-500 line-clamp-1">
          <span className="w-1 h-1 rounded-full bg-stone-300 hidden sm:inline-block" />
          <span className="truncate">
            {product.storage ? `${product.storage} • ${product.ram || 'Verified'}` : product.ram ? product.ram : product.compatible || product.chip || 'Verified UK stock'}
          </span>
        </div>

        <div className="mt-2.5 sm:mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <div className="text-[16px] sm:text-[15px] font-bold tracking-tight text-neutral-900">{formatPrice(product.currentPrice)}</div>
          <div className="text-[11px] sm:text-[12px] text-stone-400 line-through">{formatPrice(product.originalPrice)}</div>
        </div>
        <div className="text-[10.5px] sm:text-[11px] text-stone-500 mt-0.5 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
          Sold by {product.seller}
        </div>

        {/* CTA — full width on mobile for thumb, pill on desktop */}
        <div className="mt-3 sm:mt-3 pt-3 border-t border-stone-100 sm:border-0 sm:pt-0">
          {/* Mobile: full width primary */}
          <span className="flex sm:hidden w-full items-center justify-center gap-1.5 rounded-full bg-neutral-900 text-white px-3 py-[10px] text-[13px] font-semibold active:scale-[0.98] transition-transform">
            View
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          {/* Desktop: subtle pill */}
          <div className="hidden sm:flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#fcfcf9] px-3 py-1.5 text-[12px] font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-colors">
              View details
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-[11px] font-medium text-stone-500">Tap for specs</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Always link to dedicated product page — requirement: opens in different page, not homepage state
  return (
    <Link
      to={`/product/${product.id}${currentCategory ? `?category=${currentCategory}` : ''}`}
      className="block active:scale-[0.98] transition-transform duration-150"
    >
      {cardContent}
    </Link>
  );
};

export default ProductCard;
