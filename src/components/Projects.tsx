

const projects = [
  {
    num: '01',
    title: 'Miftah AI',
    sub: 'AI CONCIERGE & OPERATIONS PLATFORM',
    highlights: [
      'Built conversational AI interfaces for property discovery, travel planning, and personalized recommendations',
      'Wired up a RAG pipeline (FastAPI, Chroma DB, AWS Bedrock) so responses stay grounded in relevant context',
      'Built out CRM modules with role-based access, analytics dashboards, and map-based search using Leaflet.js'
    ],
    tags: ['React.js', 'FastAPI', 'AWS Bedrock', 'Chroma DB']
  },
  {
    num: '02',
    title: 'SellAnyHome.ai',
    sub: 'CONSUMER REAL ESTATE PLATFORM',
    highlights: [
      'Built a consumer-facing real estate platform with a clean, responsive UI and multi-step onboarding that preserves progress across sessions',
      'Implemented role-based access control across several user types, with protected routes and permission-based rendering',
      'Added real-time chat and notifications with Socket.io; set up Vitest, ESLint, Husky, and GitHub Actions for testing and CI'
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind v4', 'Socket.io']
  },
  {
    num: '03',
    title: 'Oyesell',
    sub: 'B2B SALES AUTOMATION PLATFORM',
    highlights: [
      'Built a high-performance SaaS platform with a dynamic landing page featuring custom scroll animations, plus a comprehensive user dashboard',
      'Implemented secure authentication and protected routing with Firebase, using TanStack Query for efficient state management and data fetching',
      'Engineered a scalable component architecture with Radix UI and Framer Motion; set up Vite, Vitest, Playwright, and ESLint'
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Firebase']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-brand-border/40">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[13px] text-brand-green flex items-center gap-2.5 mb-3">
          <span className="text-brand-muted-2">//</span> projects
        </div>
        <h2 className="font-disp font-bold text-3xl md:text-4xl mb-11 tracking-tight">Selected work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-brand-card border border-brand-border rounded-lg p-6.5 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand-green-dim hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Project index number */}
              <div className="font-mono text-[12px] text-brand-muted-2 mb-3.5">
                {proj.num}
              </div>
              
              {/* Title & Sub */}
              <h3 className="font-disp text-[20px] font-semibold mb-1.5 text-brand-ivory group-hover:text-brand-green transition-colors">
                {proj.title}
              </h3>
              <div className="font-mono text-[11px] text-brand-green tracking-wider uppercase mb-5">
                {proj.sub}
              </div>
              
              {/* Contributions */}
              <ul className="text-brand-muted text-[13.5px] space-y-2.5 flex-grow mb-6 list-none">
                {proj.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="relative pl-4.5">
                    <span className="absolute left-0 top-2.5 w-1.25 h-1.25 rounded-full bg-brand-green-dim" />
                    {bullet}
                  </li>
                ))}
              </ul>
              
              {/* Tags Row */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-border/40 mt-auto">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10.5px] text-brand-muted-2 border border-brand-border bg-brand-bg-alt/50 px-2.5 py-1 rounded-full hover:text-brand-green hover:border-brand-green/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
