import React from 'react';
import { MapPin, Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { CareerOpportunity } from '../types';

interface CareerCardProps {
  key?: string;
  career: CareerOpportunity;
  onApply: (career: CareerOpportunity) => void;
}

export default function CareerCard({ career, onApply }: CareerCardProps) {
  return (
    <div className="group bg-[#0D0D0F] border border-neutral-900 hover:border-purple-900/30 p-8 flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Header tags */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="px-2.5 py-1 bg-purple-950/30 border border-purple-900/20 text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400">
            {career.department}
          </span>
          <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
            {career.type}
          </span>
        </div>

        {/* Position Title */}
        <h4 className="text-white text-xl font-bold tracking-wider mb-3 font-display group-hover:text-purple-300 transition-colors">
          {career.position}
        </h4>

        {/* Location / Meta */}
        <div className="flex flex-wrap gap-4 text-xs text-neutral-500 font-medium mb-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-purple-500" />
            <span>{career.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-purple-500" />
            <span>Apply by: {career.deadline}</span>
          </div>
        </div>

        {/* Job Description */}
        <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
          {career.description}
        </p>

        {/* Key Requirements Preview */}
        <div className="border-t border-neutral-900/60 pt-6 mb-8">
          <div className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-3">
            Core Requirements
          </div>
          <ul className="space-y-2">
            {career.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-neutral-400 font-light">
                <span className="w-1 h-1 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Apply Trigger */}
      <button
        onClick={() => onApply(career)}
        className="w-full mt-4 group/btn flex items-center justify-center gap-2 py-3 bg-neutral-900 hover:bg-[#8B5CF6] border border-neutral-800 hover:border-transparent text-white hover:text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 active:scale-[0.98] cursor-pointer"
      >
        <span>APPLY FOR ROLE</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
      </button>
    </div>
  );
}
