import React, { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: Product[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate the circular position of an item relative to the active index
  const getPosition = (index: number) => {
    const total = items.length;
    // Calculate the shortest distance in a circle
    let diff = (index - activeIndex) % total;
    
    // Adjust negative modulo results to be positive for easier logic, 
    // then normalize to -2, -1, 0, 1, 2 range for a 5-item carousel
    if (diff < 0) diff += total;
    if (diff > total / 2) diff -= total;
    
    return diff;
  };

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto h-[600px] flex items-center justify-center perspective-1000 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-40 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white transition-all hover:scale-110 text-gray-800 hidden md:block"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-40 p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white transition-all hover:scale-110 text-gray-800 hidden md:block"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Track */}
      <div className="relative w-full h-full flex items-center justify-center">
        {items.map((item, index) => {
          const position = getPosition(index); // -2, -1, 0, 1, 2
          
          // Determine styles based on position
          let xTrans = '0%';
          let scale = 1;
          let zIndex = 0;
          let opacity = 1;
          let blur = '0px';

          switch (position) {
            case 0: // Center
              xTrans = '0%';
              scale = 1.1; // 10% larger
              zIndex = 30;
              opacity = 1;
              break;
            case 1: // Right immediate
              xTrans = '60%'; // Move out 60% of container width approx
              scale = 0.85;
              zIndex = 20;
              opacity = 0.7;
              break;
            case -1: // Left immediate
              xTrans = '-60%';
              scale = 0.85;
              zIndex = 20;
              opacity = 0.7;
              break;
            case 2: // Far Right
              xTrans = '120%';
              scale = 0.7;
              zIndex = 10;
              opacity = 0.4;
              blur = '2px';
              break;
            case -2: // Far Left
              xTrans = '-120%';
              scale = 0.7;
              zIndex = 10;
              opacity = 0.4;
              blur = '2px';
              break;
            default:
              // Should not happen with 5 items, but safe fallback
              opacity = 0;
              zIndex = -1;
          }
          
          // Responsive adjustments for mobile (tighter spread)
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          if (isMobile) {
             if (position === 1) xTrans = '85%';
             if (position === -1) xTrans = '-85%';
             if (Math.abs(position) >= 2) opacity = 0; // Hide far items on mobile
          }

          return (
            <div
              key={item.id}
              className="absolute top-1/2 left-1/2 w-[280px] md:w-[350px] h-[450px] transition-all duration-700 ease-in-out origin-center"
              style={{
                transform: `translate(calc(-50% + ${xTrans}), -50%) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                filter: `blur(${blur})`
              }}
            >
              <ProductCard product={item} isActive={position === 0} />
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 flex gap-2 z-50">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
