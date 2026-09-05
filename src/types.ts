export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  verticals: string[];
  audience: string;
  objectives: string[];
  impactStatement: string;
  ctaText: string;
  color: string;
}

export interface Project {
  id: string;
  name: string;
  category: 'education' | 'media' | 'consulting' | 'events' | 'digital' | 'africa';
  year: string;
  description: string;
  longDescription?: string;
  image: string;
  impact: string;
  audience?: string;
  objectives?: string[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Business' | 'Education' | 'Leadership' | 'Media' | 'Africa' | 'Innovation' | 'Youth' | 'Strategy';
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface CareerOpportunity {
  id: string;
  position: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  deadline: string;
}

export interface ContactInquiry {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  organization: string;
  subject: string;
  serviceInterest: string;
  message: string;
}

export interface SuccessStory {
  id: string;
  clientName: string;
  serviceCategory: string;
  challenge: string;
  solution: string;
  impact: string;
  metric: string;
  image: string;
}

