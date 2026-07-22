

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

const projectStyles = [
  {
    sub: "text-purple-700 font-bold",
    bullet: "bg-purple-600",
    tag: "bg-purple-50 text-purple-900 border-purple-200 hover:bg-purple-100 hover:border-purple-300",
    cardHover: "hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5"
  },
  {
    sub: "text-sky-700 font-bold",
    bullet: "bg-sky-600",
    tag: "bg-sky-50 text-sky-900 border-sky-200 hover:bg-sky-100 hover:border-sky-300",
    cardHover: "hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5"
  },
  {
    sub: "text-emerald-700 font-bold",
    bullet: "bg-emerald-600",
    tag: "bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300",
    cardHover: "hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-brand-border/40 bg-bg-projects">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-950 font-mono text-[15px] font-bold mb-4 shadow-xs">
          <span className="text-purple-600 font-extrabold">//</span> projects
        </div>
        <h2 className="font-disp font-bold text-3xl md:text-4xl mb-11 tracking-tight">Selected work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => {
            const style = projectStyles[idx % projectStyles.length];
            return (
              <div
                key={idx}
                className={`bg-white border border-gray-200/80 rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${style.cardHover}`}
              >
                {/* Project index number */}
                <div className="font-mono text-[12px] text-gray-400 font-medium mb-3.5">
                  {proj.num}
                </div>
                
                {/* Title & Sub */}
                <h3 className="font-disp text-[21px] font-bold mb-1.5 text-gray-900 transition-colors">
                  {proj.title}
                </h3>
                <div className={`font-mono text-[11px] tracking-wider uppercase mb-5 ${style.sub}`}>
                  {proj.sub}
                </div>
                
                {/* Contributions */}
                <ul className="text-gray-600 text-[13.5px] leading-relaxed space-y-2.5 flex-grow mb-6 list-none">
                  {proj.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="relative pl-4.5">
                      <span className={`absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full ${style.bullet}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                {/* Tags Row */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 mt-auto">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-sans text-[11.5px] font-medium border px-3 py-1 rounded-full transition-all duration-200 ${style.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

