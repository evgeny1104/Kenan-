import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isActive: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isActive }) => {
  return (
    <div className={`
      relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col
      transition-all duration-500 border border-gray-100
      ${isActive ? 'shadow-blue-900/20' : 'shadow-gray-400/10'}
    `}>
      {/* Image Section */}
      <div className="relative h-3/5 w-full overflow-hidden group">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
          {product.category}
        </div>
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
             <button className="w-full bg-white text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                Quick View
             </button>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-yellow-400 mb-2 text-sm">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <span className="text-gray-400 ml-1">(42)</span>
          </div>
          <h3 className={`font-bold text-gray-900 leading-tight mb-2 ${isActive ? 'text-2xl' : 'text-lg'}`}>
            {product.title}
          </h3>
          <p className={`text-gray-500 text-sm line-clamp-2 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-extrabold text-slate-900">
            ${product.price}
          </span>
          <button className={`
            p-3 rounded-full transition-colors duration-300
            ${isActive ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
          `}>
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
