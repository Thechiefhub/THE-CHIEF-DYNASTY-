import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  key?: string;
  article: Article;
  onRead: (article: Article) => void;
}

export default function ArticleCard({ article, onRead }: ArticleCardProps) {
  return (
    <article
      onClick={() => onRead(article)}
      className="group bg-[#050505] border border-neutral-900 hover:border-purple-900/30 overflow-hidden flex flex-col md:flex-row gap-6 p-6 transition-all duration-300 cursor-pointer"
    >
      {/* Featured Image */}
      <div className="w-full md:w-1/3 aspect-video md:aspect-square overflow-hidden bg-neutral-900 shrink-0">
        <img
          src={article.image}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Article Content */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400">
              {article.category}
            </span>
            <span className="text-neutral-600 text-xs">•</span>
            <span className="text-neutral-500 text-xs font-medium">{article.date}</span>
            <span className="text-neutral-600 text-xs">•</span>
            <span className="text-neutral-500 text-xs font-medium">{article.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider mb-2 font-display leading-snug group-hover:text-purple-300 transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        {/* Footer Area with Author & Action */}
        <div className="flex items-center justify-between border-t border-neutral-900/60 pt-4 mt-4">
          <span className="text-xs font-bold tracking-wide text-neutral-500 uppercase">
            By {article.author}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#8B5CF6] group-hover:text-white uppercase transition-colors">
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
}
