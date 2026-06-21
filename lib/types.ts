export type Service = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  features: string[];
  deliverables: string[];
  icon: string;
  heroStat: string;
  priceGuide: string;
  seoTitle: string;
  seoDescription: string;
};

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  year: string;
  image: string;
  excerpt: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  tags: string[];
  category: string;
  author: string;
  status: "draft" | "published" | "scheduled";
  publishedAt: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type MessageRecord = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "new" | "in-review" | "resolved";
  receivedAt: string;
};

export type QuoteRequestRecord = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
  status: "new" | "qualified" | "won" | "lost";
  receivedAt: string;
};

export type LeadRecord = {
  id: string;
  company: string;
  contactPerson: string;
  email: string;
  phone: string;
  notes: string;
  status: "new" | "contacted" | "proposal-sent" | "converted";
  value: number;
};

export type TrafficPoint = {
  label: string;
  visitors: number;
  pageViews: number;
  conversions: number;
};

export type DeviceShare = {
  name: string;
  value: number;
};

export type SourceShare = {
  name: string;
  visitors: number;
  conversions: number;
};

export type DashboardMetric = {
  label: string;
  value: number;
  change: number;
  helper: string;
};

export type MediaAsset = {
  id: string;
  name: string;
  type: "image" | "pdf" | "video" | "logo";
  size: string;
  updatedAt: string;
  url: string;
};

export type SeoSetting = {
  id: string;
  page: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  score: number;
};

export type HomepageContent = {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustLine: string;
  whyChooseUs: string[];
  ctaHeadline: string;
  ctaBody: string;
};

export type CompanySettings = {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
};

export type StaffAccount = {
  id: string;
  fullName: string;
  role: string;
  email: string;
  permissions: string[];
};
