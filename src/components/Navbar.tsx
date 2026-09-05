import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Navbar({ activeView, setActiveView, onNavigateToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', value: 'home' },
    { label: 'ABOUT', value: 'about' },
    { label: 'WHAT WE DO', value: 'what-we-do' },
    { label: 'OUR BRANDS', value: 'brands' },
    { label: 'PROJECTS', value: 'projects' },
    { label: 'INSIGHTS', value: 'insights' },
    { label: 'CAREERS', value: 'careers' },
    { label: 'CONTACT', value: 'contact' },
  ];

  const handleNavClick = (view: string) => {
    setIsOpen(false);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-md border-white/10 py-4 shadow-xl'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
          aria-label="The Chief Dynasty Limited Home"
        >
          <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-sm shadow-[0_0_15px_rgba(109,40,217,0.3)] transition-transform duration-300 group-hover:scale-105">
            <span className="text-white font-bold text-xs font-display tracking-wider">CD</span>
            <div className="absolute -inset-0.5 rounded-sm bg-[#8B5CF6]/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <div className="text-white font-bold text-xs tracking-widest font-display leading-tight group-hover:text-[#8B5CF6] transition-colors duration-200">
              THE CHIEF DYNASTY
            </div>
            <div className="text-[10px] text-neutral-400 font-medium tracking-wider">LIMITED</div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-xs font-semibold tracking-widest hover:text-white transition-colors duration-200 relative py-1 cursor-pointer ${
                activeView === item.value ? 'text-white' : 'text-white/70'
              }`}
            >
              {item.label}
              {activeView === item.value && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6]"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#6D28D9] hover:bg-[#8B5CF6] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-[0_4px_20px_rgba(109,40,217,0.25)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            WORK WITH US
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Animated Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#050505] z-40 flex flex-col justify-between border-t border-purple-950/40 p-6 animate-fade-in">
          <div className="flex flex-col gap-6 py-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-lg font-display font-semibold tracking-wider text-left py-2 hover:text-purple-400 transition-colors cursor-pointer ${
                  activeView === item.value
                    ? 'text-purple-400 border-l-2 border-purple-500 pl-3'
                    : 'text-neutral-300 pl-0'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-neutral-900 pt-6 pb-12 flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full justify-center flex items-center gap-2 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white text-sm font-bold tracking-widest uppercase py-4 rounded-md shadow-lg"
            >
              WORK WITH US
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-[#8B5CF6]" />
              THE CHIEF DYNASTY LIMITED • EST. 2026
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
