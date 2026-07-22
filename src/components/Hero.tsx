import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [typedRole, setTypedRole] = useState('');
  const roles = ["Frontend Developer", "React Engineer", "Full-Stack Builder"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: any;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedRole(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedRole(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Digital Rain Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    
    resizeCanvas();

    const codeSymbols = [
      'const', 'let', 'function', '=>', 'React', 'useState', 'useEffect',
      'import', 'export', 'div', 'TypeScript', 'API', 'AWS', 'FastAPI',
      '{...}', '[...]', '&&', '||', '===', 'npm', 'git', 'RAG', 'Bedrock',
      'Socket', 'true', 'null', 'map', 'filter', 'async', 'await'
    ];

    const fontSize = 11;
    const columns = Math.floor(canvas.width / 55); 
    const drops: number[] = [];
    const columnSymbols: string[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = (Math.random() * -canvas.height) / fontSize;
      columnSymbols[i] = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `500 ${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = columnSymbols[i];
        const x = i * 62;
        const y = drops[i] * fontSize;

        ctx.fillStyle = 'rgba(124, 58, 237, 0.05)'; 
        ctx.fillText(text, x, y);

        for (let j = 1; j <= 4; j++) {
          const trailY = y - (j * fontSize * 1.6);
          if (trailY > 0) {
            ctx.fillStyle = `rgba(124, 58, 237, ${0.05 / (j + 1.2)})`;
            ctx.fillText(text, x, trailY);
          }
        }

        drops[i] += 0.12;

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
          columnSymbols[i] = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <header id="home" className="min-h-[calc(100vh-72px)] flex items-center py-16 md:py-24 relative overflow-hidden bg-bg-hero">
      {/* Subtle Code Rain Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      
      <div className="w-full max-w-[1340px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
        <div>
          {/* Greeting */}
          <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-700 tracking-tight font-normal mb-1.5 reveal-up">
            Hello! I'm
          </div>

          {/* Name Header */}
          <div className="relative inline-block mb-4 reveal-up delay-75">
            <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-gray-900">
              Saikumar Jagabathula
            </h1>
            {/* Squiggle underline doodle */}
            <svg className="w-full max-w-[320px] h-4 text-purple-600 mt-1" viewBox="0 0 320 16" fill="none">
              <path d="M2 9 Q 40 3, 80 9 T 160 9 T 240 9 T 318 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>

          {/* Role typing effect */}
          <div className="font-mono text-xl md:text-2xl text-purple-700 font-bold mb-6 flex items-center min-h-[36px] reveal-up delay-100">
            <span>{typedRole}</span>
            <span className="inline-block w-[10px] h-[22px] bg-purple-600 ml-1.5 animate-cursor-blink"></span>
          </div>

          {/* Summary */}
          <p className="text-gray-600 text-[16.5px] sm:text-[17.5px] max-w-[600px] mb-9 leading-relaxed reveal-up delay-150">
            Frontend developer with 3+ years shipping production web applications, from consumer-facing platforms to internal operations tools. Specialized in React, TypeScript & AWS infrastructure.
          </p>

          {/* Action buttons */}
          <div className="flex gap-6 items-center flex-wrap mb-10 reveal-up delay-200">
            <a
              href={`${import.meta.env.BASE_URL}SaikumarFrontendResume.pdf`}
              download="SaikumarFrontendResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[15px] font-semibold bg-gray-900 text-white px-8 py-4 rounded-full border border-gray-800 shadow-xl shadow-gray-900/10 hover:bg-purple-600 hover:border-purple-600 hover:-translate-y-[2px] transition-all duration-300 flex items-center gap-2.5"
            >
              <span>Get Resume</span>
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>

            <a
              href="#projects"
              className="group flex items-center gap-3.5 text-gray-800 font-medium hover:text-purple-600 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center group-hover:border-purple-600 group-hover:bg-purple-50 group-hover:scale-105 transition-all">
                <svg className="w-5 h-5 text-gray-800 group-hover:text-purple-600 stroke-[2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="font-mono text-[14px]">View Projects</span>
            </a>
          </div>

          {/* Quick Contact Links */}
          <div className="flex gap-x-7 gap-y-2 flex-wrap font-mono text-[14px] text-gray-600 reveal-up delay-300">
            <a href="mailto:saikumar235711@gmail.com" className="hover:text-purple-600 transition-colors">saikumar235711@gmail.com</a>
            <a href="https://www.linkedin.com/in/sai-kumar005" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">LinkedIn</a>
            <a href="https://github.com/Saikumar5555" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">GitHub</a>
          </div>
        </div>

        {/* Orbit Profile Layout - Badges Shifted Far Right Clear of Image */}
        <div className="relative justify-self-center lg:justify-self-end w-full max-w-[650px] h-[600px] flex items-center justify-center reveal-up delay-200 overflow-visible">
          
          {/* Ambient Glow Backdrop */}
          <div className="absolute left-[100px] top-[300px] -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-purple-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          {/* Concentric Arc Orbit Lines Fanning Out to the Right */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 650 600" preserveAspectRatio="xMidYMid meet" fill="none">
            <circle cx="20" cy="300" r="300" stroke="rgba(147, 51, 234, 0.12)" strokeWidth="1" />
            <circle cx="20" cy="300" r="410" stroke="rgba(147, 51, 234, 0.18)" strokeWidth="1" />
            {/* Outermost Dashed Main Orbit for Badges (r = 520) - Shifted Far Right */}
            <circle cx="20" cy="300" r="520" stroke="rgba(147, 51, 234, 0.32)" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="20" cy="300" r="610" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
          </svg>

          {/* Cutout Person Photo (Shifted Left for Maximum Badge Space on Right) */}
          <div className="absolute left-[-50px] sm:left-[-30px] md:left-[-10px] bottom-0 z-10 w-[380px] sm:w-[430px] md:w-[460px] h-[540px] sm:h-[580px] md:h-[610px] flex items-end justify-start pointer-events-none">
            <img
              src={`${import.meta.env.BASE_URL}heroprofile.png`}
              alt="Saikumar Jagabathula"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)] hover:scale-[1.015] transition-transform duration-500 pointer-events-auto"
            />
          </div>

          {/* Floating Social Orbit Badge 1 - GitHub (Shifted Far Right on r = 520 arc line) */}
          <a
            href="https://github.com/Saikumar5555"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{ left: '74%', top: '7%', transform: 'translate(-50%, -50%)' }}
            className="absolute z-20 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-200/90 shadow-xl flex items-center justify-center font-bold text-gray-800 text-sm font-mono hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:scale-115 hover:shadow-purple-500/25 transition-all duration-300"
          >
            git
          </a>

          {/* Floating Social Orbit Badge 2 - LinkedIn (Shifted Far Right on r = 520 arc line) */}
          <a
            href="https://www.linkedin.com/in/sai-kumar005"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ left: '88%', top: '35%', transform: 'translate(-50%, -50%)' }}
            className="absolute z-20 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-200/90 shadow-xl flex items-center justify-center font-bold text-gray-800 text-sm font-mono hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:scale-115 hover:shadow-purple-500/25 transition-all duration-300"
          >
            in
          </a>

          {/* Floating Social Orbit Badge 3 - Email / Contact */}
          <a
            href="#contact"
            onClick={() => {
              window.location.href = "mailto:saikumar235711@gmail.com";
            }}
            title="Contact / Email Me"
            style={{ left: '86%', top: '68%', transform: 'translate(-50%, -50%)' }}
            className="absolute z-20 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-200/90 shadow-xl flex items-center justify-center font-bold text-gray-800 text-base font-mono hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:scale-115 hover:shadow-purple-500/25 transition-all duration-300"
          >
            @
          </a>

          {/* Floating Social Orbit Badge 4 - Projects (Shifted Far Right on r = 520 arc line) */}
          <a
            href="#projects"
            title="Projects"
            style={{ left: '72%', top: '93%', transform: 'translate(-50%, -50%)' }}
            className="absolute z-20 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-200/90 shadow-xl flex items-center justify-center font-bold text-gray-800 text-sm font-mono hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:scale-115 hover:shadow-purple-500/25 transition-all duration-300"
          >
            dev
          </a>

        </div>
      </div>
    </header>
  );
}
