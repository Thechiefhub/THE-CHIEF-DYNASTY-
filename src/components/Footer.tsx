import React from 'react';
import { ArrowUp, Instagram, Linkedin, Facebook, Youtube, ShieldAlert, Award, Sparkles, Network } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenLegal: (type: string) => void;
}

export default function Footer({ onNavigate, onOpenLegal }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 pt-20 pb-12 text-white relative overflow-hidden">
      {/* Decorative Glow on Footer */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-950/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] rounded-lg">
                <span className="text-white font-bold text-lg font-display">CD</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-widest font-display leading-tight">
                  THE CHIEF DYNASTY
                </div>
                <div className="text-xs text-neutral-400 font-medium tracking-wider">LIMITED</div>
              </div>
            </button>
            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
              "Building ideas. Creating impact. Shaping the future." The Chief Dynasty Limited is a diversified Nigerian multi-sector enterprise steering the next generation of African business.
            </p>
            {/* Social Icons (Clickable Placeholders) */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Official Instagram handle will be configured here.'); }}
                className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 hover:border-purple-600 flex items-center justify-center hover:text-purple-400 text-neutral-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Official LinkedIn organization page will be configured here.'); }}
                className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 hover:border-purple-600 flex items-center justify-center hover:text-purple-400 text-neutral-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Official Facebook page will be configured here.'); }}
                className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 hover:border-purple-600 flex items-center justify-center hover:text-purple-400 text-neutral-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Official X account will be configured here.'); }}
                className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 hover:border-purple-600 flex items-center justify-center hover:text-purple-400 text-neutral-400 transition-colors"
                title="X"
              >
                {/* Standard X / Twitter visual representation */}
                <span className="text-[10px] font-black font-mono">X</span>
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Official YouTube channel will be configured here.'); }}
                className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 hover:border-purple-600 flex items-center justify-center hover:text-purple-400 text-neutral-400 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
              QUICK PORTALS
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', view: 'home' },
                { label: 'About', view: 'about' },
                { label: 'What We Do', view: 'what-we-do' },
                { label: 'Our Brands', view: 'brands' },
                { label: 'Projects', view: 'projects' },
                { label: 'Insights', view: 'insights' },
                { label: 'Careers', view: 'careers' },
                { label: 'Contact', view: 'contact' },
              ].map((link) => (
                <li key={link.view}>
                  <button
                    onClick={() => onNavigate(link.view)}
                    className="text-neutral-400 hover:text-[#8B5CF6] text-xs font-semibold tracking-wider hover:translate-x-1 transition-all cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Arms Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
              OUR ECOSYSTEM
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="flex items-start gap-2.5 text-left group cursor-pointer"
                >
                  <Award className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white group-hover:text-purple-300 text-xs font-bold tracking-wider transition-colors">
                      The Elite Conference
                    </div>
                    <div className="text-neutral-500 text-[10px] font-medium tracking-wide">
                      Youth, Education, Leadership Impact
                    </div>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="flex items-start gap-2.5 text-left group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white group-hover:text-purple-300 text-xs font-bold tracking-wider transition-colors">
                      The Chief Hub
                    </div>
                    <div className="text-neutral-500 text-[10px] font-medium tracking-wide">
                      PR, Content Strategy, Copy Powerhouse
                    </div>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('brands')}
                  className="flex items-start gap-2.5 text-left group cursor-pointer"
                >
                  <Network className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white group-hover:text-purple-300 text-xs font-bold tracking-wider transition-colors">
                      THE AFRICAINC
                    </div>
                    <div className="text-neutral-500 text-[10px] font-medium tracking-wide">
                      African Ecosystem & Venture Showcase
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
              COMMUNITY DIGEST
            </h4>
            <p className="text-neutral-400 text-xs font-light leading-relaxed">
              Stay connected to the Dynasty. Subscribe to receive our multi-sector insights and program announcements.
            </p>
            <div className="pt-2">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Legal & Copyright Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 text-xs text-neutral-500">
          <div>
            © 2026 The Chief Dynasty Limited. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap gap-5">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button
              onClick={() => onOpenLegal('cookie')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors group cursor-pointer"
            aria-label="Back to top"
          >
            <span className="font-bold tracking-widest text-[10px]">SCROLL TO TOP</span>
            <div className="p-1.5 bg-neutral-900 rounded group-hover:bg-purple-950/20 transition-colors">
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
