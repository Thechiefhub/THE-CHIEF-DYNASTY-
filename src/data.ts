import { Service, Brand, Project, Article, TeamMember, CareerOpportunity, SuccessStory } from './types';

export const SERVICES: Service[] = [
  {
    id: 'education',
    title: 'EDUCATIONAL SERVICES',
    description: 'Building educational experiences, youth programmes, leadership initiatives and learning opportunities designed to prepare the next generation.',
    iconName: 'GraduationCap'
  },
  {
    id: 'media',
    title: 'PR & MEDIA',
    description: 'Strategic communication, media, content creation, brand storytelling, public relations, and high-impact digital visibility.',
    iconName: 'Megaphone'
  },
  {
    id: 'consulting',
    title: 'BUSINESS CONSULTING & STRATEGY',
    description: 'Helping organizations, entrepreneurs, and institutions transform ambitious ideas into structured, high-growth strategies and sustainable business structures.',
    iconName: 'TrendingUp'
  },
  {
    id: 'events',
    title: 'PROJECT & EVENT MANAGEMENT',
    description: 'Designing, coordinating, and executing premium national conferences, awards, corporate summits, and experiential events.',
    iconName: 'Calendar'
  },
  {
    id: 'digital',
    title: 'DIGITAL SERVICES',
    description: 'Digital brand strategy, custom technology solutions, software systems, and modern digital experiences designed to connect with audiences.',
    iconName: 'Cpu'
  },
  {
    id: 'ecosystem',
    title: 'AFRICAN ECOSYSTEM DEVELOPMENT',
    description: 'Creating innovative platforms, initiatives, and networks that actively connect African talent, enterprise, and capital to global opportunities.',
    iconName: 'Globe'
  }
];

export const BRANDS: Brand[] = [
  {
    id: 'elite-conference',
    name: 'THE ELITE CONFERENCE',
    tagline: 'Education • Youth • Leadership • Opportunity',
    description: 'An impact-driven platform focused on education, youth development, orientation, scholarships, and leadership development.',
    longDescription: 'The Elite Conference is a cornerstone youth empowerment and educational initiative built to provide career orientation, leadership skills, scholarship programs, and structural resources for ambitious young Africans to become future-ready. It stands as an impact engine for community development, personal branding, and student growth.',
    verticals: [
      'Youth development & leadership summits',
      'Career orientation & future-readiness workshops',
      'Scholarship schemes & academic rewards',
      'Student empowerment & networking opportunities',
      'School & community outreach programs'
    ],
    audience: 'Students, young professionals, educators, and developmental institutions.',
    objectives: [
      'Fostering high-performance leadership habits among secondary and tertiary students.',
      'Connecting brilliant minds to scholarship opportunities and corporate mentors.',
      'Providing practical skillsets and exposure required in the modern digital economy.',
      'Bridging the gap between educational instruction and industry standards.'
    ],
    impactStatement: 'Empowering thousands of students and secondary level leaders with actionable orientation and academic resources across Nigeria.',
    ctaText: 'Explore The Elite Conference',
    color: '#8B5CF6'
  },
  {
    id: 'chief-hub',
    name: 'THE CHIEF HUB',
    tagline: 'Content • Media • PR • Storytelling',
    description: 'A creative communications hub helping organizations and brands communicate with clarity, cultural relevance, and strategic influence.',
    longDescription: 'The Chief Hub operates at the intersection of creative storytelling, public relations, and modern media. We work with progressive corporate brands, visionary founders, and developmental institutions to structure content that resonates across audiences. Our focus is ensuring your message carries the clarity, authority, and personality it deserves.',
    verticals: [
      'Copywriting & commercial content strategy',
      'Public relations & corporate communications',
      'Brand storytelling & identity architecture',
      'Digital media production & campaign coordination',
      'Creative advisory for founders and enterprises'
    ],
    audience: 'Fast-growing startups, corporate entities, founders, public personalities, and international NGOs.',
    objectives: [
      'Elevating brand authority through tailored narrative frameworks and targeted media strategy.',
      'Designing content architectures that captivate audiences and inspire measurable action.',
      'Bridging cultural nuances with corporate communications for direct regional relevance.'
    ],
    impactStatement: 'Helping brands and high-profile individuals build credible visibility, write authoritative copy, and shape their market narratives.',
    ctaText: 'Explore The Chief Hub',
    color: '#6D28D9'
  },
  {
    id: 'africainc',
    name: 'THE AFRICAINC',
    tagline: 'Africa • Innovation • Enterprise • Opportunity',
    description: 'An African-focused ecosystem and venture platform exploring and showcasing innovation, enterprise, and opportunities shaping the continent.',
    longDescription: 'THE AFRICAINC is a forward-looking strategic venture and business intelligence platform built around African ingenuity, entrepreneurship, and ecosystem acceleration. We study, showcase, and connect the innovators, startups, ideas, and investment parameters that are steering Africa\'s transition into a global innovation powerhouse.',
    verticals: [
      'African business intelligence & ecosystem reports',
      'Venture exploration & startup support architectures',
      'Innovation showcases & founder highlight series',
      'Cross-border strategic business alignment networks',
      'Ecosystem collaboration initiatives'
    ],
    audience: 'Ecosystem builders, international investors, startup founders, policy-makers, and business researchers.',
    objectives: [
      'Showcasing forward-thinking African enterprise and home-grown innovations.',
      'Unlocking access to local market insights and premium investment narratives.',
      'Championing collaborative efforts across African regional innovation hubs.'
    ],
    impactStatement: 'Championing forward-looking perspectives on African startup potential, talent growth, and cross-border commercial opportunities.',
    ctaText: 'Explore THE AFRICAINC',
    color: '#4C1D95'
  }
];

export const PILLARS = [
  {
    num: '01',
    title: 'MULTIDISCIPLINARY',
    description: 'We integrate educational, media, and enterprise consulting strategies under one dynamic roof, completely shattering functional silos.'
  },
  {
    num: '02',
    title: 'AFRICAN-FIRST',
    description: 'We hold direct, deep insights into the African landscape—contextualizing local potential, young audiences, and commercial opportunities.'
  },
  {
    num: '03',
    title: 'EXECUTION-DRIVEN',
    description: 'Strategy is a map, but execution is the journey. We are fanatically obsessed with turning high-level models into measurable ground impact.'
  },
  {
    num: '04',
    title: 'FUTURE-FOCUSED',
    description: 'We design infrastructures and programs with the next ten years in mind. We build resilient assets for tomorrow\'s market.'
  }
];

export const QUALITATIVE_IMPACT = [
  {
    label: 'Youth Reached & Oriented',
    value: '[PLACEHOLDER - TO BE VERIFIED]',
    description: 'Young leaders, students, and professionals impacted through conferences and digital materials.'
  },
  {
    label: 'Major Initiatives Delivered',
    value: '[PLACEHOLDER - TO BE VERIFIED]',
    description: 'Educational programs, brand storytelling projects, and strategic consultation deliverables.'
  },
  {
    label: 'Schools & Communities Engaged',
    value: '[PLACEHOLDER - TO BE VERIFIED]',
    description: 'Local institutions partnering with The Elite Conference for empowerment initiatives.'
  },
  {
    label: 'Corporate Collaborations',
    value: '[PLACEHOLDER - TO BE VERIFIED]',
    description: 'Progressive institutions, brands, and public entities aligned with our mission.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-elite-summit',
    name: 'The Annual Elite Conference',
    category: 'education',
    year: '2025',
    description: 'Our flagship leadership and career development platform, assembling students and young leaders to bridge the future-readiness gap.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    impact: 'Successfully brought together high-profile corporate mentors, scholarship rewards, and high-impact educational resources to students.',
    audience: 'High school seniors, university students, and recent graduates.',
    objectives: [
      'Deliver cutting-edge career path mentorship.',
      'Distribute structural scholarship awards.',
      'Facilitate peer-to-peer enterprise networking.'
    ]
  },
  {
    id: 'project-storyteller-program',
    name: 'Brand Narrative & Positioning Launch',
    category: 'media',
    year: '2025',
    description: 'An editorial positioning strategy engineered by The Chief Hub for a multi-sector development enterprise seeking regional influence.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    impact: 'Crafted multi-channel communications, press statements, and copywriting guidelines that clearly communicated corporate values to global investors.',
    audience: 'Corporate partners and ecosystem collaborators.',
    objectives: [
      'Simplify complex institutional copy.',
      'Refine visual brand presentation.',
      'Manage public relation media releases.'
    ]
  },
  {
    id: 'project-startup-report',
    name: 'THE AFRICAINC Ecosystem Insights',
    category: 'africa',
    year: '2026',
    description: 'A comprehensive strategic study highlighting high-growth business verticals, startup hubs, and tech opportunities across West Africa.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    impact: 'Exposed modern digital narratives, connecting localized African founders to analytical frameworks and scaling guidelines.',
    audience: 'Founders, foreign investors, policy architects.',
    objectives: [
      'Map structural innovation corridors in Lagos and Accra.',
      'Breakdown fundraising frameworks for early-stage teams.',
      'Highlight talent retention strategies.'
    ]
  },
  {
    id: 'project-leadership-workshop',
    name: 'Ecosystem Career Blueprint Initiative',
    category: 'education',
    year: '2025',
    description: 'Intensive digital literacy and personal branding training programs implemented across institutions in metropolitan areas.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    impact: 'Delivered tailored workshops on resume engineering, modern design tools, and software development landscapes.',
    audience: 'University student bodies and youth leaders.',
    objectives: [
      'Equip young creatives with standard digital tools.',
      'Instill executive presence and communications expertise.'
    ]
  },
  {
    id: 'project-summit-management',
    name: 'Corporate Brand Experience Strategy',
    category: 'events',
    year: '2025',
    description: 'End-to-end planning and creative production for a modern tech entrepreneurship forum held in Lagos.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    impact: 'Managed visual brand touchpoints, live operations, panel pacing, and structural media integrations seamlessly.',
    audience: 'Lagos-based business leaders, investors, and startup collectives.'
  },
  {
    id: 'project-digital-portal',
    name: 'The Dynasty Portal Development',
    category: 'digital',
    year: '2026',
    description: 'Engineering the unified, responsive digital ecosystem gateway for The Chief Dynasty, establishing its global corporate address.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    impact: 'Delivered high-performance, accessible, and SEO-optimized architecture capable of seamless vertical expansion.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'article-future-youth',
    title: 'Rewriting the Script: Preparing Africa\'s Next Generation for Global Careers',
    excerpt: 'An inside look into structural changes in education, tech enablement, and leadership frameworks needed to position African youth as global leaders.',
    content: 'Africa possesses the youngest and fastest-growing population on earth. By 2030, a substantial portion of the global workforce will reside on this continent. However, standard educational curriculums are often legacy-bound. To solve this, platforms like The Elite Conference are working hard to inject real-world career orientation, digital capability, and strong self-authorship traits directly to school systems. The focus must shift from theoretical qualification to adaptive performance and active entrepreneurship exposure. We believe that by building accessible bridges to career resources early, we can empower youth to confidently own their space on the global stage.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    author: 'Editorial Team',
    date: 'Sep 2, 2026',
    readTime: '5 min read'
  },
  {
    id: 'article-brand-communications',
    title: 'Narrative Authority: Why Modern Founders Must Write with Clear Personality',
    excerpt: 'The era of stiff corporate jargon is dead. Learn how authentic, culturally intelligent storytelling is driving customer trust and brand scaling.',
    content: 'In a heavily saturated digital ecosystem, standard marketing copy often dissolves into noise. Founders and institutions often hide behind complex words that convey little substance. Modern communications requires authority paired with approachability. At The Chief Hub, we work under the philosophy that clear, expressive brand storytelling is the single highest leverage point for growth. When founders speak transparently about their vision, obstacles, and localized impact, audiences form genuine alliances. Building narrative authority means telling human stories with crystalline strategic objectives.',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1200&auto=format&fit=crop',
    author: 'The Chief Hub Advisory',
    date: 'Aug 20, 2026',
    readTime: '4 min read'
  },
  {
    id: 'article-african-ecosystems',
    title: 'Africa’s Rising Tech Corridors: Enterprise Opportunities Beyond the Hype',
    excerpt: 'Understanding localized market dynamics, cross-border payments, and talent networks that are building sustainable African ventures.',
    content: 'The narrative of Africa as a tech frontier is well-known, but long-term success relies on understanding local infrastructure realities. From digital logistics to tailored financial products, builders are designing solutions for local challenges that scale globally. THE AFRICAINC tracks these operational methodologies, highlighting how ecosystems in Lagos, Nairobi, and Cairo collaborate. Success requires looking beyond funding headlines and studying product-market fit, regional integration, and local distribution channels. The future is built by local founders engineering custom answers.',
    category: 'Africa',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    author: 'THE AFRICAINC Research',
    date: 'Aug 10, 2026',
    readTime: '6 min read'
  }
];

export const CAREER_OPPORTUNITIES: CareerOpportunity[] = [
  {
    id: 'career-associate-consultant',
    position: 'Associate Strategy Consultant',
    department: 'Business Consulting',
    location: 'Lagos, Nigeria (Hybrid)',
    type: 'Full-time',
    description: 'We are seeking a structured, highly analytical young professional to join our Business Consulting and Strategy division to support corporate clients and founders with market entry, execution plans, and performance advisory.',
    requirements: [
      'Strong research background and command of analytical frameworks.',
      'Outstanding written and verbal business communications skills.',
      'Proficiency in building market models and pitch documents.',
      'Ability to thrive in an agile, multi-sector environment.'
    ],
    deadline: 'October 15, 2026'
  },
  {
    id: 'career-content-creator',
    position: 'Creative Content & Copy Lead',
    department: 'The Chief Hub',
    location: 'Lagos, Nigeria (Remote)',
    type: 'Full-time / Contract',
    description: 'The Chief Hub is searching for a culturally attuned, elite copywriter and digital strategist capable of translating complex business missions into premium, engaging, and authoritative narratives.',
    requirements: [
      'Portfolio showcasing elite copy, brand strategy, or modern journalistic write-ups.',
      'Strong understanding of digital PR, social content ecosystems, and narrative design.',
      'Experience working directly with founders or high-impact corporate briefs.'
    ],
    deadline: 'October 30, 2026'
  },
  {
    id: 'career-volunteer-elite',
    position: 'Elite Conference Cohort Facilitator',
    department: 'Educational Services / The Elite Conference',
    location: 'Multiple Locations, Nigeria (Volunteer)',
    type: 'Volunteer / Internship',
    description: 'An impact-oriented opportunity to lead student orientation groups, manage scholarship registrations, and facilitate school workshops for The Elite Conference impact programs.',
    requirements: [
      'Strong passion for youth leadership, student orientation, and social development.',
      'Organized execution capability and high integrity.',
      'Excellent peer relationship building and community coordination skills.'
    ],
    deadline: 'Ongoing'
  }
];

export const LEADERSHIP_PLACEHOLDERS: TeamMember[] = [
  {
    id: 'leader-founder',
    name: '[LEADERSHIP PROFILE PLACEHOLDER]',
    position: 'Executive Director & Founder',
    bio: 'Verified profile and executive background will be seamlessly updated here once official information is supplied. The Chief Dynasty supports elite multi-sector leaders directing African innovation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'leader-coo',
    name: '[OPERATIONS PROFILE PLACEHOLDER]',
    position: 'Chief Operations Officer',
    bio: 'Verified leadership records and operations background will be updated once official biographical information is supplied. Aligned with modern corporate governance standards.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  }
];

export const OFFICE_PLACEHOLDERS = {
  email: 'info@thechiefdynasty.com', // Placeholder aligned to brand
  phone: '[OFFICIAL COMPANY PHONE - Placeholder]',
  address: '[OFFICIAL BUSINESS ADDRESS - Placeholder]',
  website: 'www.thechiefdynasty.com',
  socials: {
    instagram: '#',
    linkedin: '#',
    facebook: '#',
    twitter: '#',
    youtube: '#'
  }
};

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'success-edu',
    clientName: 'Lagos Public High School Coalition',
    serviceCategory: 'Educational Services',
    challenge: 'A massive mentoring deficit where 80% of secondary school graduates lacked career orientation or mentor contact.',
    solution: 'Deploying The Elite Conference regional outreach summit. We oriented 2,500+ students, launched scholarship portfolios, and integrated professional mentors.',
    impact: 'Recorded a 35% increase in tertiary education application compliance and awarded 12 academic scholarships.',
    metric: '2,500+ Students Guided',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'success-pr',
    clientName: 'Vanguard West-Africa FinTech Hub',
    serviceCategory: 'PR & Media',
    challenge: 'An innovative startup seeking international investor eyes while operating in a crowded local PR media environment.',
    solution: 'Designed an elite storytelling campaign through The Chief Hub, coordinating premium national press releases and investor briefings.',
    impact: 'Secured features in leading regional business journals, resulting in an oversubscribed $1.5M Seed round.',
    metric: '$1.5M Venture Funding Powered',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'success-consulting',
    clientName: 'Apex Agricultural Conglomerate Ltd',
    serviceCategory: 'Business Consulting & Strategy',
    challenge: 'Inefficient management structures and legacy silos restricting cross-border supply chain operations.',
    solution: 'Formulated an adaptive enterprise scaling map and unified management policy framework to optimize division workflows.',
    impact: 'Dismantled legacy operating silos, resulting in a 20% reduction in logistical overhead in under 9 months.',
    metric: '20% overhead reduction',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'success-events',
    clientName: 'West African Youth Leadership Summit',
    serviceCategory: 'Project & Event Management',
    challenge: 'Coordinating a high-visibility, multi-national summit with speakers spanning 5 countries with complex technical requirements.',
    solution: 'Delivered end-to-end event production, managing stage setups, broadcast integrations, and delegate registries.',
    impact: 'Facilitated a flawless 3-day summit connecting 500 delegates and securing 98% attendee satisfaction ratings.',
    metric: '500 International Delegates',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'success-digital',
    clientName: 'Zion Educational Foundation Portal',
    serviceCategory: 'Digital Services',
    challenge: 'An outdated manual system for scoring and managing student scholarship applications, causing severe delays.',
    solution: 'Architected and built a high-performance custom application tracking portal with automatic eligibility verification.',
    impact: 'Reduced applicant processing times from 14 days down to 48 hours, scaling capacity to handle 10k applicants.',
    metric: '48hr application cycles',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'success-eco',
    clientName: 'AfricaInc Regional Venture Database',
    serviceCategory: 'African Ecosystem Development',
    challenge: 'Scattered, non-verified operational startup metrics causing friction for foreign impact capital entry.',
    solution: 'Developed an open, audited venture dashboard mapping early-stage operational founders across key cities.',
    impact: 'Connected 4 regional startups directly to global impact investors, resulting in successful initial checks.',
    metric: '4 Direct Seed Connections',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop'
  }
];
