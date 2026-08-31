import React from 'react';

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
  color: string;
}

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white border border-stone-200 rounded-[20px] overflow-hidden w-[300px] sm:w-[320px] hover:border-stone-300 transition-colors"
    >
      <div className="aspect-[1.05/1] bg-[#f5f5f2] relative overflow-hidden">
        <img
          src={category.icon}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-contain p-7 group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 rounded-full bg-white border border-stone-200 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-neutral-900">
          {category.productCount} items
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-[16px] font-semibold tracking-tight text-neutral-900">{category.name}</h3>
        <p className="mt-1 text-[12.5px] leading-5 text-stone-600 line-clamp-2">{category.description}</p>
        <div className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-neutral-900">
          Explore
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;
