import React, { useState, useEffect } from 'react';
import { ArrowDown, GraduationCap, Megaphone, TrendingUp, Calendar, Cpu, Globe } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onWorkClick: () => void;
}

export default function Hero({ onExploreClick, onWorkClick }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["FUTURE.", "CONTINENT.", "DYNASTY.", "INDUSTRIES."];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const sectors = [
    { label: 'Education', icon: GraduationCap, delay: '0.1s' },
    { label: 'Media', icon: Megaphone, delay: '0.2s' },
    { label: 'Business', icon: TrendingUp, delay: '0.3s' },
    { label: 'Technology', icon: Cpu, delay: '0.4s' },
    { label: 'Events', icon: Calendar, delay: '0.5s' },
    { label: 'Africa', icon: Globe, delay: '0.6s' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Sleek Interface Ambient Spotlights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6D28D9] rounded-full filter blur-[180px] opacity-20 -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4C1D95] rounded-full filter blur-[150px] opacity-10 -ml-20 -mb-20 pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-between flex-grow">
        <div className="my-auto max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Tagline Indicator with Sleek Interface style */}
          <div className="inline-flex items-center gap-2.5 border border-purple-500/20 bg-purple-950/20 text-[#a78bfa] px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_4px_20px_rgba(109,40,217,0.15)] animate-classy-fade-up select-none shimmer-pill hover:border-purple-500/40 hover:shadow-[0_4px_30px_rgba(139,92,246,0.25)] transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse"></span>
            NIGERIAN MULTI-SECTOR ENTERPRISE
          </div>

          {/* Majestic Bold Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[1.0] tracking-tighter mb-8 font-display">
            BUILDING IDEAS.<br />
            CREATING IMPACT.<br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-white">
              SHAPING THE&nbsp;
            </span>
            <span key={wordIndex} className="inline-block animate-classy-fade-up text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-purple-300 to-white">
              {words[wordIndex]}
            </span>
          </h1>

          {/* Balanced Supporting Statement */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light text-center">
            The Chief Dynasty is a premium African corporate group building platforms, brands, and opportunities across education, media, consulting, and digital innovation.
          </p>

          {/* Action Callouts in Sleek Rounded-Full Theme */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center items-center">
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-white hover:bg-neutral-200 text-black text-xs font-bold tracking-widest uppercase rounded-full shadow-[0_4px_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-center"
            >
              Explore The Dynasty
            </button>
            <button
              onClick={onWorkClick}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer text-center"
            >
              Our Capabilities
            </button>
          </div>
        </div>

        {/* Continuous Smooth Sliding Sector indicators at the bottom */}
        <div className="border-t border-white/10 pt-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-3 text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-[1px] bg-white/20"></span>
              Strategic Focus Areas
            </div>
            
            {/* Smooth Marquee Slider Container */}
            <div className="lg:col-span-9 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="animate-marquee flex gap-4">
                {/* Render sectors twice to create seamless infinite sliding loop */}
                {[...sectors, ...sectors].map((sector, idx) => (
                  <div
                    key={`${sector.label}-${idx}`}
                    className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#6D28D9] hover:bg-white/10 transition-all duration-300 group cursor-pointer shrink-0"
                  >
                    <sector.icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-bold tracking-wider text-white/70 group-hover:text-white transition-colors">
                      {sector.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical scrolling prompt */}
      <div className="absolute bottom-6 left-6 hidden xl:flex flex-col items-center gap-3">
        <div className="w-[1px] h-10 bg-gradient-to-b from-neutral-800 to-transparent"></div>
        <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest [writing-mode:vertical-lr]">
          SCROLL
        </span>
      </div>
    </section>
  );
}
