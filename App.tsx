import React from 'react';
import { Carousel } from './components/Carousel';
import { CAROUSEL_ITEMS } from './constants';
import { Search, Menu, ShoppingBag } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                I
              </div>
              <span className="text-2xl font-bold tracking-tight">Infinity<span className="text-blue-600">Market</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors">Discover</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Categories</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Deals</a>
              <a href="#" className="hover:text-blue-600 transition-colors">New Arrivals</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                <Search size={20} />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                <ShoppingBag size={20} />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                <Menu size={20} />
              </button>
              <button className="hidden md:block bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative overflow-hidden pb-20">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
            Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Extraordinary</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our curated collection of premium gadgets, fashion, and essentials. 
            Swipe through our exclusive weekly picks below.
          </p>
        </div>

        {/* Carousel Component */}
        <section className="relative">
          <Carousel items={CAROUSEL_ITEMS} />
        </section>

        {/* Sub-section */}
        <section className="max-w-7xl mx-auto px-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl mb-2">Free Shipping</h3>
                    <p className="text-gray-500">On all orders over $50. Global delivery within 5-7 business days.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
                    <p className="text-gray-500">Verified authentic products from top-tier brands worldwide.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
                    <p className="text-gray-500">Our dedicated team is here to help you anytime, anywhere.</p>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default App;
