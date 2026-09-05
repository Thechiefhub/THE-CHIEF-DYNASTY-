import React from 'react';

interface SectionHeaderProps {
  num?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  lightBg?: boolean;
}

export default function SectionHeader({
  num,
  eyebrow,
  title,
  subtitle,
  lightBg = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 max-w-4xl">
      {/* Visual Alignment Container */}
      <div className="flex items-start gap-4 mb-4">
        {num && (
          <span className={`text-xs font-mono font-bold tracking-widest ${
            lightBg ? 'text-purple-600' : 'text-[#8B5CF6]'
          }`}>
            {num} //
          </span>
        )}
        {eyebrow && (
          <span className={`text-xs font-bold tracking-widest uppercase ${
            lightBg ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {eyebrow}
          </span>
        )}
      </div>

      {/* Bold Display Heading */}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none font-display ${
        lightBg ? 'text-[#050505]' : 'text-white'
      }`}>
        {title}
      </h2>

      {/* Structural Spacer Line */}
      <div className={`w-12 h-[2px] my-6 bg-gradient-to-r ${
        lightBg ? 'from-[#6D28D9] to-transparent' : 'from-[#8B5CF6] to-transparent'
      }`}></div>

      {/* Narrative Subtitle */}
      {subtitle && (
        <p className={`text-base sm:text-lg font-light leading-relaxed max-w-2xl ${
          lightBg ? 'text-neutral-600' : 'text-neutral-400'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
