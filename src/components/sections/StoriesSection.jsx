import React from 'react';
import { stories } from '../../data/contentData';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';

export default function StoriesSection() {
  const featureStory = stories[0]; // Bamboo leaf tea
  const sideStories = stories.slice(1, 4);

  return (
    <section className="w-full py-28 sm:py-36 xl:py-44 bg-[#F4EFE6] border-b border-[#D8CBB6]">
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#D8CBB6]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.35em] text-[#4F722A] mb-2">
              <BookOpen className="w-3.5 h-3.5 text-forest" />
              <span>The Arola Journal & Dispatch</span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,6rem)] font-bold tracking-tight text-[#171815] leading-[1.04]">
              STORIES &<br />
              <span className="italic font-normal text-[#2A5412]">CRAFT INSIGHTS.</span>
            </h2>
          </div>

          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-bamboo-green uppercase tracking-[0.2em] group shrink-0"
          >
            <span>View All Stories ({stories.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Independent Magazine Layout: Large Feature + Side Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* Large Main Feature Story (7 cols) */}
          <article className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 xl:p-10 border-2 border-[#D8CBB6] shadow-[0_12px_40px_rgba(23,24,21,0.08)] hover:shadow-[0_20px_50px_rgba(30,50,8,0.18)] hover:border-forest/50 transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div className="aspect-[16/10] xl:aspect-[16/9.5] rounded-2xl overflow-hidden bg-[#FAF7F0] border border-[#E7E0D3] mb-6">
                <img
                  src={featureStory.image}
                  alt={featureStory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-[#4F722A] mb-3">
                <span className="uppercase font-bold tracking-wider text-forest bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#D8CBB6]">{featureStory.category}</span>
                <span>•</span>
                <span className="font-mono text-[#171815]/70 font-semibold">{featureStory.date}</span>
                <span>•</span>
                <span className="text-[#171815]/70">{featureStory.readTime}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#171815] group-hover:text-forest transition-colors leading-tight">
                <Link to={`/stories/${featureStory.slug}`}>
                  {featureStory.title}
                </Link>
              </h3>

              <p className="text-sm sm:text-base text-[#171815]/80 font-light mt-4 leading-relaxed">
                {featureStory.excerpt}
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-[#D8CBB6] flex items-center justify-between">
              <Link
                to={`/stories/${featureStory.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-[0.2em] group-hover:text-bamboo-green"
              >
                <span>Read Feature Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-mono text-[#4F722A] font-semibold">Featured Editorial</span>
            </div>
          </article>

          {/* Side Stack Stories (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {sideStories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-3xl p-6 xl:p-7 border-2 border-[#D8CBB6] shadow-[0_8px_30px_rgba(23,24,21,0.06)] hover:shadow-[0_16px_45px_rgba(30,50,8,0.14)] hover:border-forest/50 transition-all duration-300 group flex gap-5 items-center"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shrink-0 bg-[#FAF7F0] border border-[#E7E0D3] group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#4F722A] tracking-widest block">
                    {story.category}
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#171815] group-hover:text-forest transition-colors line-clamp-2 leading-snug">
                    <Link to={`/stories/${story.slug}`}>
                      {story.title}
                    </Link>
                  </h4>
                  <span className="text-[11px] text-[#171815]/60 block font-mono font-medium">
                    {story.date} • {story.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
