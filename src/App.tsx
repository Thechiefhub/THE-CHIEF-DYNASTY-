import React, { useState, useEffect } from 'react';
import {
  SERVICES,
  BRANDS,
  PILLARS,
  QUALITATIVE_IMPACT,
  PROJECTS,
  ARTICLES,
  CAREER_OPPORTUNITIES,
  LEADERSHIP_PLACEHOLDERS,
  OFFICE_PLACEHOLDERS,
} from './data';
import { Project, Article, CareerOpportunity, Brand } from './types';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ServiceCard from './components/ServiceCard';
import BrandCard from './components/BrandCard';
import ProjectCard from './components/ProjectCard';
import ArticleCard from './components/ArticleCard';
import TeamCard from './components/TeamCard';
import CareerCard from './components/CareerCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BrandDeepDive from './components/BrandDeepDive';
import EcosystemDiagram from './components/EcosystemDiagram';
import SuccessStories from './components/SuccessStories';

// Lucide Icons
import {
  ArrowRight,
  TrendingUp,
  Cpu,
  Award,
  Globe,
  Sparkles,
  ArrowUpRight,
  Check,
  Search,
  Filter,
  CheckCircle,
  FileText,
  Mail,
  MapPin,
  X,
  MapIcon,
} from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeView, setActiveView] = useState<string>('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  
  // Selection states for modal deep-dives or sub-views
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<CareerOpportunity | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookie' | null>(null);

  // Search & Filtering States
  const [projectFilter, setProjectFilter] = useState<string>('all');
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [articleFilter, setArticleFilter] = useState<string>('all');
  const [articleSearch, setArticleSearch] = useState<string>('');

  // Career Application states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantCV, setApplicantCV] = useState<File | null>(null);
  const [applicantCoverLetter, setApplicantCoverLetter] = useState('');
  const [careerAppStatus, setCareerAppStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) {
      alert('Please fill in the required fields (Full Name and Email).');
      return;
    }
    setCareerAppStatus('success');
    setApplicantName('');
    setApplicantEmail('');
    setApplicantCoverLetter('');
    setApplicantCV(null);
  };

  // Navigate to top and change view helper
  const navigateToView = (view: string, subId?: string | null) => {
    setActiveView(view);
    setSelectedBrandId(subId || null);
    setSelectedArticle(null);
    setSelectedProject(null);
    setSelectedCareer(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeBrandObj = BRANDS.find((b) => b.id === selectedBrandId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#6D28D9] selection:text-white">
        {/* Ambient Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25"></div>

        <div className="text-center z-10 space-y-6 max-w-sm px-6 animate-fade-in">
          {/* Logo & Spinner Combined */}
          <div className="relative w-20 h-20 mx-auto mb-8">
            {/* Spinning Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/10 border-t-purple-500 animate-spin"></div>
            <div className="absolute inset-1.5 rounded-full border border-purple-950 border-b-purple-400 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
            {/* Pulsating Core */}
            <div className="absolute inset-3 bg-purple-950/40 border border-purple-800/20 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-purple-400 text-xs font-black font-mono">CD</span>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-2">
            <h2 className="text-sm font-black tracking-[0.3em] text-white font-display uppercase">
              THE CHIEF DYNASTY
            </h2>
            <div className="w-24 h-[1px] bg-purple-500/20 mx-auto"></div>
            <p className="text-[9px] font-mono font-bold text-neutral-500 tracking-[0.2em] uppercase">
              INITIALIZING PLATFORMS & VENTURES
            </p>
          </div>

          {/* High-fidelity Progress Simulation Indicator */}
          <div className="w-full h-1 bg-white/[0.03] rounded-full overflow-hidden border border-white/5 p-[1px]">
            <div className="h-full bg-gradient-to-r from-purple-800 via-[#8B5CF6] to-purple-400 rounded-full" style={{ width: '100%', animation: 'shimmer 1.2s infinite linear' }}>
              <div className="h-full w-full bg-purple-500/50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-[#6D28D9] selection:text-white overflow-x-hidden">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={navigateToView}
        onNavigateToSection={(secId) => {
          navigateToView('home');
          setTimeout(() => {
            const el = document.getElementById(secId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }}
      />

      {/* Primary Main Layout Frame */}
      <main className="flex-grow">
        
        {/* =========================================================================
            1. HOME VIEW 
            ========================================================================= */}
        {activeView === 'home' && (
          <div className="animate-fade-in">
            {/* 1. Hero Section */}
            <Hero
              onExploreClick={() => {
                navigateToView('brands');
              }}
              onWorkClick={() => {
                navigateToView('contact');
              }}
            />

            {/* 2. Dynasty Introduction */}
            <section id="dynasty-intro" className="py-24 bg-[#050505] border-t border-neutral-900/60 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                  <div className="lg:col-span-6">
                    <SectionHeader
                      num="01"
                      eyebrow="Introduction"
                      title="MORE THAN A COMPANY. A GROWING ECOSYSTEM."
                      subtitle="The Chief Dynasty Limited is a diversified Nigerian enterprise creating value across education, communications, consulting, events, digital services, and African innovation."
                    />
                  </div>
                  <div className="lg:col-span-6 border-l border-neutral-900 lg:pl-12">
                    <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                      We believe that Africa’s potential does not sit on some distant horizon—it is being engineered right now by its next generation. By coordinating multiple capabilities under a single strategic umbrella, we break down legacy operational silos and deliver structural results.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['IDEAS', 'STRATEGY', 'EXECUTION', 'IMPACT'].map((step, idx) => (
                        <div key={step} className="p-4 bg-[#0D0D0F] border border-neutral-950 rounded text-center">
                          <div className="text-xs font-mono font-bold text-purple-500 mb-1">0{idx + 1}</div>
                          <div className="text-xs font-bold tracking-wider text-white">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Flow Diagram */}
                <EcosystemDiagram onNavigate={navigateToView} />
              </div>
            </section>

            {/* 3. What We Do */}
            <section id="capabilities" className="py-24 bg-[#0D0D0F] border-t border-neutral-900/60">
              <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                  num="02"
                  eyebrow="Capabilities"
                  title="WHAT WE DO"
                  subtitle="We coordinate six multidisciplinary vertical capabilities engineered to consult, communicate, and create value."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES.map((srv, idx) => (
                    <div
                      key={srv.id}
                      className="animate-classy-fade-up opacity-0"
                      style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      <ServiceCard
                        service={srv}
                        onExplore={() => navigateToView('what-we-do')}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Our Ecosystem / Brands */}
            <section id="ecosystem" className="py-24 bg-[#050505] border-t border-neutral-900/60">
              <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                  num="03"
                  eyebrow="Portfolio Platforms"
                  title="THE ECOSYSTEM"
                  subtitle="Different missions. One Dynasty. Our specialized brands drive targeted impact across education, content storytelling, and continental innovation reports."
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {BRANDS.map((brand, idx) => (
                    <div
                      key={brand.id}
                      className="animate-classy-fade-up opacity-0"
                      style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
                    >
                      <BrandCard
                        brand={brand}
                        onExplore={(id) => {
                          setSelectedBrandId(id);
                          navigateToView('brands');
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Why The Dynasty */}
            <section id="why-dynasty" className="py-24 bg-[#0D0D0F] border-t border-neutral-900/60">
              <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                  num="04"
                  eyebrow="Our Mandate"
                  title="WHY THE DYNASTY?"
                  subtitle="We represent a brand position that blends corporate rigor with next-generation African ingenuity."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PILLARS.map((pillar, idx) => (
                    <div
                      key={pillar.num}
                      className="p-8 bg-[#050505] border border-white/10 hover:border-purple-500/40 rounded-xl transition-all duration-300 animate-classy-fade-up opacity-0"
                      style={{ animationDelay: `${idx * 120}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="text-4xl sm:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-purple-900 mb-6 tracking-tight">
                        {pillar.num}
                      </div>
                      <h4 className="text-white text-base font-bold tracking-wider mb-3 font-display">
                        {pillar.title}
                      </h4>
                      <p className="text-neutral-400 text-xs font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Impact Metrics (Qualitative & Audited) */}
            <section id="impact" className="py-24 bg-[#050505] border-t border-neutral-900/60">
              <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                  num="05"
                  eyebrow="Social Balance"
                  title="OUR IMPACT"
                  subtitle="Aligned to corporate truth, we maintain placeholder targets ready to connect to audited metrics. We communicate transparent outcomes."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {QUALITATIVE_IMPACT.map((m) => (
                    <div key={m.label} className="p-6 bg-[#0D0D0F] border border-neutral-900 text-left">
                      <div className="text-xs font-mono font-bold text-purple-400 mb-4 uppercase tracking-widest">
                        {m.label}
                      </div>
                      <div className="text-sm font-black font-mono text-neutral-300 mb-2">
                        {m.value}
                      </div>
                      <p className="text-neutral-500 text-xs font-light leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-purple-950/10 border border-purple-900/20 text-center text-xs text-neutral-400 max-w-3xl mx-auto rounded">
                  <strong>Verification Statement:</strong> Statistics and metrics will be updated following standard independent audits. No artificial accomplishments are declared.
                </div>
              </div>
            </section>

            {/* 6b. Client Success Stories */}
            <section id="success-stories" className="py-24 bg-[#050505] border-t border-white/10">
              <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                  num="06"
                  eyebrow="Proven Impact"
                  title="CLIENT SUCCESS STORIES"
                  subtitle="Verifiable case studies showcasing our solutions and measurable client metrics across educational outreach, media storytelling, and enterprise strategy."
                />
                
                <SuccessStories onInquire={() => navigateToView('contact')} />
              </div>
            </section>

            {/* 7. Featured Projects */}
            <section id="featured-projects" className="py-24 bg-[#0D0D0F] border-t border-neutral-900/60">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <SectionHeader
                    num="07"
                    eyebrow="Case Studies"
                    title="FEATURED PROJECTS"
                    subtitle="Selected strategic engagements executed across educational frameworks, narrative structures, and ecosystem research portals."
                  />
                  <button
                    onClick={() => navigateToView('projects')}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-purple-900/20 border border-neutral-800 hover:border-purple-800 text-white text-xs font-bold tracking-widest uppercase rounded transition-colors cursor-pointer shrink-0"
                  >
                    <span>VIEW ALL PORTFOLIO</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Showcase list of first 3 projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PROJECTS.slice(0, 3).map((proj) => (
                    <ProjectCard
                      key={proj.id}
                      project={proj}
                      onOpenDetail={(p) => setSelectedProject(p)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 8. Signature Initiatives (The Elite Conference) */}
            <section id="signature-initiatives" className="py-24 bg-[#050505] border-t border-neutral-900/60 relative">
              <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                  num="07"
                  eyebrow="Strategic Powerhouse"
                  title="SIGNATURE INITIATIVES"
                  subtitle="We run proprietary platforms addressing systemic skills gaps and narrative distribution across Africa."
                />

                <div className="bg-[#0D0D0F] border border-neutral-900 p-8 lg:p-12 rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <span className="px-3 py-1 bg-purple-950/40 border border-purple-800/30 rounded text-[10px] font-bold text-[#8B5CF6] tracking-widest uppercase inline-block">
                      FEATURED SOCIAL INITIATIVE
                    </span>
                    <h3 className="text-3xl font-black font-display text-white tracking-wide">
                      THE ELITE CONFERENCE
                    </h3>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed">
                      More than an event, it is an impact platform. Focus areas include youth development, scholar orientation, careers mentoring, entrepreneurship exposure, and structural future-readiness across high schools and community networks.
                    </p>
                    <div className="space-y-3">
                      {[
                        'Bridging career orientation gaps early',
                        'Mobilizing corporate scholarship networks',
                        'Cultivating strategic leadership mindsets',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-xs text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setSelectedBrandId('elite-conference');
                          navigateToView('brands');
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white text-xs font-bold tracking-widest uppercase rounded shadow transition-transform hover:scale-102 active:scale-0.98 cursor-pointer"
                      >
                        EXPLORE THE IMPACT PLATFORM
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="relative rounded overflow-hidden aspect-video border border-neutral-800">
                      <img
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
                        alt="The Elite Conference youth gathering representation"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50"></div>
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#050505]/90 border border-neutral-800 backdrop-blur-sm rounded">
                        <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
                          TARGET GEOGRAPHY
                        </div>
                        <div className="text-xs font-semibold text-white">
                          Secondary and tertiary institutions across Nigeria and regional West Africa hubs.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Insights Highlight */}
            <section id="insights-highlight" className="py-24 bg-[#0D0D0F] border-t border-neutral-900/60">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <SectionHeader
                    num="08"
                    eyebrow="Editorial Core"
                    title="INSIGHTS"
                    subtitle="Thought leadership, regional venture reports, and tactical essays published by our multi-sector strategists."
                  />
                  <button
                    onClick={() => navigateToView('insights')}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-purple-900/20 border border-neutral-800 hover:border-purple-800 text-white text-xs font-bold tracking-widest uppercase rounded transition-colors cursor-pointer shrink-0"
                  >
                    <span>EXPLORE ALL ESSAYS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {ARTICLES.slice(0, 2).map((art) => (
                    <ArticleCard
                      key={art.id}
                      article={art}
                      onRead={(a) => {
                        setSelectedArticle(a);
                        navigateToView('insights');
                      }}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 10. Partnership Section */}
            <section id="partnership" className="py-24 bg-[#050505] border-t border-neutral-900/60">
              <div className="max-w-7xl mx-auto px-6">
                <div className="p-8 lg:p-12 bg-gradient-to-br from-[#0D0D0F] to-[#050505] border border-neutral-900 rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-[10px] font-mono font-bold text-[#8B5CF6] tracking-widest uppercase">
                      BUILDING WITH PURPOSE
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-black font-display text-white tracking-wide leading-none">
                      LET'S BUILD SOMETHING THAT MATTERS.
                    </h3>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed">
                      We operate and align strategically with key local and international organizations. The Chief Dynasty Limited works across fields with:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {[
                        'Corporations & Brands',
                        'Governmental Institutions',
                        'NGOs & Development Agencies',
                        'Universities & Schools',
                        'Venture Investors & Startups',
                        'Ecosystem Builders',
                      ].map((partner) => (
                        <div key={partner} className="flex items-center gap-2.5 text-xs text-neutral-300">
                          <Check className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>{partner}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <button
                      onClick={() => navigateToView('contact')}
                      className="w-full py-4 bg-[#8B5CF6] hover:bg-[#6D28D9] text-white text-xs font-bold tracking-widest uppercase rounded shadow transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    >
                      Become a Partner
                    </button>
                    <button
                      onClick={() => navigateToView('contact')}
                      className="w-full py-4 bg-[#050505] border border-neutral-800 hover:border-purple-800 hover:bg-[#0D0D0F] text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 cursor-pointer"
                    >
                      Start a Conversation
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. Contact CTA Block */}
            <section className="py-20 bg-[#0D0D0F] border-t border-neutral-900 text-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#6D28D9]/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="max-w-3xl mx-auto px-6 space-y-6 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  READY TO ACCESS THE DYNASTY CORE?
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-lg mx-auto">
                  Enquire about consulting, content copywriting campaigns, school outreach sponsorship, or strategic investment portals.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => navigateToView('contact')}
                    className="px-8 py-4 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white text-xs font-bold tracking-widest uppercase rounded shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  >
                    Initiate Discussion
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}


        {/* =========================================================================
            2. ABOUT VIEW
            ========================================================================= */}
        {activeView === 'about' && (
          <section id="about-portal" className="py-24 bg-[#050505] animate-fade-in pt-32">
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Introduction Title */}
              <SectionHeader
                num="01"
                eyebrow="Our Story & Identity"
                title="WHO WE ARE"
                subtitle="The Chief Dynasty Limited is a premier Nigerian multi-sector professional services, innovation, media, education, consulting, project management and digital enterprise."
              />

              {/* Story Narrative */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-2xl font-black font-display text-white uppercase">
                    Our Story
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">
                    Founded in Nigeria with a clear continental objective, The Chief Dynasty Limited emerged to unify strategic business divisions into an elite collaborative model. We realized that modern business issues are too layered for single-focus companies. Strategic growth requires excellent copywriting storytelling, youth education orientation, precise digital systems, and structured management models.
                  </p>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">
                    Today, we steer platforms addressing the critical demands of Africa's massive rising economy—connecting students, founders, corporates, and global investors.
                  </p>
                </div>

                <div className="lg:col-span-6 bg-[#0D0D0F] border border-neutral-900 p-8 rounded space-y-6">
                  <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                    WHAT WE BELIEVE (MISSION & VISION)
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold tracking-wider text-white uppercase mb-1">
                        Our Mission
                      </div>
                      <p className="text-neutral-400 text-xs font-light leading-relaxed">
                        To turn ideas into platforms, platforms into opportunities, and opportunities into sustainable regional impact.
                      </p>
                    </div>
                    
                    <div className="border-t border-neutral-900 pt-4">
                      <div className="text-xs font-bold tracking-wider text-white uppercase mb-1">
                        Our Vision
                      </div>
                      <p className="text-neutral-400 text-xs font-light leading-relaxed">
                        To serve as the trusted digital and operational headquarters for multi-sector ventures that scale Africa's next generation to global standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Values */}
              <div className="mb-24">
                <h3 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest mb-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  OUR BELIEFS & VALUES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'INTEGRITY', desc: 'Operating with complete transparency, verified results, and uncompromising governance.' },
                    { title: 'EXCELLENCE', desc: 'Crafting premium, world-class outputs in professional consulting, content, and code.' },
                    { title: 'INNOVATION', desc: 'Designing modern approaches that actively address the parameters of tomorrow.' },
                    { title: 'IMPACT', desc: 'Focusing on qualitative and long-term socio-economic value for African communities.' },
                    { title: 'CREATIVITY', desc: 'Embracing cultural relevance, strong narratives, and authentic expressions.' },
                    { title: 'COLLABORATION', desc: 'Dismantling silos to achieve robust outcomes across industries.' },
                    { title: 'ACCOUNTABILITY', desc: 'Holding ourselves to clear metrics, transparent milestones, and local truth.' },
                    { title: 'AFRICAN PRIDE', desc: 'Communicating that Africa is not waiting for the future; Africa is building it.' }
                  ].map((val) => (
                    <div key={val.title} className="p-6 bg-[#0D0D0F] border border-neutral-950 hover:border-purple-900/20 transition-all rounded">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] mb-4"></div>
                      <h4 className="text-white text-sm font-bold tracking-wider mb-2 font-display">{val.title}</h4>
                      <p className="text-neutral-400 text-xs font-light leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach / Milestones */}
              <div className="mb-24">
                <h3 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest mb-10">
                  OUR SYSTEM CORRIDOR (EVOLUTION TIMELINE)
                </h3>
                
                <div className="space-y-6">
                  {[
                    { year: '2026', title: 'ECOSYSTEM CONSOLIDATION', desc: 'Consolidating the multi-sector vertical architecture across Nigeria and establishing the digital corporate headquarters.' },
                    { year: '2027 (PROJECTION)', title: 'REGIONAL CORRIDOR SPREAD', desc: 'Expanding The Elite Conference orientations and THE AFRICAINC databases to strategic West African nodes.' },
                    { year: '2028 (PROJECTION)', title: 'VENTURE HUB INTEGRATIONS', desc: 'Interfacing localized African entrepreneurs with structural seed capital, PR campaigns, and digital compliance platforms.' }
                  ].map((milestone, idx) => (
                    <div key={idx} className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold font-mono text-purple-400">{milestone.year}</span>
                        <div className="w-[1px] h-6 bg-neutral-800 hidden md:block"></div>
                        <h4 className="text-white text-sm font-bold tracking-wider font-display uppercase">{milestone.title}</h4>
                      </div>
                      <p className="text-neutral-400 text-xs font-light max-w-xl md:text-right leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team leadership Section */}
              <div>
                <SectionHeader
                  title="EXECUTIVE LEADERSHIP"
                  subtitle="Managed under rigorous corporate governance. Our multi-sector profiles are updated following verification."
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {LEADERSHIP_PLACEHOLDERS.map((member) => (
                    <TeamCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}


        {/* =========================================================================
            3. WHAT WE DO VIEW 
            ========================================================================= */}
        {activeView === 'what-we-do' && (
          <section id="services-deep" className="py-24 bg-[#050505] animate-fade-in pt-32">
            <div className="max-w-7xl mx-auto px-6">
              
              <SectionHeader
                num="02"
                eyebrow="Vertical Portfolios"
                title="WHAT WE DO"
                subtitle="We integrate six vertical capabilities to consulting, communicating, and building platforms across Nigeria and global corridors."
              />

              {/* Detail services grid with full outlines */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {SERVICES.map((srv, idx) => (
                  <div key={srv.id} className="p-8 bg-[#0D0D0F] border border-neutral-900 rounded relative overflow-hidden flex flex-col justify-between min-h-[380px]">
                    <div className="absolute top-0 right-0 p-4 text-[10px] font-mono font-bold text-neutral-600">
                      VERT. 0{idx + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-black font-display text-white tracking-wider mb-4">
                        {srv.title}
                      </h3>
                      <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        {srv.description}
                      </p>

                      <div className="border-t border-neutral-900 pt-6">
                        <div className="text-xs font-mono font-bold text-neutral-500 uppercase mb-4">
                          Key Work Action Items
                        </div>
                        <ul className="space-y-3">
                          {[
                            'Designing adaptive strategies modeled for growth.',
                            'Coordinating with institutional stakeholders for programmatic execution.',
                            'Refining and reporting localized parameters and performance targets.',
                          ].map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                              <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8">
                      <button
                        onClick={() => navigateToView('contact')}
                        className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#8B5CF6] hover:text-white uppercase transition-colors cursor-pointer"
                      >
                        <span>REQUEST ADVISORY</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}


        {/* =========================================================================
            4. OUR BRANDS VIEW 
            ========================================================================= */}
        {activeView === 'brands' && (
          <div className="animate-fade-in">
            {selectedBrandId && activeBrandObj ? (
              <BrandDeepDive
                brand={activeBrandObj}
                onBack={() => setSelectedBrandId(null)}
                onInquire={(subj) => {
                  navigateToView('contact');
                }}
              />
            ) : (
              <section id="brands-portal" className="py-24 bg-[#050505] pt-32">
                <div className="max-w-7xl mx-auto px-6">
                  
                  <SectionHeader
                    num="03"
                    eyebrow="Ecosystem Arms"
                    title="THE ECOSYSTEM"
                    subtitle="Different missions. One Dynasty. Our strategic brands coordinate specific campaigns addressing leadership orientation, PR campaigns, and business opportunities."
                  />

                  {/* Visual listing of brand cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {BRANDS.map((b) => (
                      <BrandCard
                        key={b.id}
                        brand={b}
                        onExplore={(id) => setSelectedBrandId(id)}
                      />
                    ))}
                  </div>

                  {/* Informational guide */}
                  <div className="p-8 bg-[#0D0D0F] border border-neutral-900 rounded-lg text-center max-w-3xl mx-auto space-y-4">
                    <h4 className="text-white text-base font-bold font-display tracking-wider">
                      FUTURE SYSTEM GROWTH & ECOSYSTEM SCALABILITY
                    </h4>
                    <p className="text-neutral-400 text-xs font-light leading-relaxed">
                      Our database layers are configured to dynamically support new vertical enterprises. As The Chief Dynasty Limited expands into research hubs, technology systems, or international investments, additional brands will automatically reflect in our holding architecture.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}


        {/* =========================================================================
            5. PROJECTS VIEW 
            ========================================================================= */}
        {activeView === 'projects' && (
          <section id="projects-portal" className="py-24 bg-[#050505] animate-fade-in pt-32">
            <div className="max-w-7xl mx-auto px-6">
              
              <SectionHeader
                num="05"
                eyebrow="Ecosystem Works"
                title="PROJECT SHOWCASE"
                subtitle="Explore our active portfolio across educational programs, consulting deliverables, and regional innovation analysis."
              />

              {/* Filtering & Search Bars */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-neutral-900 pb-8">
                {/* Search */}
                <div className="relative max-w-md w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full bg-[#0D0D0F] border border-neutral-800 text-white text-xs px-10 py-3 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors placeholder-neutral-600"
                  />
                  {projectSearch && (
                    <button onClick={() => setProjectSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs">
                      Clear
                    </button>
                  )}
                </div>

                {/* Filter chips */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'ALL', val: 'all' },
                    { label: 'EDUCATION', val: 'education' },
                    { label: 'MEDIA', val: 'media' },
                    { label: 'CONSULTING', val: 'consulting' },
                    { label: 'EVENTS', val: 'events' },
                    { label: 'DIGITAL', val: 'digital' },
                    { label: 'AFRICA', val: 'africa' },
                  ].map((chip) => (
                    <button
                      key={chip.val}
                      onClick={() => setProjectFilter(chip.val)}
                      className={`px-3.5 py-2 text-[10px] font-mono font-bold tracking-wider rounded uppercase transition-all cursor-pointer ${
                        projectFilter === chip.val
                          ? 'bg-[#8B5CF6] text-white'
                          : 'bg-[#0D0D0F] border border-neutral-900 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Projects Results Grid */}
              {(() => {
                const filtered = PROJECTS.filter((p) => {
                  const matchCat = projectFilter === 'all' || p.category === projectFilter;
                  const matchSearch = p.name.toLowerCase().includes(projectSearch.toLowerCase()) || p.description.toLowerCase().includes(projectSearch.toLowerCase());
                  return matchCat && matchSearch;
                });

                if (filtered.length === 0) {
                  return (
                    <div className="p-16 border border-neutral-900 bg-[#0D0D0F] text-center rounded">
                      <p className="text-neutral-500 text-sm">No projects matching your filters. Try modifying your parameters.</p>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((proj) => (
                      <ProjectCard
                        key={proj.id}
                        project={proj}
                        onOpenDetail={(p) => setSelectedProject(p)}
                      />
                    ))}
                  </div>
                );
              })()}

            </div>
          </section>
        )}


        {/* =========================================================================
            6. INSIGHTS VIEW
            ========================================================================= */}
        {activeView === 'insights' && (
          <section id="insights-portal" className="py-24 bg-[#050505] animate-fade-in pt-32">
            <div className="max-w-7xl mx-auto px-6">
              
              {selectedArticle ? (
                /* Deep-reader layout */
                <div className="max-w-3xl mx-auto space-y-8">
                  {/* Back */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="group flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors cursor-pointer"
                  >
                    <span>← BACK TO ARTICLES</span>
                  </button>

                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border border-neutral-800 rounded">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-neutral-500">
                      <span className="text-purple-400 font-mono font-bold uppercase tracking-widest">{selectedArticle.category}</span>
                      <span>•</span>
                      <span>{selectedArticle.date}</span>
                      <span>•</span>
                      <span>{selectedArticle.readTime}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-wide">
                      {selectedArticle.title}
                    </h1>

                    <div className="text-neutral-500 text-xs font-mono font-bold uppercase tracking-wider">
                      By {selectedArticle.author}
                    </div>
                  </div>

                  {/* Body markup reader */}
                  <div className="text-neutral-300 text-sm md:text-base font-light leading-relaxed space-y-6 pt-4 border-t border-neutral-900">
                    <p>{selectedArticle.content}</p>
                    <p className="bg-[#0D0D0F] border border-neutral-900 p-6 rounded italic text-neutral-400 text-sm font-light">
                      "We turn ideas into platforms, platforms into opportunities, and opportunities into impact." The Chief Dynasty Limited commits to publishing high-performance strategic analysis steering regional business growth.
                    </p>
                    <p>
                      As we scale operations, our analysis teams will continue tracking cross-border commercial policies, student orientations, content design patterns, and tech venture investments. Stay subscribed to our digest for the latest structural releases.
                    </p>
                  </div>

                  <div className="border-t border-neutral-900 pt-8 mt-12 text-center">
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-6 py-3 bg-neutral-900 border border-neutral-800 hover:border-purple-800 text-white text-xs font-bold tracking-widest uppercase rounded transition-colors cursor-pointer"
                    >
                      RETURN TO INSIGHTS INDEX
                    </button>
                  </div>
                </div>
              ) : (
                /* Grid Index view */
                <div>
                  <SectionHeader
                    num="06"
                    eyebrow="Advisory Publications"
                    title="INSIGHTS & ANNOUNCEMENTS"
                    subtitle="Read the latest strategic thoughts from our corporate communications, PR experts, and business advisers."
                  />

                  {/* Search and chip controls */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-neutral-900 pb-8">
                    <div className="relative max-w-md w-full">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        value={articleSearch}
                        onChange={(e) => setArticleSearch(e.target.value)}
                        placeholder="Search essays..."
                        className="w-full bg-[#0D0D0F] border border-neutral-800 text-white text-xs px-10 py-3 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors placeholder-neutral-600"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['all', 'Business', 'Education', 'Leadership', 'Media', 'Africa'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setArticleFilter(cat)}
                          className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest rounded uppercase transition-all cursor-pointer ${
                            articleFilter === cat
                              ? 'bg-purple-600 text-white'
                              : 'bg-[#0D0D0F] border border-neutral-900 text-neutral-400 hover:border-neutral-700'
                          }`}
                        >
                          {cat.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* List */}
                  {(() => {
                    const filtered = ARTICLES.filter((a) => {
                      const matchCat = articleFilter === 'all' || a.category.toLowerCase() === articleFilter.toLowerCase();
                      const matchSearch = a.title.toLowerCase().includes(articleSearch.toLowerCase()) || a.excerpt.toLowerCase().includes(articleSearch.toLowerCase());
                      return matchCat && matchSearch;
                    });

                    if (filtered.length === 0) {
                      return (
                        <div className="p-16 border border-neutral-900 bg-[#0D0D0F] text-center rounded">
                          <p className="text-neutral-500 text-sm">No insights match your selection.</p>
                        </div>
                      );
                    }

                    return (
                      <div className="space-y-6">
                        {filtered.map((art) => (
                          <ArticleCard
                            key={art.id}
                            article={art}
                            onRead={(a) => setSelectedArticle(a)}
                          />
                        ))}
                      </div>
                    );
                  })()}
                </div>
              )}

            </div>
          </section>
        )}


        {/* =========================================================================
            7. CAREERS VIEW
            ========================================================================= */}
        {activeView === 'careers' && (
          <section id="careers-portal" className="py-24 bg-[#050505] animate-fade-in pt-32">
            <div className="max-w-7xl mx-auto px-6">
              
              <SectionHeader
                num="07"
                eyebrow="Ecosystem Operations"
                title="BUILD THE FUTURE WITH US"
                subtitle="Join an elite multidisciplinary team steering African innovation, storytelling campaigns, orientations, and technical strategy."
              />

              {/* Company Culture Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                <div className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded">
                  <h4 className="text-white text-base font-bold tracking-wider mb-2 font-display">Why Join Us?</h4>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    We bring diverse capability verticals together, providing you exposure across education, PR, digital services, and strategy models instead of keeping you in isolated operations.
                  </p>
                </div>
                <div className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded">
                  <h4 className="text-white text-base font-bold tracking-wider mb-2 font-display">Dynamic Culture</h4>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    A high-performance workspace combining structured executive rigor with the energy and ambition of Africa’s rising young technologists and thinkers.
                  </p>
                </div>
                <div className="p-6 bg-[#0D0D0F] border border-neutral-900 rounded">
                  <h4 className="text-white text-base font-bold tracking-wider mb-2 font-display">Impact Platform</h4>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    Be a direct stakeholder in social orientations, providing scholarship access and empowering secondary students across communities.
                  </p>
                </div>
              </div>

              {/* Opportunities Listings */}
              <div>
                <h3 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest mb-8">
                  OPEN ACTIVE OPPORTUNITIES (DYNAMC MATRIX)
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {CAREER_OPPORTUNITIES.map((opp) => (
                    <CareerCard
                      key={opp.id}
                      career={opp}
                      onApply={(career) => {
                        setSelectedCareer(career);
                        setCareerAppStatus('idle');
                      }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}


        {/* =========================================================================
            8. CONTACT VIEW
            ========================================================================= */}
        {activeView === 'contact' && (
          <section id="contact-portal" className="py-24 bg-[#050505] animate-fade-in pt-32">
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Information sidebar (Placeholders aligned strictly with instructions) */}
                <div className="lg:col-span-5 space-y-8">
                  <SectionHeader
                    num="08"
                    eyebrow="Corporate Channels"
                    title="LET'S TALK."
                    subtitle="Have an idea, multi-sector project, partnership proposal or sponsorship interest? Start the conversation today."
                  />

                  <div className="space-y-6">
                    {/* Office address (Placeholder) */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#0D0D0F] border border-neutral-900 rounded text-purple-400 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
                          Business Address
                        </div>
                        <div className="text-sm font-bold text-white mt-1">
                          {OFFICE_PLACEHOLDERS.address}
                        </div>
                      </div>
                    </div>

                    {/* Email address */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#0D0D0F] border border-neutral-900 rounded text-purple-400 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
                          Official Inquiry Email
                        </div>
                        <a
                          href={`mailto:${OFFICE_PLACEHOLDERS.email}`}
                          className="text-sm font-bold text-purple-400 hover:text-[#8B5CF6] transition-colors mt-1 block"
                        >
                          {OFFICE_PLACEHOLDERS.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#0D0D0F] border border-neutral-900 rounded text-purple-400 shrink-0">
                        <MapIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
                          Primary Communications Line
                        </div>
                        <div className="text-sm font-bold text-white mt-1">
                          {OFFICE_PLACEHOLDERS.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#0D0D0F] border border-neutral-950 rounded text-xs text-neutral-400 font-light leading-relaxed">
                    <strong>Integrations Note:</strong> Inquiries are validated and safely handled. Form architectures are prepared for direct synchronization with Firebase Cloud Firestore database rules, Google CRM APIs, or Sheet hooks once verified credentials are added.
                  </div>
                </div>

                {/* Main contact form */}
                <div className="lg:col-span-7 bg-[#0D0D0F]/60 border border-neutral-900 p-8 rounded-lg">
                  <h4 className="text-sm font-mono font-bold text-neutral-500 uppercase tracking-widest mb-6">
                    TRANSMISSION ROUTE FORM
                  </h4>
                  <ContactForm />
                </div>

              </div>

            </div>
          </section>
        )}

      </main>

      {/* =========================================================================
          DYNAMIC INTERACTIVE MODALS 
          ========================================================================= */}
      
      {/* 1. Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0D0D0F] border border-neutral-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-900">
              <span className="px-2.5 py-1 bg-[#050505] border border-neutral-800 text-[9px] font-mono font-bold uppercase tracking-widest text-purple-400">
                {selectedProject.category} // CASE STUDY
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image banner */}
            <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content area */}
            <div className="p-6 lg:p-8 space-y-6">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 font-bold tracking-widest mb-1">
                  YEAR DELIVERED: {selectedProject.year}
                </div>
                <h3 className="text-2xl font-black font-display text-white tracking-wide">
                  {selectedProject.name}
                </h3>
              </div>

              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Dynamic objectives if present */}
              {selectedProject.objectives && (
                <div className="border-t border-neutral-900 pt-6">
                  <div className="text-xs font-mono font-bold text-neutral-500 uppercase mb-3">
                    Project Deliverables & Objectives
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-400 font-light">
                        <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Statement of impact */}
              <div className="p-5 bg-purple-950/20 border border-purple-900/30 rounded">
                <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mb-1.5">
                  VERIFIED ENGAGEMENT OUTCOME
                </div>
                <p className="text-white text-xs font-medium leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>
            </div>

            {/* Footer actions */}
            <div className="p-6 border-t border-neutral-900 flex justify-end">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  navigateToView('contact');
                }}
                className="px-6 py-3 bg-[#8B5CF6] hover:bg-[#6D28D9] text-white text-xs font-bold tracking-widest uppercase rounded shadow transition-all cursor-pointer"
              >
                Inquire About Similar Strategy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Career Application Modal */}
      {selectedCareer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0D0D0F] border border-neutral-900 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
            
            <div className="flex items-center justify-between p-6 border-b border-neutral-900">
              <div>
                <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-widest block">
                  APPLYING FOR POSITION:
                </span>
                <span className="text-sm font-bold text-white font-display">
                  {selectedCareer.position}
                </span>
              </div>
              <button
                onClick={() => setSelectedCareer(null)}
                className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {careerAppStatus === 'success' ? (
              <div className="p-8 text-center space-y-6">
                <div className="w-12 h-12 bg-purple-950/40 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-display text-white">APPLICATION RECEIVED</h4>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed max-w-sm mx-auto">
                    Your profile credentials have been submitted securely to the Dynasty HR department. Verified applications are audited promptly.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCareer(null)}
                  className="px-6 py-3 bg-neutral-900 border border-neutral-800 text-white text-xs font-bold tracking-widest uppercase rounded cursor-pointer"
                >
                  CLOSE PORTAL
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="p-6 space-y-5">
                <div>
                  <label htmlFor="applicantName" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    id="applicantName"
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Tolulope Chief"
                    className="w-full bg-[#050505] border border-neutral-800 text-white text-xs px-4 py-3 rounded focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label htmlFor="applicantEmail" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    id="applicantEmail"
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="e.g. candidate@domain.com"
                    className="w-full bg-[#050505] border border-neutral-800 text-white text-xs px-4 py-3 rounded focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Resume / CV Submission *
                  </label>
                  <div className="border border-dashed border-neutral-800 p-6 rounded text-center bg-[#050505] hover:border-purple-800 transition-colors">
                    <FileText className="w-8 h-8 text-neutral-600 mx-auto mb-2" />
                    <span className="text-[11px] text-neutral-400 block font-light">
                      PDF, DOCX formats supported. Drag and drop file or click to select.
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setApplicantCV(e.target.files[0]);
                        }
                      }}
                      className="mt-2 text-[10px] text-neutral-500 mx-auto"
                    />
                    {applicantCV && (
                      <span className="text-[10px] font-bold text-purple-400 mt-2 block">
                        Selected: {applicantCV.name}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="cover" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
                    Brief Statement / Cover Note
                  </label>
                  <textarea
                    id="cover"
                    rows={4}
                    value={applicantCoverLetter}
                    onChange={(e) => setApplicantCoverLetter(e.target.value)}
                    placeholder="Outline your availability, alignment with the Chief Dynasty story, and multidisciplinary skills..."
                    className="w-full bg-[#050505] border border-neutral-800 text-white text-xs px-4 py-3 rounded focus:outline-none focus:border-[#8B5CF6]"
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCareer(null)}
                    className="px-4 py-2 text-xs font-bold tracking-widest uppercase text-neutral-500 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#8B5CF6] hover:bg-[#6D28D9] text-white text-xs font-bold tracking-widest uppercase rounded shadow transition-all cursor-pointer"
                  >
                    TRANSMIT APPLICATION
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. Legal policies modal */}
      {legalModalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0D0D0F] border border-neutral-900 w-full max-w-xl max-h-[80vh] overflow-y-auto p-6 rounded-lg">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-4">
              <h4 className="text-sm font-bold font-display uppercase tracking-widest text-white">
                {legalModalType === 'privacy' && 'Privacy Policy'}
                {legalModalType === 'terms' && 'Terms of Use'}
                {legalModalType === 'cookie' && 'Cookie Policy'}
              </h4>
              <button onClick={() => setLegalModalType(null)} className="text-neutral-500 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-neutral-400 text-xs font-light leading-relaxed space-y-4">
              <p>
                <strong>The Chief Dynasty Limited Legal Notice (Est. 2026)</strong>
              </p>
              <p>
                This framework serves as a verified representation of our corporate policy guidelines. In accordance with Nigerian data protection rules, we strictly safeguard candidate profiles, email subscriptions, and partnership queries.
              </p>
              <p>
                By using our systems and interacting with our multisection portals (including The Elite Conference, The Chief Hub, and THE AFRICAINC), you agree to our standard governance parameters, guaranteeing intellectual protection of ecosystem materials and media copywriting.
              </p>
              <p>
                For official legal inquiries, connect directly through our central transmission channels on our contact portals.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-900 text-right mt-6">
              <button
                onClick={() => setLegalModalType(null)}
                className="px-4 py-2 bg-neutral-900 hover:bg-[#8B5CF6] text-white text-[10px] font-bold tracking-widest uppercase rounded transition-colors"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Solid Black Footer Component */}
      <Footer
        onNavigate={navigateToView}
        onOpenLegal={(type) => {
          if (type === 'privacy' || type === 'terms' || type === 'cookie') {
            setLegalModalType(type);
          }
        }}
      />

    </div>
  );
}
