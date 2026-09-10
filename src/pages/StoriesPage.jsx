import React, { useState } from 'react';
import { stories } from '../data/contentData';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, User } from 'lucide-react';

export default function StoriesPage() {
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = ['all', 'Wellness & Health', 'Community & Education', 'Artisan Empowerment', 'Architecture & ESG'];

  const filteredStories = selectedTag === 'all'
    ? stories
    : stories.filter(s => s.category.toLowerCase().includes(selectedTag.toLowerCase()));

  const featuredStory = stories[0];

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-charcoal min-h-screen">
      
      {/* 1. Full-Width Editorial Hero */}
      <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-[#F2ECE4] via-[#F7F3EE] to-[#FAF8F5] border-b border-natural-sand/60">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-4xl">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-warm-bamboo block mb-3">
              The Arola Chronicle & Journal
            </span>
            <h1 className="font-serif text-[clamp(2.75rem,5.5vw,6.5rem)] font-bold text-forest leading-[1.05] tracking-tight">
              Stories, Science &<br />
              <span className="italic font-light text-warm-bamboo">Artisanal Living.</span>
            </h1>
            <p className="text-base sm:text-xl text-charcoal/80 mt-6 leading-relaxed font-light max-w-3xl">
              Editorial explorations in botanical biomaterials, rural artisan empowerment, zero-plastic lifestyle transitions, and biophilic architectural engineering.
            </p>

            {/* Tag Filter Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mt-8">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTag(t)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                    selectedTag === t
                      ? 'bg-forest text-sand-50 shadow-luxury'
                      : 'bg-white text-forest/80 border border-natural-sand/70 hover:border-forest/40'
                  }`}
                >
                  {t === 'all' ? 'All Stories' : t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Magazine Lead (When All Selected) */}
      {selectedTag === 'all' && featuredStory && (
        <section className="w-full py-16 lg:py-20 border-b border-natural-sand/60">
          <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="bg-white rounded-[2.5rem] border border-natural-sand/70 overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 items-center group">
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:h-[500px] overflow-hidden bg-sand-200">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-forest bg-warm-bamboo/20 border border-warm-bamboo/40 px-3.5 py-1.5 rounded-full">
                    Featured Editorial
                  </span>
                  <span className="text-xs text-charcoal/60 font-medium">
                    {featuredStory.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-forest leading-snug group-hover:text-warm-bamboo transition-colors">
                  <Link to={`/stories/${featuredStory.slug}`}>
                    {featuredStory.title}
                  </Link>
                </h2>
                <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
                  {featuredStory.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-natural-sand/60">
                  <span className="text-xs text-charcoal/60 font-medium">By {featuredStory.author}</span>
                  <Link
                    to={`/stories/${featuredStory.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-warm-bamboo uppercase tracking-[0.2em] transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 text-warm-bamboo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Stories Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-[2.25rem] border border-natural-sand/70 overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-sand-200 relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-forest/90 backdrop-blur-md text-sand-50 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                      {story.category}
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 text-xs text-charcoal/50 mb-3 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-warm-bamboo" />
                        <span>{story.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-warm-bamboo" />
                        <span>{story.readTime}</span>
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-forest group-hover:text-warm-bamboo transition-colors leading-snug">
                      <Link to={`/stories/${story.slug}`}>
                        {story.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-charcoal/70 mt-3.5 line-clamp-3 leading-relaxed font-light">
                      {story.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2">
                  <Link
                    to={`/stories/${story.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-forest group-hover:text-warm-bamboo uppercase tracking-[0.2em] group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-warm-bamboo" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
