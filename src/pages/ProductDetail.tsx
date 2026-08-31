import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Product } from '../components/ProductCard';
import { getProductImage } from '../utils/iphoneImageMapper';
import { getWhatsAppUrl } from '../config/whatsappConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

interface ProductDetailProps {
  productId?: string;
  category?: string | null;
  onBackToCategory?: () => void;
  onBackToCategories?: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  productId,
  category: propCategory,
  onBackToCategory,
  onBackToCategories,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getProduct, products } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  const category = propCategory || searchParams.get('category');
  const currentProductId = productId || id;

  useEffect(() => {
    if (currentProductId) {
      const productData = getProduct(parseInt(currentProductId));
      setProduct(productData || null);
    }
  }, [currentProductId, getProduct]);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product, products]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);

  const getConditionStyles = (condition: string) => {
    switch (condition) {
      case 'Excellent':
        return 'border-emerald-200 bg-emerald-50 text-emerald-800';
      case 'Very Good':
        return 'border-stone-200 bg-stone-50 text-stone-700';
      case 'Good':
        return 'border-amber-200 bg-amber-50 text-amber-800';
      default:
        return 'border-stone-200 bg-stone-50 text-stone-700';
    }
  };

  const handleWhatsAppContact = () => {
    if (!product) return;
    const url = getWhatsAppUrl(product.name, formatPrice(product.currentPrice), product.ram, product.storage);
    window.open(url, '_blank');
  };

  const handleBack = () => {
    if (onBackToCategory) return onBackToCategory();
    if (onBackToCategories) return onBackToCategories();
    if (category) navigate(`/?category=${category}`);
    else navigate(-1);
  };

  const getImageSrc = () => (product ? getProductImage(product) : '/assets/others/iPhone.jpeg');

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fcfcf9]">
        <Header />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-16 text-center">
          <div className="mx-auto max-w-md rounded-[24px] bg-white border border-stone-200 p-10">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">—</div>
            <h2 className="display-font text-2xl text-neutral-900">Product not found</h2>
            <p className="text-sm text-stone-600 mt-2">The item you’re looking for may have sold or moved.</p>
            <Link to="/" className="mt-6 inline-flex rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black">Back to store</Link>
          </div>
        </div>
      </div>
    );
  }

  const isStandaloneRoute = !!id;

  return (
    <div className="min-h-screen bg-[#fcfcf9]">
      {isStandaloneRoute ? <Header /> : null}

      <div className={isStandaloneRoute ? 'pt-[88px] sm:pt-[104px]' : ''}>
        {/* Breadcrumbs */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <nav className="flex items-center gap-2 text-[12px] text-stone-500">
            <Link to="/" className="hover:text-neutral-900">Home</Link>
            <span className="text-stone-300">/</span>
            {category ? (
              <>
                <Link to={`/?category=${category}`} className="hover:text-neutral-900 capitalize">{category.replace('-', ' ')}</Link>
                <span className="text-stone-300">/</span>
              </>
            ) : (
              <>
                <span className="capitalize">{product.category.replace('-', ' ')}</span>
                <span className="text-stone-300">/</span>
              </>
            )}
            <span className="text-neutral-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <button
            onClick={handleBack}
            className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium text-stone-600 hover:text-neutral-900"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8 items-start">
            {/* Image */}
            <div className="rounded-[24px] bg-white border border-stone-200 p-4 sm:p-6">
              <div className="rounded-[20px] bg-[#f5f5f2] border border-stone-200 overflow-hidden aspect-[1/1] sm:aspect-[1.05/1] relative flex items-center justify-center">
                <img src={getImageSrc()} alt={product.name} className="w-full h-full object-contain p-8 sm:p-10" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide border ${getConditionStyles(product.condition)}`}>{product.condition}</span>
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-neutral-900 text-white px-3 py-1.5 text-[11px] font-semibold">—{product.discount}%</div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-[#fcfcf9] border border-stone-200 py-3">
                  <div className="text-[11px] tracking-[0.12em] uppercase font-semibold text-stone-500">Checked</div>
                  <div className="text-[13px] font-semibold text-neutral-900 mt-1">UK tested</div>
                </div>
                <div className="rounded-2xl bg-[#fcfcf9] border border-stone-200 py-3">
                  <div className="text-[11px] tracking-[0.12em] uppercase font-semibold text-stone-500">Battery</div>
                  <div className="text-[13px] font-semibold text-neutral-900 mt-1">{product.battery || 'Health disclosed'}</div>
                </div>
                <div className="rounded-2xl bg-[#fcfcf9] border border-stone-200 py-3">
                  <div className="text-[11px] tracking-[0.12em] uppercase font-semibold text-stone-500">Delivery</div>
                  <div className="text-[13px] font-semibold text-neutral-900 mt-1">Lagos • tracked</div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="rounded-[24px] bg-white border border-stone-200 p-6 sm:p-7">
                <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-stone-500">UK-used • Verified • {product.releaseYear || '—'}</div>
                <h1 className="display-font text-[28px] sm:text-[32px] leading-none text-neutral-900 mt-2">{product.name}</h1>
                <p className="text-[13px] text-stone-600 mt-3 leading-6">{product.description || 'A carefully graded UK device. Fully tested, data-wiped, and photographed as listed.'}</p>

                <div className="mt-6 flex items-baseline gap-3">
                  <div className="text-[28px] font-semibold tracking-tight text-neutral-900">{formatPrice(product.currentPrice)}</div>
                  <div className="text-[14px] text-stone-400 line-through">{formatPrice(product.originalPrice)}</div>
                  <span className="ml-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-1 text-[11px] font-semibold">Save {formatPrice(product.originalPrice - product.currentPrice)}</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {product.storage && <div className="rounded-2xl bg-[#fcfcf9] border border-stone-200 px-4 py-3"><div className="text-[11px] tracking-wide uppercase font-semibold text-stone-500">Storage</div><div className="text-[14px] font-semibold text-neutral-900 mt-1">{product.storage}</div></div>}
                  {product.ram && <div className="rounded-2xl bg-[#fcfcf9] border border-stone-200 px-4 py-3"><div className="text-[11px] tracking-wide uppercase font-semibold text-stone-500">Memory</div><div className="text-[14px] font-semibold text-neutral-900 mt-1">{product.ram}</div></div>}
                  {product.chip && <div className="rounded-2xl bg-[#fcfcf9] border border-stone-200 px-4 py-3"><div className="text-[11px] tracking-wide uppercase font-semibold text-stone-500">Chip</div><div className="text-[14px] font-semibold text-neutral-900 mt-1">{product.chip}</div></div>}
                  {product.display && <div className="rounded-2xl bg-[#fcfcf9] border border-stone-200 px-4 py-3"><div className="text-[11px] tracking-wide uppercase font-semibold text-stone-500">Display</div><div className="text-[14px] font-semibold text-neutral-900 mt-1">{product.display}</div></div>}
                </div>

                <div className="mt-6 rounded-2xl bg-[#fcfcf9] border border-stone-200 p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[13px] font-semibold">TG</div>
                  <div className="flex-1">
                    <div className="text-[13px] font-semibold text-neutral-900">Sold by {product.seller}</div>
                    <div className="text-[12px] text-stone-600">Verified UK seller • WhatsApp support • Invoice on request</div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase text-emerald-700"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Online</span>
                </div>

                <div className="mt-6 grid gap-3">
                  <button onClick={handleWhatsAppContact} className="w-full rounded-full bg-[#0a7f43] hover:bg-[#0a6d3a] text-white px-6 py-3.5 text-[14px] font-semibold flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.05 4.94A9.91 9.91 0 0012.04 2C6.54 2 2.06 6.48 2.06 11.98c0 1.76.46 3.48 1.33 5L2 22l5.15-1.35a9.96 9.96 0 004.89 1.25h.01c5.5 0 9.98-4.48 9.98-9.98 0-2.67-1.04-5.18-2.98-7.08zm-7.01 15.24h-.01a8.3 8.3 0 01-4.22-1.16l-.3-.18-3.06.8.82-2.98-.2-.31a8.27 8.27 0 01-1.27-4.37c0-4.58 3.73-8.31 8.31-8.31 2.22 0 4.31.87 5.88 2.44 1.57 1.57 2.43 3.66 2.43 5.87 0 4.58-3.73 8.2-8.38 8.2zm4.56-6.19c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.64 4.2 3.71.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" /></svg>
                    Chat on WhatsApp
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="tel:+447700900123" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-[13px] font-semibold text-neutral-900 hover:bg-stone-50">Call to confirm</a>
                    <Link to={`/?category=${product.category}`} className="rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-[13px] font-semibold text-neutral-900 hover:bg-stone-50">View similar</Link>
                  </div>
                  <p className="text-center text-[11px] text-stone-500">No checkout pressure — we confirm condition, battery & accessories on WhatsApp before payment.</p>
                </div>
              </div>

              <div className="rounded-[24px] bg-white border border-stone-200 p-6 sm:p-7">
                <h2 className="text-[13px] font-semibold tracking-[0.14em] uppercase text-stone-500">Specifications</h2>
                <div className="mt-4 divide-y divide-stone-200 border-y border-stone-200">
                  {[
                    ['Product', product.name],
                    ['Condition', product.condition],
                    product.storage ? ['Storage', product.storage] : null,
                    product.ram ? ['Memory', product.ram] : null,
                    product.chip ? ['Chip', product.chip] : null,
                    product.display ? ['Display', product.display] : null,
                    product.cameras ? ['Camera', product.cameras.rear] : null,
                    product.battery ? ['Battery', product.battery] : null,
                    product.releaseYear ? ['Release year', String(product.releaseYear)] : null,
                    product.compatible ? ['Compatibility', product.compatible] : null,
                    ['Seller', product.seller],
                    ['Discount', `${product.discount}% off`],
                  ].filter(Boolean).map((row: any) => (
                    <div key={row[0]} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <span className="text-stone-500">{row[0]}</span>
                      <span className="font-medium text-neutral-900 text-right">{row[1]}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-[12px] leading-5 text-amber-900">
                  <span className="font-semibold">Transparency note:</span> UK-used devices may show light signs of use. We photograph and grade honestly — what you see is what ships.
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-10">
              <div className="flex items-baseline justify-between">
                <h3 className="display-font text-[22px] text-neutral-900">You may also like</h3>
                <Link to={`/?category=${product.category}`} className="text-[13px] font-semibold text-neutral-900 hover:underline">View all in {product.category.replace('-', ' ')} →</Link>
              </div>
              <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
                {related.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>

      {isStandaloneRoute ? <Footer /> : null}
    </div>
  );
};

export default ProductDetail;
