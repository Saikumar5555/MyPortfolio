export default function Contact() {
  const email = 'saikumar235711@gmail.com';

  return (
    <section id="contact" className="py-20 border-t border-brand-border/40">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="relative bg-brand-card border border-brand-border rounded-2xl px-8 py-16 md:py-20 text-center overflow-hidden">
          
          {/* Glowing background circle */}
          <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(6,182,212,0.12),transparent_70%)] pointer-events-none z-0" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="font-disp text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-ivory">
              Let's build something together
            </h2>
            <p className="text-brand-muted text-[15.5px] max-w-[480px] mx-auto leading-relaxed">
              Open to frontend and full-stack roles where I can own features end to end — from interface to infrastructure.
            </p>
            
            {/* Action link buttons */}
            <div className="flex gap-4 justify-center flex-wrap pt-6">
              {/* Primary Email CTA (Direct Gmail Compose) */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[13.5px] font-semibold bg-gradient-to-r from-brand-green to-brand-green-dim text-brand-bg px-6 py-3.5 rounded-lg shadow-lg shadow-brand-green/10 hover:shadow-brand-green/20 hover:-translate-y-[1px] transition-all duration-300"
              >
                saikumar235711@gmail.com
              </a>


              <a
                href="https://www.linkedin.com/in/sai-kumar005"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13.5px] border border-brand-border text-brand-ivory px-6 py-3.5 rounded-lg transition-all duration-300 hover:border-brand-green hover:text-brand-green hover:-translate-y-[1px] hover:shadow-lg hover:shadow-brand-green/5"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Saikumar5555"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13.5px] border border-brand-border text-brand-ivory px-6 py-3.5 rounded-lg transition-all duration-300 hover:border-brand-green hover:text-brand-green hover:-translate-y-[1px] hover:shadow-lg hover:shadow-brand-green/5"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer embedded in the Contact section */}
      <footer className="mt-20 pt-9 border-t border-brand-border/30">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-2.5 font-mono text-[12px] text-brand-muted-2">
          <span>© 2026 Saikumar Jagabathula</span>
        </div>
      </footer>
    </section>
  );
}
