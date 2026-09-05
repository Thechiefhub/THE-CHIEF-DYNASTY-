import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onOpenDetail: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    <div
      onClick={() => onOpenDetail(project)}
      className="group bg-[#0D0D0F] border border-neutral-900 hover:border-purple-900/40 overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer h-full"
    >
      <div>
        {/* Visual Aspect Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60"></div>
          
          {/* Top category indicator */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#050505]/90 border border-neutral-800 text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400">
              {project.category}
            </span>
            <span className="px-2.5 py-1 bg-[#050505]/90 border border-neutral-800 text-[10px] font-mono font-bold tracking-widest text-neutral-400">
              {project.year}
            </span>
          </div>
        </div>

        {/* Text Area */}
        <div className="p-6">
          <h4 className="text-white text-lg font-bold tracking-wider mb-2 font-display group-hover:text-purple-400 transition-colors">
            {project.name}
          </h4>
          <p className="text-neutral-400 text-sm font-light leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Impact summary & CTA */}
      <div className="border-t border-neutral-900/60 p-6 flex items-center justify-between mt-auto">
        <div className="text-xs font-semibold text-neutral-400 tracking-wider">
          <span className="text-[#8B5CF6] font-bold">Impact: </span>
          <span className="line-clamp-1">{project.impact}</span>
        </div>
        <div className="p-2 bg-neutral-900/50 group-hover:bg-purple-950/20 group-hover:border-purple-800/40 border border-neutral-800 rounded transition-colors duration-300">
          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-purple-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}
