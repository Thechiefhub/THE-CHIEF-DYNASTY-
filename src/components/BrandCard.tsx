import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, Network, Award } from 'lucide-react';
import { Brand } from '../types';

interface BrandCardProps {
  key?: string;
  brand: Brand;
  onExplore: (id: string) => void;
}

export default function BrandCard({ brand, onExplore }: BrandCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Map specific icons for each brand for editorial look
  const getBrandIcon = (id: string) => {
    switch (id) {
      case 'elite-conference':
        return <Award className="w-5 h-5 text-[#8B5CF6]" />;
      case 'chief-hub':
        return <Sparkles className="w-5 h-5 text-[#8B5CF6]" />;
      case 'africainc':
        return <Network className="w-5 h-5 text-[#8B5CF6]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x: x * 12, y: y * 12 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const cardStyle = {
    transform: isHovered
      ? `translate3d(${coords.x}px, ${coords.y}px, 0) scale3d(1.03, 1.03, 1.03)`
      : 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    transition: isHovered
      ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s'
      : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s',
    borderLeftColor: brand.color || '#6D28D9',
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onExplore(brand.id)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={`group relative bg-white/[0.02] border p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden rounded-xl border-l-2 ${
        isHovered
          ? 'border-purple-500/50 shadow-[0_0_35px_rgba(109,40,217,0.35)] bg-white/[0.04]'
          : 'border-white/10'
      }`}
    >
      {/* Interactive cursor tracking purple glow */}
      <div
        className="absolute w-48 h-48 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${brand.color || '#8B5CF6'}1f 0%, transparent 70%)`,
          left: `${(coords.x / 12 + 0.5) * 100}%`,
          top: `${(coords.y / 12 + 0.5) * 100}%`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 1 : 0.3,
        }}
      ></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
            DYNASTY ARM // {brand.id.toUpperCase()}
          </div>
          <div className="p-2 bg-black/40 rounded border border-white/10">
            {getBrandIcon(brand.id)}
          </div>
        </div>

        <h3 className="text-2xl font-black font-display text-white tracking-wide mb-3 group-hover:text-purple-400 transition-colors">
          {brand.name}
        </h3>

        <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors">
          {brand.tagline}
        </p>

        {/* Vertical bullet points preview */}
        <div className="border-t border-white/10 pt-6 mb-8">
          <div className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-4">
            Core Verticals
          </div>
          <ul className="space-y-2">
            {brand.verticals.slice(0, 3).map((area, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-400 font-light">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: brand.color }}
                ></span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-2 text-xs font-bold tracking-widest text-[#8B5CF6] group-hover:text-white uppercase transition-colors duration-300">
        <span>ENTER BRAND HUB</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </div>
  );
}
