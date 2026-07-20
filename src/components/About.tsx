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
    header: "text-pastel-mint-text",
    tag: "bg-pastel-mint-bg text-pastel-mint-text border-pastel-mint-text/20 hover:border-pastel-mint-text hover:-translate-y-[0.5px]",
    cardHover: "hover:border-pastel-mint-text/40 hover:shadow-lg hover:shadow-pastel-mint-bg/15"
  },
  {
    header: "text-pastel-blue-text",
    tag: "bg-pastel-blue-bg text-pastel-blue-text border-pastel-blue-text/20 hover:border-pastel-blue-text hover:-translate-y-[0.5px]",
    cardHover: "hover:border-pastel-blue-text/40 hover:shadow-lg hover:shadow-pastel-blue-bg/15"
  },
  {
    header: "text-pastel-purple-text",
    tag: "bg-pastel-purple-bg text-pastel-purple-text border-pastel-purple-text/20 hover:border-pastel-purple-text hover:-translate-y-[0.5px]",
    cardHover: "hover:border-pastel-purple-text/40 hover:shadow-lg hover:shadow-pastel-purple-bg/15"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-brand-border/40 bg-bg-about">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[13px] text-brand-green flex items-center gap-2.5 mb-3">
          <span className="text-brand-muted-2">//</span> about
        </div>
        <h2 className="font-disp font-bold text-3xl md:text-4xl mb-11 tracking-tight">Who I am</h2>
        
        {/* Biography Block */}
        <div className="max-w-3xl space-y-6 mb-16">
          <p className="text-brand-muted text-[16px] md:text-[17px] leading-relaxed">
            I'm a frontend developer who ships production applications end to end — React and TypeScript on the client, FastAPI and Node on the server, and the AWS infrastructure that ties them together.
          </p>
          <p className="text-brand-muted text-[16px] md:text-[17px] leading-relaxed">
            My recent work spans role-based access control and multi-tenant permission systems, real-time features like chat and live updates, and AI-assisted workflows including RAG pipelines on AWS Bedrock — always keeping an eye on performance as applications scale.
          </p>
          
          {/* Stats row */}
          <div className="flex gap-12 pt-8 flex-wrap">
            <div className="group">
              <b className="block font-disp text-4xl md:text-5xl text-brand-green group-hover:scale-105 transition-transform duration-200 origin-left">3+</b>
              <span className="block font-mono text-[11px] tracking-wider text-brand-muted-2 uppercase mt-1">Years Experience</span>
            </div>
            <div className="group">
              <b className="block font-disp text-4xl md:text-5xl text-brand-green group-hover:scale-105 transition-transform duration-200 origin-left">2</b>
              <span className="block font-mono text-[11px] tracking-wider text-brand-muted-2 uppercase mt-1">Companies</span>
            </div>
            <div className="group">
              <b className="block font-disp text-4xl md:text-5xl text-brand-green group-hover:scale-105 transition-transform duration-200 origin-left">3</b>
              <span className="block font-mono text-[11px] tracking-wider text-brand-muted-2 uppercase mt-1">Major Projects</span>
            </div>
          </div>
        </div>

        {/* Skill Groups Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const style = categoryStyles[idx % categoryStyles.length];
            return (
              <div
                key={idx}
                className={`bg-brand-card border border-brand-border rounded-lg p-[18px] md:p-[20px] transition-all duration-300 ${style.cardHover}`}
              >
                <div className={`font-mono text-[11px] tracking-wider uppercase mb-3.5 ${style.header}`}>
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-[11.5px] border px-3 py-1 rounded-full transition-all duration-200 ${style.tag}`}
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
    </section>
  );
}
