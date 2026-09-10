import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/product/ProductCard';
import QuickViewModal from '../components/common/QuickViewModal';
import {
  Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw,
  Check, ChevronRight, Share2, Sparkles, AlertCircle, Leaf, MessageSquare
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsDrawerOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();

  const product = products.find((p) => p.slug === slug) || products[0];
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details'); // details | care | shipping | reviews
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const isLiked = isInWishlist(product.id);
  const images = product.images || [product.image];

  // Related products from same category or others
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, false);
    navigate('/cart');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Product link copied to clipboard!');
    }
  };

  return (
    <div className="pt-24 pb-24 bg-sand-50 min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal/60">
          <Link to="/" className="hover:text-forest">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-forest">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/shop/${product.category}`} className="hover:text-forest">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-charcoal font-bold truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Overview */}
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* LEFT: GALLERY (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Large Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-sand-300 shadow-soft">
              <img
                src={images[selectedImgIdx]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="absolute top-4 left-4 bg-warm-400 text-bamboo-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Save ₹{product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Thumbnails row */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIdx(idx)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-white ${
                      selectedImgIdx === idx
                        ? 'border-bamboo-700 scale-105 shadow-sm'
                        : 'border-sand-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: BUY BOX & PRODUCT DETAILS (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-warm-700">
                  {product.categoryName}
                </span>
                <button
                  onClick={handleShare}
                  className="p-2 text-charcoal-500 hover:text-bamboo-700 rounded-full hover:bg-sand-200/60 transition-colors"
                  title="Share product link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mt-1">
                {product.name}
              </h1>

              {/* Rating & Artisan cluster */}
              <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                <div className="flex items-center text-amber-500 font-bold gap-1 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{product.rating || 4.9}</span>
                </div>
                <span className="text-charcoal-500">
                  ({product.reviewsCount || 48} Customer Reviews)
                </span>
                {product.artisanName && (
                  <span className="text-bamboo-800 font-medium">
                    • Crafted by: <b>{product.artisanName}</b>
                  </span>
                )}
              </div>
            </div>

            {/* Price & Stock Badge */}
            <div className="flex items-baseline gap-4 p-4 rounded-2xl bg-white border border-sand-200">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-bamboo-900">
                ₹{product.price}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-base text-charcoal-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="ml-auto text-xs font-semibold text-bamboo-700 bg-bamboo-50 px-3 py-1 rounded-full border border-bamboo-200">
                In Stock & Ready to Ship
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-charcoal-700 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Specifications Snapshot */}
            {product.dimensions && (
              <div className="p-3.5 rounded-xl bg-sand-100 border border-sand-200 text-xs text-charcoal-700">
                <span className="font-semibold text-charcoal-900">Specs: </span>
                <span>{product.dimensions}</span>
              </div>
            )}

            {/* Quantity & CTA Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-sand-300 rounded-xl bg-white p-1.5 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-charcoal-600 hover:bg-sand-100 rounded-lg text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-sm text-charcoal-900 font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-charcoal-600 hover:bg-sand-100 rounded-lg text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Basket */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-6 bg-bamboo-700 hover:bg-bamboo-800 text-sand-50 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-premium transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-warm-400" />
                  <span>Add To Basket • ₹{product.price * quantity}</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-xl border transition-all ${
                    isLiked
                      ? 'border-red-300 bg-red-50 text-red-600'
                      : 'border-sand-300 bg-white text-charcoal-600 hover:text-bamboo-700'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 bg-warm-400 hover:bg-warm-300 text-bamboo-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                Instant Buy Now →
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-sand-200 text-center text-[11px] text-charcoal-600">
              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white border border-sand-200">
                <Leaf className="w-4 h-4 text-bamboo-700" />
                <span>100% Biodegradable</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white border border-sand-200">
                <Truck className="w-4 h-4 text-bamboo-700" />
                <span>Free Ship Above ₹999</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-white border border-sand-200">
                <ShieldCheck className="w-4 h-4 text-bamboo-700" />
                <span>Crafted in Madurai</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabbed In-Depth Sections: Details, Features, Care, Shipping, Reviews */}
        <div className="mt-16 bg-white rounded-3xl border border-sand-200 p-6 sm:p-10 shadow-soft">
          <div className="flex border-b border-sand-200 gap-6 overflow-x-auto pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'details' ? 'text-bamboo-700 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
              }`}
            >
              Product Details & Features
              {activeTab === 'details' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-bamboo-700" />}
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'care' ? 'text-bamboo-700 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
              }`}
            >
              Care & Maintenance
              {activeTab === 'care' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-bamboo-700" />}
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'shipping' ? 'text-bamboo-700 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
              }`}
            >
              Shipping & Returns
              {activeTab === 'shipping' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-bamboo-700" />}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'reviews' ? 'text-bamboo-700 font-bold' : 'text-charcoal-500 hover:text-charcoal-900'
              }`}
            >
              Customer Reviews ({product.reviewsCount || 48})
              {activeTab === 'reviews' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-bamboo-700" />}
            </button>
          </div>

          <div className="py-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
            {activeTab === 'details' && (
              <div className="space-y-4">
                <p>{product.description}</p>
                {product.features && (
                  <div className="space-y-2 pt-2">
                    <span className="font-bold text-charcoal-900 block uppercase text-xs tracking-wider">
                      Key Highlights:
                    </span>
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-bamboo-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-3">
                <p className="font-semibold text-charcoal-900">How to keep your bamboo item in pristine condition:</p>
                <p>{product.care || "Wash gently by hand with mild organic soap and lukewarm water. Dry thoroughly with a cotton towel. Condition every few months with natural cold-pressed coconut oil."}</p>
                <div className="p-4 bg-sand-100 rounded-xl border border-sand-300 text-xs">
                  <b>Note:</b> Never submerge natural seasoned bamboo under standing water overnight, nor place inside a microwave or conventional high-heat dishwasher.
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-3">
                <p>We pack every shipment using 100% plastic-free recycled kraft boxes, shredded paper cushioning, and natural jute strings.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><b>Standard Dispatch:</b> Dispatched within 24 to 48 hours from Madurai, Tamil Nadu.</li>
                  <li><b>Estimated Delivery:</b> 3 to 5 business days across major Indian metros and towns.</li>
                  <li><b>Return Policy:</b> 7-day hassle-free replacement in case of transit damage.</li>
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-sand-100 rounded-2xl">
                  <div className="text-center pr-4 border-r border-sand-300">
                    <span className="font-serif text-3xl font-bold text-charcoal-900">{product.rating || 4.9}</span>
                    <span className="text-xs block text-charcoal-500">out of 5.0</span>
                  </div>
                  <div>
                    <div className="flex text-amber-500 gap-1">
                      <Star className="w-4 h-4 fill-amber-500" />
                      <Star className="w-4 h-4 fill-amber-500" />
                      <Star className="w-4 h-4 fill-amber-500" />
                      <Star className="w-4 h-4 fill-amber-500" />
                      <Star className="w-4 h-4 fill-amber-500" />
                    </div>
                    <span className="text-xs font-semibold text-charcoal-800 mt-1 block">
                      100% of customers recommend this artisanal piece.
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl border border-sand-200 bg-sand-50/50">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-charcoal-900">Kavitha R., Chennai</span>
                      <span className="text-charcoal-400">2 weeks ago</span>
                    </div>
                    <p className="text-xs text-charcoal-600 mt-1.5 italic">
                      "Absolutely exquisite finish! The texture is buttery smooth, and knowing it is handcrafted by women artisans in Madurai makes it truly special."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* YOU MAY ALSO LIKE (Related Products) */}
        <div className="mt-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-warm-700 block">
                Complementary Pieces
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 mt-1">
                YOU MAY ALSO LIKE
              </h3>
            </div>
            <Link
              to="/shop"
              className="text-xs font-bold text-bamboo-700 hover:underline uppercase tracking-wider"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>

      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
}
