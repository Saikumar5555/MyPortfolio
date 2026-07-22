const personalDetailsLeft = [
  { label: 'Role', value: 'Frontend & Web Developer' },
  { label: 'Experience', value: '3+ Years' },
  { label: 'Email', value: 'saikumar235711@gmail.com', href: 'mailto:saikumar235711@gmail.com' },
  { label: 'GitHub', value: 'github.com/Saikumar5555', href: 'https://github.com/Saikumar5555' },
];

const personalDetailsRight = [
  { label: 'Degree', value: 'Bachelor\'s Degree' },
  { label: 'LinkedIn', value: 'in/sai-kumar005', href: 'https://www.linkedin.com/in/sai-kumar005' },
  { label: 'Freelance', value: 'Available' },
  { label: 'Status', value: 'Open for Opportunities' },
];

const skillCategories = [
  {
    title: 'Languages & Frontend',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS', 'React.js', 'React Native', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend & Cloud',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Socket.io', 'AWS (S3, Bedrock)', 'Firebase', 'RAG Pipelines']
  },
  {
    title: 'Data & Tooling',
    skills: ['MySQL', 'MongoDB', 'ChromaDB', 'Vitest', 'Playwright', 'ESLint', 'Husky', 'GitHub Actions', 'Git', 'Postman']
  }
];

const categoryStyles = [
  {
    header: "text-purple-700",
    tag: "bg-purple-50 text-purple-900 border-purple-200 hover:bg-purple-100 hover:border-purple-300",
    cardHover: "hover:border-purple-300 hover:shadow-md hover:shadow-purple-500/5"
  },
  {
    header: "text-sky-700",
    tag: "bg-sky-50 text-sky-900 border-sky-200 hover:bg-sky-100 hover:border-sky-300",
    cardHover: "hover:border-sky-300 hover:shadow-md hover:shadow-sky-500/5"
  },
  {
    header: "text-emerald-700",
    tag: "bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300",
    cardHover: "hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/5"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-brand-border/40 bg-bg-about">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-950 font-mono text-[15px] font-bold mb-4 shadow-xs">
            <span className="text-purple-600 font-extrabold">//</span> about
          </div>
          <h2 className="font-disp font-bold text-3xl md:text-4xl text-gray-900 tracking-tight">
            About
          </h2>
          {/* Accent underline bar */}
          <div className="w-12 h-[3px] bg-[#0099ff] mt-2 mb-5 rounded-full"></div>
          
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-5xl">
            I'm a frontend developer who ships production applications end to end — React and TypeScript on the client, FastAPI and Node on the server, and the AWS infrastructure that ties them together.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Image */}
          <div className="lg:col-span-4">
            <div className="rounded-none overflow-hidden shadow-sm border border-gray-200 bg-white">
              <img
                src={`${import.meta.env.BASE_URL}myprofile.png`}
                alt="Saikumar Jagabathula"
                className="w-full h-auto object-cover block"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>

          {/* Right Column: Info & Details */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-disp font-bold text-2xl md:text-3xl text-gray-900 tracking-tight">
              Frontend Developer & Web Engineer.
            </h3>
            
            <p className="italic text-gray-600 text-[15px] leading-relaxed">
              Passionate about creating scalable web applications, real-time features, and AI-assisted workflows with intuitive user experiences.
            </p>

            {/* Details 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 py-2">
              <ul className="space-y-3.5 text-[14.5px]">
                {personalDetailsLeft.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-3.5 h-3.5 text-[#0099ff] mr-2 shrink-0 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-bold text-gray-900 mr-2">{item.label}:</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0099ff] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="space-y-3.5 text-[14.5px]">
                {personalDetailsRight.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-3.5 h-3.5 text-[#0099ff] mr-2 shrink-0 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-bold text-gray-900 mr-2">{item.label}:</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0099ff] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed pt-2">
              My recent work spans role-based access control and multi-tenant permission systems, real-time features like chat and live updates, and AI-assisted workflows including RAG pipelines on AWS Bedrock — always keeping an eye on performance as applications scale.
            </p>

            {/* Quick Stats Banner */}
            <div className="flex gap-8 pt-4 flex-wrap border-t border-gray-100">
              <div>
                <b className="block font-disp text-2xl text-purple-600">3+</b>
                <span className="block text-[12px] text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <b className="block font-disp text-2xl text-purple-600">2</b>
                <span className="block text-[12px] text-gray-500 uppercase tracking-wider">Companies</span>
              </div>
              <div>
                <b className="block font-disp text-2xl text-purple-600">3</b>
                <span className="block text-[12px] text-gray-500 uppercase tracking-wider">Major Projects</span>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="pt-8 border-t border-gray-100">
          <h4 className="font-disp font-bold text-xl text-gray-900 mb-6 tracking-tight">Technical Skills</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => {
              const style = categoryStyles[idx % categoryStyles.length];
              return (
                <div
                  key={idx}
                  className={`bg-white border border-gray-200/80 rounded-xl p-5 md:p-6 transition-all duration-300 ${style.cardHover}`}
                >
                  <div className={`font-mono text-[12px] font-bold tracking-wider uppercase mb-4 ${style.header}`}>
                    {category.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`font-sans text-[12.5px] font-medium border px-3 py-1 rounded-full transition-all duration-200 ${style.tag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}



