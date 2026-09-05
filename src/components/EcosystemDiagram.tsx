import React, { useState } from 'react';
import { ArrowDown, Network, Sparkles, Award, TrendingUp, Calendar, Cpu, ChevronRight, ArrowUpRight } from 'lucide-react';

interface EcosystemNode {
  id: string;
  name: string;
  type: 'core' | 'brand' | 'vertical';
  description: string;
  icon: any;
  color: string;
}

interface EcosystemDiagramProps {
  onNavigate?: (view: string, subId?: string | null) => void;
}

export default function EcosystemDiagram({ onNavigate }: EcosystemDiagramProps) {
  const [activeNode, setActiveNode] = useState<string | null>('chief-dynasty');

  const nodes: EcosystemNode[] = [
    {
      id: 'chief-dynasty',
      name: 'THE CHIEF DYNASTY',
      type: 'core',
      description: 'Umbrella Multi-Sector Enterprise steering strategic policy, governance, corporate capital allocation, and group compliance.',
      icon: Network,
      color: '#6D28D9'
    },
    // Brands
    {
      id: 'elite-conference',
      name: 'THE ELITE CONFERENCE',
      type: 'brand',
      description: 'Impact-driven student and youth development network, leadership summits, and scholarship campaigns across communities.',
      icon: Award,
      color: '#8B5CF6'
    },
    {
      id: 'chief-hub',
      name: 'THE CHIEF HUB',
      type: 'brand',
      description: 'Creative and communications powerhouse delivering public relations, elite brand storytelling, and corporate communications.',
      icon: Sparkles,
      color: '#6D28D9'
    },
    {
      id: 'africainc',
      name: 'THE AFRICAINC',
      type: 'brand',
      description: 'Venture exploration, startup database reporting, and regional commercial advisory dashboards across West Africa.',
      icon: Network,
      color: '#4C1D95'
    },
    // Verticals
    {
      id: 'consulting',
      name: 'STRATEGIC CONSULTING',
      type: 'vertical',
      description: 'High-performance corporate scaling maps, policy research, and legal framework compliance planning.',
      icon: TrendingUp,
      color: '#a78bfa'
    },
    {
      id: 'projects-events',
      name: 'PROJECTS & EVENTS',
      type: 'vertical',
      description: 'End-to-end conference curation, corporate panels, summits, orientation workshops, and media experiences.',
      icon: Calendar,
      color: '#c084fc'
    },
    {
      id: 'digital-services',
      name: 'DIGITAL SERVICES',
      type: 'vertical',
      description: 'Custom portal architectures, database-driven web applications, and premium localized digital system configurations.',
      icon: Cpu,
      color: '#e9d5ff'
    }
  ];

  const handleNodeClick = (id: string) => {
    setActiveNode(id);
  };

  const handleActionClick = (node: EcosystemNode) => {
    if (!onNavigate) return;
    if (node.type === 'core') {
      onNavigate('about');
    } else if (node.type === 'brand') {
      onNavigate('brands', node.id);
    } else if (node.type === 'vertical') {
      onNavigate('what-we-do');
    }
  };

  const selectedNode = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <div className="bg-[#0D0D0F]/40 border border-white/10 p-8 lg:p-12 rounded-xl relative overflow-hidden">
      {/* Subtle Glowing Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Interactive Flow-Diagram Diagram */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Main Core Node */}
          <button
            onClick={() => handleNodeClick('chief-dynasty')}
            onMouseEnter={() => handleNodeClick('chief-dynasty')}
            className={`group relative z-10 p-5 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 w-full max-w-[280px] text-center ${
              activeNode === 'chief-dynasty'
                ? 'bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] border-purple-400/50 shadow-[0_0_30px_rgba(109,40,217,0.4)] scale-105'
                : 'bg-white/[0.02] border-white/10 hover:border-purple-800/60'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-900/60 flex items-center justify-center border border-white/5">
              <Network className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-400">HOLDING ENTITY</span>
            <span className="text-sm font-black tracking-widest text-white">THE CHIEF DYNASTY</span>
          </button>

          {/* Flow Lines to Brands */}
          <div className="flex flex-col items-center my-4">
            <ArrowDown className="w-5 h-5 text-purple-950 animate-bounce" />
            <span className="text-[9px] font-mono text-neutral-500 font-bold tracking-widest uppercase">Ecosystem Arms</span>
          </div>

          {/* Brands Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
            {nodes.filter(n => n.type === 'brand').map(brand => {
              const BrandIcon = brand.icon;
              const isSelected = activeNode === brand.id;
              return (
                <button
                  key={brand.id}
                  onClick={() => handleNodeClick(brand.id)}
                  onMouseEnter={() => handleNodeClick(brand.id)}
                  className={`group p-4 border rounded-xl flex flex-col items-center gap-2 text-center transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-950/20 border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.25)] scale-102'
                      : 'bg-white/[0.01] border-white/10 hover:border-purple-950/70'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center border"
                    style={{ borderColor: isSelected ? brand.color : '#1e1b4b' }}
                  >
                    <BrandIcon className="w-4 h-4" style={{ color: brand.color }} />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-white line-clamp-1">{brand.name}</span>
                </button>
              );
            })}
          </div>

          {/* Flow Lines to Verticals */}
          <div className="flex flex-col items-center my-4">
            <ArrowDown className="w-5 h-5 text-purple-950" />
            <span className="text-[9px] font-mono text-neutral-500 font-bold tracking-widest uppercase">Strategic Verticals</span>
          </div>

          {/* Verticals Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            {nodes.filter(n => n.type === 'vertical').map(vert => {
              const VertIcon = vert.icon;
              const isSelected = activeNode === vert.id;
              return (
                <button
                  key={vert.id}
                  onClick={() => handleNodeClick(vert.id)}
                  onMouseEnter={() => handleNodeClick(vert.id)}
                  className={`group p-3 border rounded-xl flex items-center gap-3 text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-950/10 border-purple-500/50'
                      : 'bg-white/[0.01] border-white/10 hover:border-purple-950/40'
                  }`}
                >
                  <div className="w-6 h-6 rounded bg-purple-950/10 flex items-center justify-center border border-purple-900/20 shrink-0">
                    <VertIcon className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-neutral-300 group-hover:text-white transition-colors">{vert.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Side: Interactive Explainer Terminal */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-black/40 border border-white/10 p-6 rounded-xl min-h-[360px] relative backdrop-blur-md">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] animate-pulse"></span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                  DYNASTY MAP ARCHITECTURE
                </span>
              </div>
              <span className="text-[9px] font-mono font-bold text-[#8B5CF6] bg-purple-950/30 px-2 py-0.5 rounded border border-purple-900/40">
                {selectedNode.type.toUpperCase()}
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-wide text-white font-display">
                {selectedNode.name}
              </h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                {selectedNode.description}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-5 mt-6 space-y-4">
            {onNavigate && (
              <button
                onClick={() => handleActionClick(selectedNode)}
                className="w-full py-3 bg-[#6D28D9] hover:bg-[#8B5CF6] text-white text-xs font-bold tracking-widest uppercase rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>EXPLORE DIVISION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
            
            <div className="flex items-center justify-between text-[10px] text-neutral-500">
              <span className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-[#8B5CF6]" />
                Hover or click any node to probe connections
              </span>
              <span className="text-[#8B5CF6] font-bold">EST. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
