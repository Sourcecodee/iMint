import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay } from 'swiper/modules';
import { Category } from './CategoryCard';
import CategoryCard from './CategoryCard';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface CategorySliderProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
}

const CategorySlider: React.FC<CategorySliderProps> = ({ categories, onCategoryClick }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      console.log('Pausing autoplay on hover');
      // Try multiple methods to ensure autoplay stops
      if (swiperRef.current.autoplay) {
        swiperRef.current.autoplay.pause();
      }
      // Alternative method for older/newer versions
      if (swiperRef.current.autoplay && swiperRef.current.autoplay.stop) {
        swiperRef.current.autoplay.stop();
      }
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      console.log('Resuming autoplay on mouse leave');
      // Try multiple methods to ensure autoplay resumes
      if (swiperRef.current.autoplay) {
        swiperRef.current.autoplay.resume();
      }
      // Alternative method for older/newer versions
      if (swiperRef.current.autoplay && swiperRef.current.autoplay.start) {
        swiperRef.current.autoplay.start();
      }
    }
  };

  return (
    <div
      className="relative bg-[#fcfcf9] py-6 sm:py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <h2 className="display-font text-[28px] sm:text-[32px] leading-none text-neutral-900">Browse by category</h2>
            <p className="text-[13px] text-stone-500 mt-2">Tap a collection — opens a curated shelf, not clutter</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button className="swiper-button-prev-custom w-10 h-10 rounded-full border border-stone-200 bg-white inline-flex items-center justify-center hover:bg-stone-50">
              <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom w-10 h-10 rounded-full border border-stone-200 bg-white inline-flex items-center justify-center hover:bg-stone-50">
              <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Keyboard, Autoplay]}
        spaceBetween={16}
        slidesPerView="auto"
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={650}
        className="category-swiper !px-4 sm:!px-6 lg:!px-8 !py-2"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="!w-auto">
            <CategoryCard category={category} onClick={() => onCategoryClick(category.id)} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* mobile nav */}
      <div className="sm:hidden flex justify-center gap-2 mt-4">
        <button className="swiper-button-prev-custom w-10 h-10 rounded-full border border-stone-200 bg-white inline-flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="swiper-button-next-custom w-10 h-10 rounded-full border border-stone-200 bg-white inline-flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
