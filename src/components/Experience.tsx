

const experiences = [
  {
    period: 'MAY 2024 — PRESENT',
    role: 'Frontend Developer',
    org: 'Intelliod Private Ltd',
    highlights: [
      'Build and maintain client-facing web applications end to end using React.js, TypeScript, and Tailwind CSS, working directly with clients to turn requirements into shipped features',
      'Designed role-based access control and multi-tenant permission systems used across several client projects, including protected routes and permission-aware UI',
      'Added real-time functionality (chat, notifications, live updates) with Socket.io, and integrated AI-assisted features using FastAPI and AWS Bedrock',
      'Improved page load performance through lazy loading, code splitting, and React Suspense on larger, data-heavy applications'
    ]
  },
  {
    period: 'JULY 2023 — APRIL 2024',
    role: 'Software Engineer',
    org: 'Rosys Virtual Solutions',
    highlights: [
      'Built and iteratively refined object detection and facial recognition models, benchmarking against baseline performance and reducing false-positive rates through continuous testing with the team',
      'Enhanced a real-time Digital Twin Dashboard for monitoring and visualizing 1500+ towers/sites',
      'Tuned front-end performance and SEO fundamentals, cutting page load times'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-brand-border/40">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[13px] text-brand-green flex items-center gap-2.5 mb-3">
          <span className="text-brand-muted-2">//</span> experience
        </div>
        <h2 className="font-disp font-bold text-3xl md:text-4xl mb-11 tracking-tight">Where I've worked</h2>
        
        <div className="border-l border-brand-border ml-2 pl-8 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node dot */}
              <div className="absolute -left-[38px] md:-left-[46px] top-1.5 w-[11px] h-[11px] rounded-full bg-brand-bg border-2 border-brand-green shadow-[0_0_12px_rgba(57,224,122,0.4)] group-hover:scale-125 transition-transform duration-200" />
              
              {/* Date Period */}
              <div className="font-mono text-[12px] text-brand-muted-2 mb-1.5 tracking-wider">
                {exp.period}
              </div>
              
              {/* Title & Organization */}
              <h3 className="font-disp text-xl md:text-2xl font-semibold mb-1 text-brand-ivory">
                {exp.role}
              </h3>
              <div className="font-mono text-[13.5px] text-brand-green mb-5">
                {exp.org}
              </div>
              
              {/* Bullets */}
              <ul className="list-none text-brand-muted text-[14.5px] space-y-3 max-w-[800px]">
                {exp.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="relative pl-5">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-brand-green/60" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
