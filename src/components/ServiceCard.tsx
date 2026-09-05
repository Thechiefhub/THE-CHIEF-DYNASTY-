import React, { useState, useRef } from 'react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  key?: string;
  service: Service;
  onExplore: (id: string) => void;
}

export default function ServiceCard({ service, onExplore }: ServiceCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Dynamically resolve icon
  const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative position inside the card from -0.5 to 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Magnetic translation parameters (max 6px offset)
    setCoords({ x: x * 12, y: y * 12 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Build the magnetic tilt/translate transform style
  const cardStyle = {
    transform: isHovered
      ? `translate3d(${coords.x}px, ${coords.y}px, 0) scale3d(1.03, 1.03, 1.03)`
      : 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    transition: isHovered
      ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s'
      : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s',
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onExplore(service.id)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={`group relative bg-white/[0.02] border p-8 flex flex-col justify-between min-h-[280px] cursor-pointer overflow-hidden rounded-xl ${
        isHovered
          ? 'border-purple-500/50 shadow-[0_0_35px_rgba(109,40,217,0.3)] bg-white/[0.04]'
          : 'border-white/10'
      }`}
    >
      {/* Illuminated Purple Radial Spotlight chasing cursor */}
      <div
        className="absolute w-44 h-44 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          left: `${(coords.x / 12 + 0.5) * 100}%`,
          top: `${(coords.y / 12 + 0.5) * 100}%`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 1 : 0.4,
        }}
      ></div>

      <div className="relative z-10">
        {/* Animated Icon Wrapper */}
        <div className="w-12 h-12 flex items-center justify-center bg-purple-950/20 border border-white/10 rounded-lg mb-8 group-hover:scale-105 group-hover:bg-purple-900/30 group-hover:border-purple-500/30 transition-all duration-300">
          <IconComponent className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
        </div>

        {/* Title */}
        <h3 className="text-white text-lg font-bold tracking-wider mb-4 font-display group-hover:text-purple-400 transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-neutral-400 text-sm leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
          {service.description}
        </p>
      </div>

      {/* Explore capability CTA */}
      <div className="mt-8 relative z-10 flex items-center gap-2 text-xs font-bold tracking-widest text-[#8B5CF6] group-hover:text-white uppercase transition-colors duration-300">
        <span>EXPLORE CAPABILITY</span>
        <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </div>
  );
}
