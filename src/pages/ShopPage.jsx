import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import QuickViewModal from '../components/common/QuickViewModal';
import { Filter, SlidersHorizontal, ArrowUpDown, X, Check, Search, Sparkles } from 'lucide-react';

export default function ShopPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [priceMax, setPriceMax] = useState(1500);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [displayCount, setDisplayCount] = useState(12);

  // Sync category param with state
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('all');
    }
  }, [category]);

  const handleCategorySelect = (catSlug) => {
    setSelectedCategory(catSlug);
    if (catSlug === 'all') {
      navigate('/shop');
    } else {
      navigate(`/shop/${catSlug}`);
    }
  };

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Price filter
      if (p.price > priceMax) {
        return false;
      }
      // In stock
      if (onlyInStock && !p.inStock) {
        return false;
      }
      // New arrivals
      if (onlyNew && !p.newArrival) {
        return false;
      }
      // Search
      if (searchFilter.trim()) {
        const q = searchFilter.toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.description.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (selectedSort === 'price-asc') return a.price - b.price;
      if (selectedSort === 'price-desc') return b.price - a.price;
      if (selectedSort === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (selectedSort === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedSort, priceMax, onlyInStock, onlyNew, searchFilter]);

  const displayedList = filteredProducts.slice(0, displayCount);

  return (
    <div className="pt-24 pb-20 bg-sand-50 min-h-screen">
      
      {/* Shop Header */}
      <div className="w-full bg-natural-sand/40 border-b border-natural-sand py-16 sm:py-20 xl:py-24">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center">
          <span className="text-xs uppercase font-bold tracking-[0.35em] text-muted-olive block mb-2">
            The Sustainable Craft Catalog
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-charcoal leading-[1.04]">
            SHOP AROLA CREATIONS
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-charcoal/70 mt-3 font-light max-w-2xl mx-auto leading-relaxed">
            100% natural, biodegradable bamboo products handcrafted by women Self Help Groups and tribal artisans in Madurai, India.
          </p>

          {/* Quick Category Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                selectedCategory === 'all'
                  ? 'bg-forest text-sand-50 shadow-luxury scale-105'
                  : 'bg-white text-charcoal/80 border border-natural-sand hover:border-forest'
              }`}
            >
              All Collections ({products.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => handleCategorySelect(c.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                  selectedCategory === c.slug
                    ? 'bg-forest text-sand-50 shadow-luxury scale-105'
                    : 'bg-white text-charcoal/80 border border-natural-sand hover:border-forest'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 xl:py-16">
        
        {/* Top Control Bar (Total Count, Search & Sorting, Mobile Filter Button) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-natural-sand">
          
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-natural-sand text-xs font-bold text-charcoal shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-forest" />
              <span>Filters</span>
            </button>

            <span className="text-xs sm:text-sm font-medium text-charcoal/60">
              Showing <b className="text-charcoal font-bold">{displayedList.length}</b> of <b>{filteredProducts.length}</b> handcrafted items
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Inline Quick Search */}
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search catalog by name..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-natural-sand bg-white text-xs sm:text-sm focus:outline-none focus:border-forest shadow-sm"
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-4 py-2.5 bg-white border border-natural-sand rounded-xl text-xs sm:text-sm font-semibold text-charcoal focus:outline-none focus:border-forest shadow-sm cursor-pointer"
              >
                <option value="featured">Sort: Featured Curations</option>
                <option value="newest">Sort: Newest First</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* 2-Column: Sidebar Filters + 4-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          
          {/* DESKTOP SIDEBAR (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-7 xl:p-8 rounded-3xl border border-natural-sand shadow-subtle sticky top-28 space-y-6">
            
            {/* Reset Filters */}
            <div className="flex items-center justify-between border-b border-natural-sand pb-4">
              <h3 className="font-serif font-bold text-lg text-charcoal flex items-center gap-2">
                <Filter className="w-4 h-4 text-forest" />
                <span>Filter By</span>
              </h3>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceMax(1500);
                  setOnlyInStock(false);
                  setOnlyNew(false);
                  setSearchFilter('');
                }}
                className="text-xs text-forest hover:underline font-bold uppercase tracking-wider"
              >
                Reset All
              </button>
            </div>

            {/* Categories */}
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-muted-olive block mb-3">
                Category
              </span>
              <div className="space-y-1.5 text-xs">
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`w-full text-left py-2 px-3 rounded-xl flex items-center justify-between transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-natural-sand text-forest font-bold shadow-sm'
                      : 'text-charcoal/80 hover:bg-natural-sand/40'
                  }`}
                >
                  <span>All Products</span>
                  <span className="font-mono text-[11px]">{products.length}</span>
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCategorySelect(c.slug)}
                    className={`w-full text-left py-2 px-3 rounded-xl flex items-center justify-between transition-colors ${
                      selectedCategory === c.slug
                        ? 'bg-natural-sand text-forest font-bold shadow-sm'
                        : 'text-charcoal/80 hover:bg-natural-sand/40'
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className="font-mono text-[11px]">{c.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="pt-3 border-t border-natural-sand">
              <div className="flex justify-between text-xs font-bold text-charcoal mb-2">
                <span>Max Price:</span>
                <span className="font-serif text-forest text-sm font-bold">₹{priceMax}</span>
              </div>
              <input
                type="range"
                min="50"
                max="1500"
                step="50"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-forest cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-charcoal/50 font-mono mt-1">
                <span>₹50</span>
                <span>₹1,500</span>
              </div>
            </div>

            {/* Toggle Badges */}
            <div className="pt-3 border-t border-natural-sand space-y-2.5">
              <label className="flex items-center gap-3 text-xs font-medium text-charcoal/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded text-forest focus:ring-forest w-4 h-4"
                />
                <span>In Stock Only</span>
              </label>

              <label className="flex items-center gap-3 text-xs font-medium text-charcoal/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyNew}
                  onChange={(e) => setOnlyNew(e.target.checked)}
                  className="rounded text-forest focus:ring-forest w-4 h-4"
                />
                <span>New Arrivals Only</span>
              </label>
            </div>

          </aside>

          {/* MAIN PRODUCT GRID (9 cols -> 3/4 cards across on wide screens) */}
          <main className="lg:col-span-9 space-y-10">
            {displayedList.length === 0 ? (
              <div className="text-center py-20 px-6 bg-white rounded-3xl border border-natural-sand shadow-subtle space-y-4">
                <div className="w-16 h-16 rounded-full bg-natural-sand/60 text-charcoal/50 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  No products match your active filters.
                </h3>
                <p className="text-sm text-charcoal/60 max-w-md mx-auto">
                  Try adjusting the maximum price slider, clearing your search query, or choosing another category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceMax(1500);
                    setOnlyInStock(false);
                    setOnlyNew(false);
                    setSearchFilter('');
                  }}
                  className="mt-3 px-7 py-3 bg-forest text-sand-50 rounded-full text-xs font-bold uppercase tracking-wider shadow-luxury"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-7">
                {displayedList.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            )}

            {/* Load More Button */}
            {displayedList.length < filteredProducts.length && (
              <div className="text-center pt-8">
                <button
                  onClick={() => setDisplayCount((prev) => prev + 8)}
                  className="px-10 py-4 bg-white border border-natural-sand hover:border-forest text-charcoal rounded-full text-xs font-bold uppercase tracking-[0.18em] shadow-luxury transition-all hover:scale-105"
                >
                  Load More Products ({filteredProducts.length - displayedList.length} Remaining)
                </button>
              </div>
            )}

          </main>

        </div>

      </div>

      {/* MOBILE BOTTOM SHEET FILTERS */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-charcoal-900/60 backdrop-blur-sm">
          <div className="bg-sand-50 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-sand-200 pb-3">
              <h3 className="font-serif text-lg font-bold text-charcoal-900">Filters</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-charcoal-500 hover:text-charcoal-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category selection */}
            <div>
              <span className="text-xs uppercase font-bold text-charcoal-500 block mb-2">Category</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`p-2.5 rounded-xl border text-center ${
                    selectedCategory === 'all'
                      ? 'border-bamboo-700 bg-bamboo-100 font-bold'
                      : 'border-sand-300 bg-white'
                  }`}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCategorySelect(c.slug)}
                    className={`p-2.5 rounded-xl border text-center truncate ${
                      selectedCategory === c.slug
                        ? 'border-bamboo-700 bg-bamboo-100 font-bold'
                        : 'border-sand-300 bg-white'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price slider */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Max Price:</span>
                <span>₹{priceMax}</span>
              </div>
              <input
                type="range"
                min="50"
                max="1500"
                step="50"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-bamboo-700"
              />
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3.5 bg-bamboo-700 text-sand-50 rounded-xl font-bold text-xs uppercase tracking-wider"
            >
              Apply Filters ({filteredProducts.length} Results)
            </button>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
}
