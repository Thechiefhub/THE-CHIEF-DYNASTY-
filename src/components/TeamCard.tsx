import React from 'react';
import { Linkedin, Twitter, Sparkles } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamCardProps {
  key?: string;
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group bg-[#0D0D0F] border border-neutral-900 hover:border-purple-900/30 p-6 flex flex-col sm:flex-row gap-6 transition-all duration-300">
      {/* Photo with subtle border overlays */}
      <div className="relative w-full sm:w-32 h-32 overflow-hidden bg-neutral-900 rounded shrink-0">
        <img
          src={member.image}
          alt={member.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 border border-purple-500/10 rounded pointer-events-none group-hover:border-purple-500/35 transition-colors"></div>
      </div>

      {/* Leadership Details */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          {/* Header */}
          <div className="flex flex-col gap-1 mb-3">
            <h4 className="text-white text-base font-bold tracking-wider font-display flex items-center gap-1.5">
              {member.name}
              {member.name.includes('PLACEHOLDER') && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-purple-950/40 border border-purple-800/30 rounded text-[9px] font-bold text-[#8B5CF6] tracking-widest uppercase">
                  <Sparkles className="w-2 h-2" /> PENDING
                </span>
              )}
            </h4>
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
              {member.position}
            </div>
          </div>

          {/* Biography */}
          <p className="text-neutral-400 text-xs font-light leading-relaxed mb-4">
            {member.bio}
          </p>
        </div>

        {/* Social interactions */}
        <div className="flex items-center gap-3 border-t border-neutral-900/60 pt-4 mt-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label={`${member.name} Twitter`}
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest ml-auto">
            THE CHIEF DYNASTY
          </span>
        </div>
      </div>
    </div>
  );
}
