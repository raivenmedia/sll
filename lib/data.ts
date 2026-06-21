import type {
  BlogPost,
  CompanySettings,
  DashboardMetric,
  DeviceShare,
  FAQItem,
  HomepageContent,
  LeadRecord,
  MediaAsset,
  MessageRecord,
  PortfolioProject,
  QuoteRequestRecord,
  SeoSetting,
  Service,
  SourceShare,
  StaffAccount,
  Testimonial,
  TrafficPoint,
} from "@/lib/types";

export const company = {
  name: "Yolic",
  headline: "Building Brands. Powering Businesses.",
  description:
    "Yolic is a multidisciplinary growth partner blending strategy, creative execution, print production, and digital systems to help ambitious businesses scale with confidence.",
  email: "hello@yolic.com",
  phone: "+254 700 000 000",
  address: "Westlands Business Park, Nairobi, Kenya",
  socials: {
    facebook: "https://facebook.com/yolic",
    instagram: "https://instagram.com/yolic",
    linkedin: "https://linkedin.com/company/yolic",
    whatsapp: "https://wa.me/254700000000",
  },
};

export const trustLogos = ["Retail", "Hospitality", "Education", "Healthcare", "Manufacturing", "Technology"];

export const industries = [
  "Retail & eCommerce",
  "Hospitality & Tourism",
  "Healthcare",
  "Education",
  "Construction",
  "Corporate Services",
];

export const homepageContent: HomepageContent = {
  headline: company.headline,
  subheadline:
    "From brand identity and promotional products to marketing automation and business systems, we deliver integrated solutions that move your business forward.",
  ctaPrimary: "Request a quote",
  ctaSecondary: "Explore services",
  trustLine: "Trusted by fast-moving teams across East Africa.",
  whyChooseUs: [
    "One partner for strategy, design, print, and digital execution",
    "Rapid turnarounds backed by clear project governance",
    "Data-led optimization across campaigns and customer journeys",
    "Scalable systems built for ambitious growth-stage teams",
  ],
  ctaHeadline: "Need a growth engine, not just another vendor?",
  ctaBody:
    "Book a discovery session and let Yolic architect the brand, demand, and operational systems your next stage needs.",
};

export const services: Service[] = [
  {
    id: "svc-branding",
    slug: "branding-design",
    name: "Branding & Design",
    summary: "Identity systems, campaign visuals, packaging concepts, and conversion-focused creative.",
    description:
      "We translate business strategy into visual systems that create trust, sharpen differentiation, and improve conversion across every touchpoint.",
    features: ["Brand strategy workshops", "Identity design systems", "Campaign art direction", "Packaging design"],
    deliverables: ["Logo suite", "Brand guidelines", "Social campaign kit", "Sales collateral templates"],
    icon: "Palette",
    heroStat: "34 rebrands launched",
    priceGuide: "Starting at $1,500",
    seoTitle: "Branding & Design Services | Yolic",
    seoDescription: "Brand systems, campaign design, and strategic creative for modern businesses.",
  },
  {
    id: "svc-print",
    slug: "printing-packaging",
    name: "Printing & Packaging",
    summary: "Production-grade print, packaging, signage, and branded collateral at scale.",
    description:
      "We manage the end-to-end print lifecycle from artwork preparation and material sourcing to finishing, fulfillment, and delivery.",
    features: ["Commercial print", "Product packaging", "POS displays", "Event branding"],
    deliverables: ["Packaging dielines", "Large-format banners", "Business stationery", "Promotional inserts"],
    icon: "Package",
    heroStat: "120K units delivered",
    priceGuide: "Custom quote",
    seoTitle: "Printing & Packaging Services | Yolic",
    seoDescription: "Packaging, signage, and production-ready print services for growing brands.",
  },
  {
    id: "svc-marketing",
    slug: "digital-marketing",
    name: "Digital Marketing",
    summary: "Performance marketing, content systems, social campaigns, and funnel optimization.",
    description:
      "Our growth team builds and optimizes demand generation programs that increase qualified traffic, leads, and revenue.",
    features: ["Paid media", "SEO content planning", "Email automation", "Reporting dashboards"],
    deliverables: ["Channel strategy", "Ad creatives", "Automation flows", "Executive dashboards"],
    icon: "Megaphone",
    heroStat: "4.7x ROAS average",
    priceGuide: "Starting at $900/mo",
    seoTitle: "Digital Marketing Services | Yolic",
    seoDescription: "Campaigns, SEO, and conversion systems engineered for measurable growth.",
  },
  {
    id: "svc-it",
    slug: "it-solutions",
    name: "IT Solutions",
    summary: "Business websites, internal tooling, workflow automation, and cloud-ready systems.",
    description:
      "We design and ship digital platforms that streamline operations, elevate customer experiences, and surface actionable insights.",
    features: ["Web platforms", "CRM setup", "Automation", "Systems integration"],
    deliverables: ["Discovery blueprint", "Web application", "Analytics setup", "Operations handbook"],
    icon: "MonitorCog",
    heroStat: "18 platforms shipped",
    priceGuide: "Starting at $3,000",
    seoTitle: "IT Solutions | Yolic",
    seoDescription: "Business systems, websites, dashboards, and workflow automation from one delivery team.",
  },
  {
    id: "svc-promotional",
    slug: "promotional-products",
    name: "Promotional Products",
    summary: "Curated branded merchandise programs that amplify visibility and loyalty.",
    description:
      "From executive gifting and campaign kits to trade-show giveaways, we source, brand, and distribute products that fit your market.",
    features: ["Merch curation", "Custom sourcing", "Event kits", "Corporate gifts"],
    deliverables: ["Merch catalog", "Sample packs", "Inventory plan", "Distribution tracker"],
    icon: "Gift",
    heroStat: "250+ SKUs sourced",
    priceGuide: "Custom quote",
    seoTitle: "Promotional Products | Yolic",
    seoDescription: "Branded merchandise, gifting, and campaign kits for unforgettable brand moments.",
  },
  {
    id: "svc-supply",
    slug: "general-supply",
    name: "General Supply",
    summary: "Reliable procurement and fulfillment for office, event, and operational supply needs.",
    description:
      "We simplify vendor coordination, sourcing, and delivery for organizations that need dependable supply-chain support.",
    features: ["Procurement support", "Vendor coordination", "Bulk sourcing", "Delivery management"],
    deliverables: ["Supplier shortlist", "Procurement timeline", "Inventory schedule", "Fulfillment tracker"],
    icon: "Truck",
    heroStat: "98% on-time delivery",
    priceGuide: "Custom quote",
    seoTitle: "General Supply Services | Yolic",
    seoDescription: "Procurement and supply support for efficient day-to-day business operations.",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "prj-aurora",
    slug: "aurora-retail-launch",
    title: "Aurora Retail Launch",
    category: "Retail Rollout",
    client: "Aurora Home",
    challenge: "Launch a premium retail line with cohesive branding, packaging, and store promotion assets in under eight weeks.",
    solution: "Yolic designed the launch identity, produced multi-SKU packaging, and deployed digital awareness campaigns supported by in-store assets.",
    results: ["32% faster launch readiness", "21% lift in store traffic", "11K product units packaged"],
    services: ["Branding & Design", "Printing & Packaging", "Digital Marketing"],
    year: "2025",
    image: "/gradients/retail",
    excerpt: "Integrated launch system for a multi-location retail debut.",
  },
  {
    id: "prj-summit",
    slug: "summit-healthcare-portal",
    title: "Summit Healthcare Portal",
    category: "Digital Transformation",
    client: "Summit Health Clinics",
    challenge: "Replace fragmented inquiry handling and outdated reporting across multiple branches.",
    solution: "We delivered a lead-ready website, internal visitor reporting, and a centralized operations dashboard tailored for branch managers.",
    results: ["43% faster lead response", "Centralized visitor reporting", "3 branches aligned"],
    services: ["IT Solutions", "Digital Marketing"],
    year: "2026",
    image: "/gradients/healthcare",
    excerpt: "A connected marketing and operations system for a fast-growing clinic network.",
  },
  {
    id: "prj-rift",
    slug: "rift-logistics-rebrand",
    title: "Rift Logistics Rebrand",
    category: "Brand Refresh",
    client: "Rift Logistics",
    challenge: "Modernize a logistics brand while preserving trust with enterprise procurement teams.",
    solution: "We built a scalable brand system, vehicle graphics, staff kits, and a capability site optimized for inbound RFQs.",
    results: ["62% stronger brand recall", "7 new enterprise deals", "Fleet-wide rollout in 30 days"],
    services: ["Branding & Design", "Promotional Products", "IT Solutions"],
    year: "2025",
    image: "/gradients/logistics",
    excerpt: "Enterprise-grade identity refresh spanning digital and physical touchpoints.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "how-integrated-brand-systems-drive-growth",
    title: "How Integrated Brand Systems Drive Growth Across Teams",
    excerpt: "Brand consistency becomes a revenue lever when marketing, sales, and operations share the same system.",
    featuredImage: "/gradients/brand-system",
    tags: ["Brand Strategy", "Operations", "Growth"],
    category: "Strategy",
    author: "Yolic Editorial",
    status: "published",
    publishedAt: "2026-05-12",
    readTime: "6 min read",
    seoTitle: "Integrated Brand Systems for Growth | Yolic Blog",
    seoDescription: "See how a unified brand system reduces friction and improves revenue execution.",
    content: `<h2>Why systems matter</h2><p>When brands scale, inconsistency compounds fast. Visual drift, duplicated templates, and channel silos can erode trust and slow execution.</p><h2>What integrated looks like</h2><p>Integrated systems give your team one source of truth for positioning, creative, and deployment. That means faster campaign launches, stronger quality control, and cleaner analytics.</p><h2>Operational outcomes</h2><ul><li>Shorter creative approval cycles</li><li>Clearer customer journeys</li><li>Higher-performing sales and marketing collateral</li></ul><p>Yolic builds the connective tissue between brand and execution so every team ships with more confidence.</p>`,
  },
  {
    id: "blog-2",
    slug: "website-seo-foundations-for-service-businesses",
    title: "Website SEO Foundations for Service Businesses",
    excerpt: "Strong service SEO starts with page architecture, internal links, and metadata discipline.",
    featuredImage: "/gradients/seo-foundations",
    tags: ["SEO", "Web", "Demand Generation"],
    category: "Marketing",
    author: "Yolic Growth Team",
    status: "published",
    publishedAt: "2026-04-22",
    readTime: "5 min read",
    seoTitle: "SEO Foundations for Service Businesses | Yolic Blog",
    seoDescription: "A practical guide to metadata, content structure, and technical SEO basics.",
    content: `<h2>Start with intent</h2><p>Each service page should map to a buying intent, not just a generic keyword. Clarify the audience, desired action, and differentiators for every route.</p><h2>Use metadata strategically</h2><p>Titles, descriptions, Open Graph assets, and canonical URLs help search engines and social platforms understand your positioning.</p><h2>Measure what matters</h2><p>Track landing-page conversions, not only traffic. The best SEO programs create qualified pipeline, not vanity impressions.</p>`,
  },
  {
    id: "blog-3",
    slug: "building-a-better-quote-management-process",
    title: "Building a Better Quote Management Process",
    excerpt: "Quote flow design affects close rates, response time, and how confident buyers feel about your team.",
    featuredImage: "/gradients/quote-management",
    tags: ["CRM", "Sales Ops", "Automation"],
    category: "Operations",
    author: "Yolic Systems Lab",
    status: "published",
    publishedAt: "2026-03-30",
    readTime: "7 min read",
    seoTitle: "Quote Management Best Practices | Yolic Blog",
    seoDescription: "Build a quote workflow that shortens response times and improves win rates.",
    content: `<h2>Speed wins deals</h2><p>Teams that standardize qualification, scope capture, and follow-up messaging move faster without sacrificing quality.</p><h2>Design the pipeline</h2><table><tr><th>Stage</th><th>Goal</th></tr><tr><td>New</td><td>Validate lead fit</td></tr><tr><td>Qualified</td><td>Define scope and budget</td></tr><tr><td>Won</td><td>Kick off delivery</td></tr></table><p>Good quote systems create visibility for marketing, sales, and delivery teams alike.</p>`,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Grace Njeri",
    company: "Aurora Home",
    role: "Managing Director",
    quote: "Yolic gave us a launch system, not just visuals. Their team connected packaging, promotions, and performance reporting seamlessly.",
    rating: 5,
  },
  {
    id: "t-2",
    name: "David Kibet",
    company: "Summit Health Clinics",
    role: "Operations Lead",
    quote: "The dashboard and CRM workflows brought clarity to our branches instantly. Lead follow-up is now measurable and fast.",
    rating: 5,
  },
  {
    id: "t-3",
    name: "Miriam Achieng",
    company: "Rift Logistics",
    role: "Commercial Director",
    quote: "Our rebrand finally feels enterprise-ready. Yolic helped us align field branding, proposals, and digital presence under one strategy.",
    rating: 5,
  },
];

export const faqs: FAQItem[] = [
  { id: "faq-1", question: "Do you work with startups and established businesses?", answer: "Yes. We tailor engagement models for founders, scaling SMEs, and established organizations with cross-functional needs." },
  { id: "faq-2", question: "Can Yolic handle both creative and technical delivery?", answer: "Absolutely. Our platform combines creative, digital, and operational execution so teams can move faster with fewer vendors." },
  { id: "faq-3", question: "How do quote requests work?", answer: "We review scope, timeline, and budget to qualify the opportunity, then send a structured proposal with deliverables and milestones." },
  { id: "faq-4", question: "Do you offer ongoing support after launch?", answer: "Yes. We support optimization, analytics reviews, CMS governance, and campaign iteration after delivery." },
];

export const analyticsMetrics: DashboardMetric[] = [
  { label: "Visitors Today", value: 482, change: 12.3, helper: "vs yesterday" },
  { label: "Visitors This Week", value: 3428, change: 8.4, helper: "week-over-week" },
  { label: "Visitors This Month", value: 14228, change: 14.9, helper: "month-over-month" },
  { label: "Total Visitors", value: 98452, change: 22.1, helper: "all-time growth" },
  { label: "Conversion Rate", value: 6.8, change: 1.1, helper: "lead conversion" },
  { label: "Page Views", value: 38412, change: 10.5, helper: "monthly page views" },
];

export const dailyTraffic: TrafficPoint[] = [
  { label: "Mon", visitors: 340, pageViews: 1080, conversions: 19 },
  { label: "Tue", visitors: 418, pageViews: 1230, conversions: 25 },
  { label: "Wed", visitors: 390, pageViews: 1160, conversions: 21 },
  { label: "Thu", visitors: 442, pageViews: 1298, conversions: 29 },
  { label: "Fri", visitors: 482, pageViews: 1424, conversions: 31 },
  { label: "Sat", visitors: 276, pageViews: 820, conversions: 16 },
  { label: "Sun", visitors: 228, pageViews: 744, conversions: 12 },
];

export const weeklyTraffic: TrafficPoint[] = [
  { label: "W1", visitors: 2900, pageViews: 8120, conversions: 160 },
  { label: "W2", visitors: 3160, pageViews: 9040, conversions: 184 },
  { label: "W3", visitors: 3292, pageViews: 9820, conversions: 201 },
  { label: "W4", visitors: 3428, pageViews: 10320, conversions: 222 },
];

export const monthlyTraffic: TrafficPoint[] = [
  { label: "Jan", visitors: 10220, pageViews: 26400, conversions: 610 },
  { label: "Feb", visitors: 11010, pageViews: 28220, conversions: 640 },
  { label: "Mar", visitors: 11830, pageViews: 30110, conversions: 688 },
  { label: "Apr", visitors: 12540, pageViews: 33020, conversions: 742 },
  { label: "May", visitors: 13420, pageViews: 35110, conversions: 801 },
  { label: "Jun", visitors: 14228, pageViews: 38412, conversions: 867 },
];

export const deviceBreakdown: DeviceShare[] = [
  { name: "Mobile", value: 58 },
  { name: "Desktop", value: 31 },
  { name: "Tablet", value: 11 },
];

export const trafficSources: SourceShare[] = [
  { name: "Organic Search", visitors: 4210, conversions: 286 },
  { name: "Direct", visitors: 3080, conversions: 194 },
  { name: "Social", visitors: 2260, conversions: 132 },
  { name: "Referral", visitors: 1824, conversions: 120 },
  { name: "Paid", visitors: 2854, conversions: 135 },
];

export const messages: MessageRecord[] = [
  { id: "msg-1", name: "Kevin Mwangi", email: "kevin@aurora.co", phone: "+254711000001", subject: "Packaging redesign", message: "We need updated packaging concepts for three SKUs before Q4.", status: "new", receivedAt: "2026-06-18 09:15" },
  { id: "msg-2", name: "Lucy Atieno", email: "latieno@summit.health", phone: "+254711000002", subject: "Website support", message: "Can we add a lead attribution dashboard to our existing portal?", status: "in-review", receivedAt: "2026-06-17 14:40" },
  { id: "msg-3", name: "John Kamau", email: "john@riftlogistics.com", phone: "+254711000003", subject: "Fleet branding", message: "We want a rollout plan for vehicle wraps across seven trucks.", status: "resolved", receivedAt: "2026-06-16 11:08" },
];

export const quoteRequests: QuoteRequestRecord[] = [
  { id: "quote-1", name: "Faith Ngeno", company: "Kijani Foods", email: "faith@kijani.com", phone: "+254722111222", service: "Branding & Design", budget: "$3,000 - $5,000", description: "Need a complete identity refresh and launch support for a packaged foods line.", status: "qualified", receivedAt: "2026-06-18 10:12" },
  { id: "quote-2", name: "Samuel Odhiambo", company: "Northstar Tours", email: "samuel@northstar.tours", phone: "+254733111222", service: "Digital Marketing", budget: "$1,500 - $3,000", description: "Looking for paid social and landing page optimization for seasonal campaigns.", status: "new", receivedAt: "2026-06-17 16:24" },
  { id: "quote-3", name: "Janet Wairimu", company: "Prime Build", email: "janet@primebuild.com", phone: "+254744111222", service: "IT Solutions", budget: "$6,000+", description: "Need a corporate website and CRM-enabled quote workflow for our sales team.", status: "won", receivedAt: "2026-06-14 08:55" },
];

export const leads: LeadRecord[] = [
  { id: "lead-1", company: "BluePeak Energy", contactPerson: "Allan Kimani", email: "allan@bluepeak.energy", phone: "+254755000001", notes: "Interested in a combined website and investor presentation redesign.", status: "contacted", value: 4200 },
  { id: "lead-2", company: "Mara Events", contactPerson: "Sharon Jepkoech", email: "sharon@maraevents.com", phone: "+254755000002", notes: "Needs promotional products and expo booth support for August expo.", status: "proposal-sent", value: 2800 },
  { id: "lead-3", company: "Elimu Connect", contactPerson: "Peter Oloo", email: "peter@elimuconnect.org", phone: "+254755000003", notes: "Exploring SEO and content growth partnership for a new B2B product launch.", status: "new", value: 1900 },
];

export const mediaAssets: MediaAsset[] = [
  { id: "media-1", name: "hero-brand-film.mp4", type: "video", size: "38 MB", updatedAt: "2026-06-18", url: "https://cdn.yolic.com/media/hero-brand-film.mp4" },
  { id: "media-2", name: "aurora-packaging-board.pdf", type: "pdf", size: "4.2 MB", updatedAt: "2026-06-17", url: "https://cdn.yolic.com/media/aurora-packaging-board.pdf" },
  { id: "media-3", name: "yolic-primary-logo.svg", type: "logo", size: "112 KB", updatedAt: "2026-06-16", url: "https://cdn.yolic.com/media/yolic-primary-logo.svg" },
  { id: "media-4", name: "summit-portal-preview.png", type: "image", size: "1.8 MB", updatedAt: "2026-06-16", url: "https://cdn.yolic.com/media/summit-portal-preview.png" },
];

export const seoSettings: SeoSetting[] = [
  { id: "seo-home", page: "/", title: "Yolic | Building Brands. Powering Businesses.", description: "Integrated branding, marketing, print, and IT solutions for growth-focused businesses.", keywords: ["branding agency", "digital marketing", "printing", "IT solutions"], canonicalUrl: "https://yolic.com/", ogTitle: "Yolic Growth Platform", ogDescription: "Integrated business growth services for modern teams.", score: 92 },
  { id: "seo-services", page: "/services", title: "Services | Yolic", description: "Explore branding, print, digital, IT, promotional products, and supply services.", keywords: ["branding services", "printing and packaging", "marketing agency"], canonicalUrl: "https://yolic.com/services", ogTitle: "Yolic Services", ogDescription: "Six integrated service lines built for business growth.", score: 88 },
  { id: "seo-blog", page: "/blog", title: "Insights | Yolic Blog", description: "Strategy, growth, operations, and digital transformation insights from Yolic.", keywords: ["marketing insights", "brand strategy", "operations"], canonicalUrl: "https://yolic.com/blog", ogTitle: "Yolic Insights", ogDescription: "Thought leadership on branding, growth, and operations.", score: 85 },
];

export const companySettings: CompanySettings = {
  companyName: company.name,
  email: company.email,
  phone: company.phone,
  address: company.address,
  socials: company.socials,
};

export const staffAccounts: StaffAccount[] = [
  { id: "staff-1", fullName: "Amina Noor", role: "Operations Admin", email: "amina@yolic.com", permissions: ["cms", "crm", "seo"] },
  { id: "staff-2", fullName: "Brian Mutiso", role: "Growth Strategist", email: "brian@yolic.com", permissions: ["analytics", "crm", "blog"] },
];
