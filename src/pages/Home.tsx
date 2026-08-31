import React, { useState, useEffect, useRef } from 'react';
import { useProducts } from '../context/ProductContext';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchFilter from '../components/SearchFilter';
import ProductCard from '../components/ProductCard';
import CategorySlider from '../components/CategorySlider';
import Footer from '../components/Footer';
import FeaturedEdit from '../components/FeaturedEdit';
import WhyMint from '../components/WhyMint';
import JournalStrip from '../components/JournalStrip';
import { categories } from '../data/categories';

const Home: React.FC = () => {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModel, setSelectedModel] = useState('All Models');
  const [selectedStorage, setSelectedStorage] = useState('All Storage');
  const [selectedCondition, setSelectedCondition] = useState('All Conditions');

  const categoryHeaderRef = useRef<HTMLElement>(null);

  const scrollToCategorySection = () => {
    setTimeout(() => {
      if (categoryHeaderRef.current) {
        categoryHeaderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 250);
  };

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategoryId(categoryFromUrl);
      scrollToCategorySection();
    } else {
      setSelectedCategoryId(null);
    }
    // product param is now ignored — product opens on dedicated page /product/:id
  }, [searchParams]);

  // Get current category
  const currentCategory = selectedCategoryId ? categories.find(cat => cat.id === selectedCategoryId) : null;

  // Filter products based on selected category and other criteria
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filtering
    let matchesCategory = true;
    if (selectedCategoryId) {
      switch (selectedCategoryId) {
        case 'iphones':
          matchesCategory = product.category === 'iphones';
          break;
        case 'apple-watches':
          matchesCategory = product.category === 'apple-watches';
          break;
        case 'ipads':
          matchesCategory = product.category === 'ipads';
          break;
        case 'macbooks':
          matchesCategory = product.category === 'macbooks';
          break;
        case 'airpods':
          matchesCategory = product.category === 'airpods';
          break;
        case 'chargers':
          matchesCategory = product.category === 'chargers';
          break;
        case 'cases':
          matchesCategory = product.category === 'cases';
          break;
        default:
          matchesCategory = true;
      }
    }
    
    const matchesModel = selectedModel === 'All Models' || 
      (selectedModel && product.name.toLowerCase().includes(selectedModel.toLowerCase()));
    const matchesStorage = selectedStorage === 'All Storage' || (product.storage && product.storage === selectedStorage);
    const matchesCondition = selectedCondition === 'All Conditions' || product.condition === selectedCondition;

    return matchesSearch && matchesCategory && matchesModel && matchesStorage && matchesCondition;
  });

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setSearchTerm('');
    setSelectedModel('All Models');
    setSelectedStorage('All Storage');
    setSelectedCondition('All Conditions');
    navigate(`/?category=${categoryId}`, { replace: false });
    scrollToCategorySection();
  };

  const handleBackToCategories = () => {
    setSelectedCategoryId(null);
    setSearchTerm('');
    setSelectedModel('All Models');
    setSelectedStorage('All Storage');
    setSelectedCondition('All Conditions');
    navigate('/', { replace: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9]">
      <Header onHomeClick={handleBackToCategories} />
      <div>
        {!selectedCategoryId ? (
          // HOME — editorial, not AI
          <>
            <Hero />
            <div id="category-section">
              <CategorySlider categories={categories} onCategoryClick={handleCategoryClick} />
            </div>
            <FeaturedEdit />
            <WhyMint />
            <JournalStrip />
          </>
        ) : (
          // CATEGORY SHELF
          <>
            <div className="pt-[96px] sm:pt-[104px] bg-[#fcfcf9] border-b border-stone-200">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <button
                  onClick={handleBackToCategories}
                  className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide uppercase text-stone-500 hover:text-neutral-900 mb-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 19l-7-7 7-7" /></svg>
                  All categories
                </button>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                  <div>
                    <h1 className="display-font text-[32px] sm:text-[40px] leading-none text-neutral-900">{currentCategory?.name}</h1>
                    <p className="text-[13px] sm:text-[14px] leading-6 text-stone-600 mt-2 max-w-[640px]">{currentCategory?.description} — UK-tested, honestly graded, ready for Lagos.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border border-stone-200 bg-white px-4 py-2 text-[12px] font-medium text-stone-700">
                      {filteredProducts.length} devices
                    </div>
                    <button
                      onClick={handleBackToCategories}
                      className="hidden sm:inline-flex rounded-full bg-neutral-900 text-white px-5 py-2.5 text-[13px] font-semibold hover:bg-black"
                    >
                      Browse other collections
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <section ref={categoryHeaderRef} className="bg-white border-b border-stone-200">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <SearchFilter
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategory={selectedCategoryId || 'All Categories'}
                  setSelectedCategory={() => {}}
                  selectedModel={selectedModel}
                  setSelectedModel={setSelectedModel}
                  selectedStorage={selectedStorage}
                  setSelectedStorage={setSelectedStorage}
                  selectedCondition={selectedCondition}
                  setSelectedCondition={setSelectedCondition}
                  isCategoryView={true}
                />
              </div>
            </section>

            <section className="py-5 sm:py-8 bg-[#fcfcf9]">
              <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-8">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} isCategoryView={true} currentCategory={selectedCategoryId || undefined} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[24px] bg-white border border-stone-200 p-10 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 21l-4.3-4.3m0 0a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9z" /></svg>
                    </div>
                    <h3 className="mt-4 text-[16px] font-semibold text-neutral-900">No matches</h3>
                    <p className="text-[13px] text-stone-600 mt-1">Try clearing a filter or search differently. We can also source it for you.</p>
                    <div className="mt-5 flex justify-center gap-3">
                      <button onClick={() => { setSearchTerm(''); setSelectedModel('All Models'); setSelectedStorage('All Storage'); setSelectedCondition('All Conditions'); }} className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold">Clear filters</button>
                      <a href="https://wa.me/447700900123" target="_blank" rel="noreferrer" className="rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-black">Ask on WhatsApp</a>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </div>
      <Footer onCategoryClick={handleCategoryClick} />
    </div>
  );
};

export default Home;
