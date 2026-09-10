import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { stories } from '../data/contentData';
import { Calendar, Clock, User, ChevronRight, ArrowLeft, Share2, Sparkles } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function StoryDetailPage() {
  const { slug } = useParams();
  const { addToast } = useToast();
  const story = stories.find(s => s.slug === slug) || stories[0];

  const relatedStories = stories.filter(s => s.id !== story.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Article link copied to clipboard!');
    }
  };

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-charcoal">
      
      {/* 1. Header & Breadcrumbs */}
      <section className="w-full py-12 lg:py-16 bg-[#F3EDE4] border-b border-natural-sand/60">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <nav className="flex items-center gap-2 text-xs font-semibold text-charcoal/60 mb-6">
            <Link to="/" className="hover:text-forest">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/stories" className="hover:text-forest">The Chronicle</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-forest truncate max-w-md">{story.title}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-forest bg-warm-bamboo/20 border border-warm-bamboo/40 px-3.5 py-1.5 rounded-full inline-block">
              {story.category}
            </span>
            <h1 className="font-serif text-[clamp(2.25rem,4.5vw,4.5rem)] font-bold text-forest leading-[1.1] tracking-tight">
              {story.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-natural-sand/60 text-xs text-charcoal/70">
              <div className="flex items-center gap-4 sm:gap-6 font-medium">
                <span className="flex items-center gap-1.5 text-forest font-bold">
                  <User className="w-4 h-4 text-warm-bamboo" />
                  <span>By {story.author}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-warm-bamboo" />
                  <span>{story.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-warm-bamboo" />
                  <span>{story.readTime}</span>
                </span>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-forest hover:text-warm-bamboo font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Article</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Article Body Container */}
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Feature Image */}
          <div className="rounded-[2.5rem] overflow-hidden aspect-[16/9] shadow-luxury bg-sand-200 border border-natural-sand/80">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt Pull Quote */}
          <div className="p-8 sm:p-10 bg-forest/5 border-l-4 border-forest rounded-r-[2rem] text-forest font-serif italic text-lg sm:text-2xl leading-relaxed">
            "{story.excerpt}"
          </div>

          {/* Body Content */}
          <div className="text-charcoal/85 text-base sm:text-lg leading-[1.8] space-y-6 font-light">
            {story.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Navigation link */}
          <div className="pt-10 border-t border-natural-sand/70 flex justify-between items-center">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2.5 text-xs font-bold text-forest hover:text-warm-bamboo uppercase tracking-[0.2em] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Stories</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Related Stories Wide Section */}
      {relatedStories.length > 0 && (
        <section className="w-full py-20 bg-[#F3EDE4] border-t border-natural-sand/60">
          <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.3em] text-warm-bamboo block mb-2">Further Reading</span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                  More From The Chronicle
                </h3>
              </div>
              <Link to="/stories" className="text-xs font-bold uppercase tracking-wider text-forest hover:text-warm-bamboo hidden sm:block">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedStories.map((s) => (
                <Link
                  key={s.id}
                  to={`/stories/${s.slug}`}
                  className="p-6 rounded-[2rem] bg-white border border-natural-sand/70 hover:shadow-luxury transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-sand-200">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-warm-bamboo tracking-wider block mb-2">{s.category}</span>
                    <h4 className="font-serif font-bold text-lg text-forest group-hover:text-warm-bamboo transition-colors leading-snug line-clamp-2">
                      {s.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-forest/70 uppercase tracking-widest mt-6 block">Read Article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
