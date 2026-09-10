import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, Tag, ArrowUpRight } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { products, categories } from '../../data/products';
import { constructionProjects, stories } from '../../data/contentData';
import { useNavigate, Link } from 'react-router-dom';

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useSearch();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  const q = searchQuery.toLowerCase().trim();

  // Filter products
  const matchingProducts = q
    ? products.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    : [];

  // Filter projects
  const matchingProjects = q
    ? constructionProjects.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      )
    : [];

  // Filter stories
  const matchingStories = q
    ? stories.filter(
        s =>
          s.title.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.excerpt.toLowerCase().includes(q)
      )
    : [];

  const popularSearches = [
    'Bamboo Water Bottle',
    'Bamboo Mug',
    'H Lampshade',
    'Bamboo Tea',
    'Storage Container',
    'Kids Toothbrush',
    'Green Construction'
  ];

  const handleSelectPopular = (term) => {
    setSearchQuery(term);
  };

  const handleNavigate = (path) => {
    closeSearch();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal-900/80 backdrop-blur-md flex flex-col items-center justify-start pt-16 sm:pt-24 px-4 sm:px-6 overflow-y-auto"
          onClick={closeSearch}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-3xl bg-sand-50 rounded-2xl sm:rounded-3xl shadow-2xl border border-sand-300 overflow-hidden mb-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-6 border-b border-sand-200 flex items-center gap-3 bg-white">
              <Search className="w-6 h-6 text-bamboo-700 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bamboo products, projects, sustainable stories..."
                className="w-full bg-transparent text-base sm:text-lg text-charcoal-900 placeholder-charcoal-400 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-charcoal-400 hover:text-charcoal-700 rounded-full hover:bg-sand-200"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={closeSearch}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-600 hover:bg-sand-200 rounded-lg transition-colors shrink-0"
              >
                ESC
              </button>
            </div>

            {/* Content Area */}
            <div className="p-5 sm:p-7 max-h-[70vh] overflow-y-auto space-y-6">
              
              {/* Popular Searches when query is empty */}
              {!searchQuery && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-charcoal-500 block mb-3">
                      Popular Searches
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => handleSelectPopular(term)}
                          className="px-3.5 py-1.5 bg-white border border-sand-300 hover:border-bamboo-600 hover:bg-bamboo-50 rounded-full text-xs font-medium text-charcoal-800 transition-all flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3 h-3 text-warm-500" />
                          <span>{term}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-charcoal-500 block mb-3">
                      Explore By Category
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handleNavigate(`/shop/${cat.slug}`)}
                          className="p-3 bg-white rounded-xl border border-sand-200 hover:border-bamboo-600 hover:shadow-soft transition-all text-left group flex items-center justify-between"
                        >
                          <div>
                            <p className="font-serif font-bold text-xs text-charcoal-900 group-hover:text-bamboo-700">
                              {cat.name}
                            </p>
                            <span className="text-[10px] text-charcoal-500">{cat.itemCount} items</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-sand-400 group-hover:text-bamboo-600 group-hover:translate-x-0.5 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Active Search Results */}
              {searchQuery && (
                <div className="space-y-6">
                  {/* Products Matches */}
                  {matchingProducts.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase font-bold tracking-widest text-charcoal-500">
                          Products ({matchingProducts.length})
                        </span>
                        <button
                          onClick={() => handleNavigate('/shop')}
                          className="text-xs text-bamboo-700 font-semibold hover:underline"
                        >
                          View in Shop
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {matchingProducts.map((p) => (
                          <div
                            key={p.id}
                            onClick={() => handleNavigate(`/product/${p.slug}`)}
                            className="p-3 bg-white rounded-xl border border-sand-200 hover:border-bamboo-600 hover:shadow-soft transition-all cursor-pointer flex gap-3 items-center group"
                          >
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-14 h-14 object-cover rounded-lg bg-sand-100 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <span className="text-[10px] text-warm-700 font-semibold uppercase tracking-wider block">
                                {p.categoryName}
                              </span>
                              <h5 className="font-serif font-bold text-xs text-charcoal-900 group-hover:text-bamboo-700 truncate">
                                {p.name}
                              </h5>
                              <span className="font-serif font-bold text-xs text-bamboo-900">
                                ₹{p.price}
                              </span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-sand-400 group-hover:text-bamboo-700 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects Matches */}
                  {matchingProjects.length > 0 && (
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-charcoal-500 block mb-3">
                        Green Construction ({matchingProjects.length})
                      </span>
                      <div className="space-y-2">
                        {matchingProjects.map((proj) => (
                          <div
                            key={proj.id}
                            onClick={() => handleNavigate('/construction')}
                            className="p-3 bg-white rounded-xl border border-sand-200 hover:border-bamboo-600 transition-all cursor-pointer flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={proj.image}
                                alt={proj.title}
                                className="w-12 h-12 object-cover rounded-lg shrink-0"
                              />
                              <div>
                                <h6 className="font-serif font-bold text-xs text-charcoal-900 group-hover:text-bamboo-700">
                                  {proj.title}
                                </h6>
                                <p className="text-[11px] text-charcoal-500">
                                  {proj.client} • {proj.location}
                                </p>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-sand-400 group-hover:text-bamboo-700" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stories Matches */}
                  {matchingStories.length > 0 && (
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-charcoal-500 block mb-3">
                        Editorial Stories ({matchingStories.length})
                      </span>
                      <div className="space-y-2">
                        {matchingStories.map((s) => (
                          <div
                            key={s.id}
                            onClick={() => handleNavigate(`/stories/${s.slug}`)}
                            className="p-3 bg-white rounded-xl border border-sand-200 hover:border-bamboo-600 transition-all cursor-pointer flex items-center justify-between group"
                          >
                            <div>
                              <span className="text-[10px] text-warm-700 font-semibold">{s.category}</span>
                              <h6 className="font-serif font-bold text-xs text-charcoal-900 group-hover:text-bamboo-700">
                                {s.title}
                              </h6>
                            </div>
                            <ArrowRight className="w-4 h-4 text-sand-400 group-hover:text-bamboo-700 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Zero results */}
                  {matchingProducts.length === 0 &&
                    matchingProjects.length === 0 &&
                    matchingStories.length === 0 && (
                      <div className="text-center py-10">
                        <p className="font-serif text-base text-charcoal-800">
                          No direct matches found for "{searchQuery}"
                        </p>
                        <p className="text-xs text-charcoal-500 mt-1">
                          Try searching for "bottle", "mug", "lamp", "tea", or "construction".
                        </p>
                      </div>
                    )}
                </div>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
