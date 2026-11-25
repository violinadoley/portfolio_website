/**
 * Single Source of Truth
 * ----------------------
 * All editable content for the portfolio website.
 * Update this file to change any text, links, or styling across the site.
 */

// =============================================================================
// PROFILE - Basic information
// =============================================================================

export const profile = {
  name: "Violina Doley",
  title: "Software Developer",
  subtitle: "AI Researcher",
  email: "violina.doley2025@gmail.com",
  location: "India",

  social: {
    github: "https://github.com/violinadoley",
    linkedin: "https://www.linkedin.com/in/violinadoley/",
  },

  cv: "/Violina_Doley_Resume.pdf",

  // Short bio for the homepage - use {highlight} syntax for colored spans
  bio: [
    "I build {intelligent systems|orange} at the intersection of AI research and software engineering. Currently working as a {Product Solutions Engineer|blue} at {Eightfold AI|blue}, partnering with enterprise customers to deploy AI-powered talent solutions.",
    "I actively participate in {hackathons|pink} and enjoy rapid prototyping and problem-solving. Open to collaborating on {impactful and research-driven work|purple}.",
  ],
};

// =============================================================================
// HIGHLIGHT COLORS - Map of color names to CSS classes
// =============================================================================

export const highlightColors = {
  blue: "highlight-blue",
  green: "highlight-green",
  orange: "highlight-orange",
  purple: "highlight-purple",
  pink: "highlight-pink",
  yellow: "highlight-yellow",
} as const;

export type HighlightColor = keyof typeof highlightColors;

// =============================================================================
// EDUCATION
// =============================================================================

export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  period: string;
  focusArea?: string;
}

export const education: EducationItem[] = [
  {
    institution: "National Institute of Technology Karnataka, Surathkal",
    degree: "B.Tech in Computer Science and Engineering",
    score: "",
    period: "2021 - 2025",
    focusArea: "Artificial Intelligence and Machine Learning",
  },
];

// =============================================================================
// EXPERIENCE - Full sentence descriptions with highlights
// =============================================================================

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  color: HighlightColor;
  // Use {text|color} syntax for inline highlights in description
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Eightfold AI",
    role: "Product Solutions Engineer",
    period: "Jun 2026 - Present",
    color: "blue",
    description:
      "Work with enterprise customers to {deploy and integrate|blue} Eightfold's AI talent platform, translating business needs into {production-ready solutions|green} and driving successful adoption.",
  },
  {
    company: "IBM",
    role: "Data Scientist",
    period: "Aug 2025 - Jun 2026",
    color: "orange",
    description:
      "Part of the {data warehousing team|orange}, working on {automating the query translation process|blue} to enable seamless data access across different systems.",
  },
  {
    company: "Siemens",
    role: "AI Intern",
    period: "Jan 2025 - Mar 2025",
    color: "blue",
    description:
      "Developed a {GNN-based framework|blue} for adaptive mesh simulations, enabling efficient and accurate simulations of complex physical systems. Enhanced simulation accuracy and scalability across domains such as {fluid dynamics|green} and {structural mechanics|purple}.",
  },
  {
    company: "SuperKalam (YC W23)",
    role: "AI Research Intern",
    period: "Aug 2024 - Sep 2024",
    color: "green",
    description:
      "Worked on {LLM finetuning|green} with parameter optimization and {RLHF|purple} for UPSC-specific improvements. Developed {Advanced Prompt Engineering|orange} for evaluating answers across 10+ competitive subjects, creating {LLM-as-a-Judge templates|blue} for automated grading.",
  },
  {
    company: "IBM",
    role: "Data and AI Intern",
    period: "May 2024 - Jul 2024",
    color: "purple",
    description:
      "Designed a {RAG chatbot|purple} for sales professionals using Langchain and OpenAI API to streamline order booking, product recommendations, and sales pitch generation. Integrated {PDF and SQL|blue} for real-time customer-specific insights with seamless interaction via {WhatsApp|green}.",
  },
  {
    company: "IIT Hyderabad",
    role: "Machine Learning Research Internship",
    period: "Dec 2023 - Feb 2024",
    color: "blue",
    description:
      "Implemented {VirConv-L and VirConv-T models|blue} on the KITTI dataset, extending the architecture with {Squeeze-and-Excitation (S&E)|green} and {Pointwise Spatial Attention blocks|purple}, achieving a {2% improvement|orange} in 3D Average Precision (AP) for VirConv-L, enhancing autonomous driving model performance.",
  },
];

// =============================================================================
// HIGHLIGHTS & ACHIEVEMENTS - For the Work page
// =============================================================================

export interface HighlightItem {
  title: string;
  description: string;
  color: HighlightColor;
}

export const highlights: HighlightItem[] = [
  {
    title: "SUI Overflow 2025",
    description: "Global Runner Up in the Programmable Storage track. Built a decentralized Graph DB on Sui blockchain.",
    color: "pink",
  },
  {
    title: "0G Labs Grant Recipient (2x)",
    description: "Received grants worth approximately ₹60k to develop a Vector Database project.",
    color: "blue",
  },
  {
    title: "KukuFM Project K Competition 2025",
    description: "First Runner-up. Built an AI storytelling assistant.",
    color: "purple",
  },
  {
    title: "The Great Bangalore Hackathon 2025",
    description: "Top 27 teams out of 150 semifinalists, selected from over 4800+ applicants Pan-India.",
    color: "green",
  },
];

// =============================================================================
// PROJECTS - For the Work page
// =============================================================================

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
  period: string;
  color: HighlightColor;
  achievement?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Jivana Connect",
    description:
      "Built a {voice-first clinic coordination platform|green} where the AI agent Jiya handles {appointment follow-ups|blue}, test reminders, and recovery check-ins. Captures {patient-reported concerns|pink} from multilingual calls and routes them to clinicians with {structured queues|orange}, timelines, and next actions in one workspace.",
    tech: ["React", "TypeScript", "FastAPI", "MongoDB", "Bolna AI", "Firebase"],
    url: "https://project-bf77a013-c0b3-413c-a75.web.app/",
    period: "Oct 2026",
    color: "green",
    achievement: "Built for the Bolna Symphony Buildathon",
  },
  {
    name: "IntentGuard",
    description:
      "Built {execution policy for AI trading agents|purple} on Injective — {typed on-chain AuthZ|blue}, an isolated grantee signer, and {notional limits|orange} so agents can propose trades without holding keys or exceeding their mandate. Includes policy gateway, web setup flow, and {MCP/API|green} access; live on Injective testnet.",
    tech: ["Next.js", "TypeScript", "Injective SDK", "AuthZ", "Cloud Run", "MCP"],
    url: "https://injective-buildathon.vercel.app/",
    period: "Nov 2026",
    color: "purple",
    achievement: "Built for the Injective buildathon",
  },
  {
    name: "WalGraph",
    description:
      "Built a scalable {decentralized graph database|blue} using {SUI blockchain|green} and {Walrus protocol|purple} for decentralized storage. Implemented {Cypher-like query engine|orange} and an interactive {D3.js interface|pink} for visualization, querying, and analytics.",
    tech: ["Next.js", "TypeScript", "SUI Blockchain", "Move", "Walrus Protocol"],
    github: "https://github.com/violinadoley/WalGraph",
    period: "Mar – July 2025",
    color: "blue",
  },
  {
    name: "Smart Ride Matching with Demand Prediction",
    description:
      "Developed a novel solution to improve {driver-customer matching|green} to reduce cancellation, along with {dynamic-pricing system|blue}. Deployed a {masked autoencoder|purple} to predict customer requests and guide drivers to {hotspots|orange} via an interactive map.",
    tech: ["NextJs", "ReactJs", "MapBox", "Gemini", "SarvamAI"],
    github: "https://github.com/mallikaakash/TGBH-StackedPitha",
    period: "Mar 2025",
    color: "green",
  },
  {
    name: "KathaAI",
    description:
      "Built an {AI-powered storytelling assistant|purple} that generates {personalized stories|blue} based on user preferences. Enabled {chapter-wise generation|green} with {real-time feedback|orange}, and export to PDF with custom covers and {audiobooks|pink}.",
    tech: ["NextJs", "ReactJs", "MapBox", "Gemini", "SarvamAI"],
    github: "https://github.com/mallikaakash/TGBH-StackedPitha",
    period: "Apr 2025",
    color: "purple",
  },
];

// =============================================================================
// PUBLICATIONS
// =============================================================================

export interface PublicationItem {
  title: string;
  venue: string;
  year: string;
  link?: string;
  color: HighlightColor;
}

export const publications: PublicationItem[] = [
  {
    title: "Improving Dynamic TDMA for Wireless Sensor Networks",
    venue: "14th ICCCNT IEEE Conference, Indian Institute of Technology Delhi",
    year: "2023",
    link: "http://14icccnt.com/program-schedule.php",
    color: "blue",
  },
];

// =============================================================================
// BLOG POSTS - External links to posts on various platforms
// =============================================================================

export type BlogPlatform = "medium" | "linkedin" | "notion" | "personal" | "dev" | "hashnode";

export interface BlogPost {
  title: string;
  description: string;
  url: string;
  platform: BlogPlatform;
  date: string; // Format: "YYYY-MM-DD"
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  // Add your blog posts here
  // Example:
  // {
  //   title: "Building RAG Pipelines at Scale",
  //   description: "How we reduced latency by 46.5% using hybrid retrieval strategies",
  //   url: "https://medium.com/@aakashmallik/...",
  //   platform: "medium",
  //   date: "2024-12-01",
  //   tags: ["AI", "RAG", "Machine Learning"],
  // },
];

// Platform display names and icons
export const platformLabels: Record<BlogPlatform, string> = {
  medium: "Medium",
  linkedin: "LinkedIn",
  notion: "Notion",
  personal: "Blog",
  dev: "Dev.to",
  hashnode: "Hashnode",
};

// =============================================================================
// NAVIGATION
// =============================================================================

export const navigation = [
  { name: "About", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
];

