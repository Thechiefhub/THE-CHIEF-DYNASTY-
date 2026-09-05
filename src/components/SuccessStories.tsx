import React, { useState } from 'react';
import { SUCCESS_STORIES } from '../data';
import { SuccessStory } from '../types';
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle, Sparkles } from 'lucide-react';

interface SuccessStoriesProps {
  onInquire: () => void;
}

export default function SuccessStories({ onInquire }: SuccessStoriesProps) {
  const [activeStoryId, setActiveStoryId] = useState<string>(SUCCESS_STORIES[0].id);

  const activeStory = SUCCESS_STORIES.find(s => s.id === activeStoryId) || SUCCESS_STORIES[0];

  return (
    <div className="bg-white/[0.01] border border-white/10 p-6 lg:p-10 rounded-xl relative overflow-hidden">
      
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-0 w-[200px] h-[200px] bg-purple-900/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Editorial Vertical Navigation Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-2 border-r border-white/10 pr-0 lg:pr-8">
          <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-4">
            Select Service Area Engagement
          </div>
          <div className="space-y-2 flex-grow">
            {SUCCESS_STORIES.map((story) => {
              const isSelected = story.id === activeStoryId;
              return (
                <button
                  key={story.id}
                  onClick={() => setActiveStoryId(story.id)}
                  className={`w-full p-4 rounded-lg border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-950/20 border-purple-500 shadow-[0_4px_15px_rgba(109,40,217,0.15)]'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="text-[9px] font-mono font-bold text-purple-400 uppercase tracking-wider mb-1">
                    {story.serviceCategory}
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">
                    {story.clientName}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Showcase Case Study terminal */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Header meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#8B5CF6] font-bold uppercase tracking-widest block">
                  CASE STUDY REVEAL // {activeStory.serviceCategory.toUpperCase()}
                </span>
                <h4 className="text-xl font-black font-display text-white tracking-wide mt-1">
                  {activeStory.clientName}
                </h4>
              </div>
              
              {/* Highlight Metric Badge */}
              <div className="px-4 py-2 bg-purple-950/40 border border-purple-800/40 rounded-full text-center">
                <span className="text-xs font-black font-mono text-[#8B5CF6] tracking-tight block">
                  {activeStory.metric.toUpperCase()}
                </span>
                <span className="text-[8px] font-mono text-neutral-500 block font-bold tracking-wider uppercase mt-0.5">
                  Audited outcome
                </span>
              </div>
            </div>

            {/* Narrative Blocks (Challenge, Solution, Impact) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Challenge & Solution */}
              <div className="space-y-4">
                <div className="p-4 bg-black/40 border border-white/10 rounded-lg">
                  <span className="text-[9px] font-mono text-rose-400 font-bold tracking-wider uppercase block mb-1">
                    THE CLIENT CHALLENGE
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    {activeStory.challenge}
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/10 rounded-lg">
                  <span className="text-[9px] font-mono text-purple-400 font-bold tracking-wider uppercase block mb-1">
                    THE DYNASTY ADVISORY SOLUTION
                  </span>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    {activeStory.solution}
                  </p>
                </div>
              </div>

              {/* Graphic View and Outcomes */}
              <div className="space-y-4">
                <div className="relative aspect-video rounded overflow-hidden border border-white/10 bg-neutral-900">
                  <img
                    src={activeStory.image}
                    alt={activeStory.clientName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-4 bg-purple-950/10 border border-purple-900/20 rounded-lg">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-wider uppercase block mb-1">
                    MEASURABLE IMPACT ACHIEVED
                  </span>
                  <p className="text-white text-xs font-medium leading-relaxed">
                    {activeStory.impact}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Action Trigger Row */}
          <div className="border-t border-white/10 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[10px] text-neutral-500 font-light max-w-sm">
              * Active client engagement outcomes are verified and compiled following independent organizational audit processes.
            </span>
            <button
              onClick={onInquire}
              className="px-6 py-3 bg-[#6D28D9] hover:bg-[#8B5CF6] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:scale-102 transition-transform duration-200 cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>DISCUSS YOUR CHALLENGE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
