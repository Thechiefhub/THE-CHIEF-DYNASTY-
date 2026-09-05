import React from 'react';
import { ArrowLeft, Target, Sparkles, Award, Globe, HelpCircle, Network, Users, BookOpen } from 'lucide-react';
import { Brand } from '../types';

interface BrandDeepDiveProps {
  brand: Brand;
  onBack: () => void;
  onInquire: (subject: string) => void;
}

export default function BrandDeepDive({ brand, onBack, onInquire }: BrandDeepDiveProps) {
  const getBrandIcon = (id: string) => {
    switch (id) {
      case 'elite-conference':
        return <Award className="w-12 h-12 text-[#8B5CF6]" />;
      case 'chief-hub':
        return <Sparkles className="w-12 h-12 text-[#6D28D9]" />;
      case 'africainc':
        return <Network className="w-12 h-12 text-purple-400" />;
      default:
        return <HelpCircle className="w-12 h-12 text-purple-300" />;
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-28 pb-20 animate-fade-in">
      {/* Soft Decorative Ambient Spotlights */}
      <div
        className="absolute top-20 right-10 w-[350px] h-[350px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: brand.color }}
      ></div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-400 hover:text-white uppercase mb-10 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          <span>BACK TO ECOSYSTEM</span>
        </button>

        {/* Brand Banner Profile */}
        <div className="border-b border-neutral-900 pb-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="text-[10px] font-mono font-bold tracking-widest text-purple-400 uppercase">
                DYNASTY CORE PORTFOLIO
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display text-white">
                {brand.name}
              </h1>
              <div className="text-sm md:text-base font-bold tracking-wider text-[#8B5CF6] uppercase">
                {brand.tagline}
              </div>
              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed pt-2">
                {brand.longDescription}
              </p>
            </div>

            {/* Accent Brand Icon Area */}
            <div
              className="p-5 rounded-lg border border-neutral-800 shrink-0 shadow-lg"
              style={{ borderColor: `${brand.color}25`, backgroundColor: '#0D0D0F' }}
            >
              {getBrandIcon(brand.id)}
            </div>
          </div>
        </div>

        {/* Deep Dive Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Focus areas & Verticals */}
          <div className="lg:col-span-7 space-y-10">
            {/* Verticals Section */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Strategic Verticals & Action Channels
              </h3>
              <ul className="space-y-4">
                {brand.verticals.map((v, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-[#0D0D0F] border border-neutral-900 rounded"
                  >
                    <div className="w-6 h-6 rounded-full bg-purple-950/30 border border-purple-800/30 flex items-center justify-center text-[10px] font-bold text-[#8B5CF6] shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-neutral-300 text-sm font-light leading-relaxed">
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Milestones */}
            <div className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-950/10 blur-xl rounded-full"></div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-3">
                MISSION STATEMENT & MEASURE
              </h4>
              <p className="text-white text-base font-bold tracking-wide mb-2 font-display">
                {brand.impactStatement}
              </p>
              <p className="text-neutral-400 text-xs font-light">
                This impact marker serves as a verified focus within our multi-sector digital enterprise, updated regularly with real-time field audits.
              </p>
            </div>
          </div>

          {/* Right Column: Parameters, Audience, Objectives */}
          <div className="lg:col-span-5 space-y-10">
            {/* Target Audience Profile */}
            <div className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-400 uppercase mb-4">
                <Users className="w-4 h-4 text-purple-500" />
                <span>Target Audience / Affiliation</span>
              </div>
              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                {brand.audience}
              </p>
            </div>

            {/* Strategic Objectives */}
            <div className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-neutral-400 uppercase mb-4">
                <Target className="w-4 h-4 text-purple-500" />
                <span>Core Ecosystem Objectives</span>
              </div>
              <ul className="space-y-3.5">
                {brand.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400 font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA box */}
            <div className="p-8 bg-gradient-to-br from-[#0D0D0F] to-[#050505] border border-purple-950/40 rounded text-center space-y-6">
              <h4 className="text-base font-bold tracking-wider font-display text-white">
                Sponsor or Partner with {brand.name}
              </h4>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">
                Let's construct opportunities that transcend standard corporate projects. We welcome brands, founders, and institutions looking to collaborate on major regional campaigns.
              </p>
              <button
                onClick={() => onInquire(`Collaboration on ${brand.name}`)}
                className="w-full py-3.5 bg-[#8B5CF6] hover:bg-[#6D28D9] text-white text-xs font-bold tracking-widest uppercase rounded shadow transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                Inquire About {brand.id === 'elite-conference' ? 'Sponsorship' : 'Collaboration'}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Showcase layout for THE AFRICAINC CMS */}
        {brand.id === 'africainc' && (
          <div className="mt-16 pt-16 border-t border-neutral-900 space-y-6 animate-fade-in">
            <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              THE AFRICAINC: Strategic Ecosystem Initiatives (CMS-driven)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-500">INITIATIVE // REGISTER</span>
                <h4 className="text-white text-sm font-bold tracking-wider mt-2 mb-3">African Venture Showcases</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Interactive catalogs featuring early-stage African ingenuity, startup developments, and investor advisory reports. (Pending integration)
                </p>
              </div>
              <div className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-500">PROGRAM // REGISTER</span>
                <h4 className="text-white text-sm font-bold tracking-wider mt-2 mb-3">AfricaInc Innovation Cohorts</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Cooperative platforms matching startup researchers, cross-border technologists, and multi-sector enterprise leaders. (Pending integration)
                </p>
              </div>
            </div>
            <div className="p-4 bg-purple-950/10 border border-purple-900/30 text-center rounded text-xs text-neutral-400 font-light">
              This section is configured as a flexible cms layer. Additional ecosystem programs, databases, and research reports will be automatically appended upon server synchronization.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
