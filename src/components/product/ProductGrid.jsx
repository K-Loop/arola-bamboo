import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onQuickView, columns = 4 }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 px-4 bg-white rounded-3xl border border-sand-200">
        <p className="font-serif text-lg text-charcoal-800">No products found matching your selection.</p>
        <p className="text-xs text-charcoal-500 mt-1">Try resetting the filters or searching for another category.</p>
      </div>
    );
  }

  const gridColsClass = columns === 3
    ? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    : "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6";

  return (
    <div className={gridColsClass}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
}
