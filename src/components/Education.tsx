

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-brand-border/40 bg-bg-education">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[13px] text-brand-green flex items-center gap-2.5 mb-3">
          <span className="text-brand-muted-2">//</span> education
        </div>
        <h2 className="font-disp font-bold text-3xl md:text-4xl mb-11 tracking-tight">Academic background</h2>
        
        <div className="bg-brand-card border border-brand-border rounded-lg p-[30px] md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-disp text-[20px] font-semibold mb-1 text-brand-ivory">
              Bachelor of Information Technology
            </h3>
            <p className="text-brand-muted text-[14.5px]">
              Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
            </p>
          </div>
          <div className="md:text-right font-mono self-stretch md:self-auto border-t md:border-t-0 border-brand-border/30 pt-4 md:pt-0 flex md:flex-col justify-between md:justify-center items-center md:items-end">
            <span className="text-[13px] text-brand-muted-2 tracking-wide order-last md:order-first">
              2018 — 2022
            </span>
            <span className="text-2xl font-bold text-brand-green">
              CGPA 7.9
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
