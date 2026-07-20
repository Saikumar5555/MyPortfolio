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
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Code rain background canvas animation
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
      // Clear the canvas to keep it fully transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `500 ${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = columnSymbols[i];
        const x = i * 62; // Column spacing
        const y = drops[i] * fontSize;

        // Draw the leading symbol (brightest cyan)
        ctx.fillStyle = 'rgba(6, 182, 212, 0.15)'; 
        ctx.fillText(text, x, y);

        // Draw trailing characters fading out
        for (let j = 1; j <= 4; j++) {
          const trailY = y - (j * fontSize * 1.6);
          if (trailY > 0) {
            ctx.fillStyle = `rgba(6, 182, 212, ${0.15 / (j + 1.2)})`;
            ctx.fillText(text, x, trailY);
          }
        }

        drops[i] += 0.12; // Slow, elegant speed

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
    <header id="home" className="min-h-[calc(100vh-72px)] flex items-center py-12 md:py-16 relative overflow-hidden">
      {/* Subtle Digital Code Rain */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      
      <div className="w-full max-w-[1180px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
        <div>
          

          {/* Name Header */}
          <h1 className="font-disp font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5 reveal-up delay-75">
            Saikumar<br />Jagabathula<span className="text-brand-green">.</span>
          </h1>

          {/* Role typing effect */}
          <div className="font-mono text-lg md:text-xl text-brand-muted mb-6 flex items-center min-h-[30px] reveal-up delay-100">
            <span>{typedRole}</span>
            <span className="inline-block w-[9px] h-[18px] bg-brand-green ml-1 animate-cursor-blink"></span>
          </div>

          {/* Summary */}
          <p className="text-brand-muted text-[15.5px] max-w-[520px] mb-8 leading-relaxed reveal-up delay-150">
            Frontend developer with 3+ years shipping production web applications, from consumer-facing platforms to internal operations tools. I own features end to end — React/TypeScript on the front end, FastAPI/Node on the back end, and the AWS infrastructure that connects them.
          </p>

          {/* Action buttons */}
          <div className="flex gap-4.5 flex-wrap mb-9 reveal-up delay-200">
            <a
              href="#contact"
              className="font-mono text-[13.5px] font-semibold bg-gradient-to-r from-brand-green to-brand-green-dim text-brand-bg px-7 py-3.5 rounded-lg shadow-lg shadow-brand-green/10 hover:shadow-brand-green/20 hover:-translate-y-[1px] transition-all duration-300"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="font-mono text-[13.5px] font-medium border border-brand-border text-brand-ivory px-7 py-3.5 rounded-lg hover:border-brand-green hover:text-brand-green hover:-translate-y-[1px] transition-all duration-300"
            >
              View projects
            </a>
          </div>

          {/* Quick Contact Links */}
          <div className="flex gap-x-5.5 gap-y-2 flex-wrap font-mono text-[12.5px] text-[#5c7368] reveal-up delay-300">
            <a href="mailto:saikumar235711@gmail.com" className="hover:text-brand-green transition-colors">saikumar235711@gmail.com</a>
            <a href="https://www.linkedin.com/in/sai-kumar005" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">LinkedIn</a>
            <a href="https://github.com/Saikumar5555" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">GitHub</a>
          </div>
        </div>

        {/* Profile Image Card */}
        <div className="relative group justify-self-center lg:justify-self-end w-full max-w-[400px] reveal-up delay-200">
          {/* Glowing backdrops */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-green/30 to-brand-green-dim/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Card outline border decoration */}
          <div className="absolute inset-0 bg-brand-green/5 rounded-2xl border border-brand-green/20 group-hover:border-brand-green/30 transition-colors duration-300 pointer-events-none"></div>

          {/* Image Container */}
          <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-brand-card shadow-2xl aspect-square flex items-center justify-center p-3">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-brand-bg-alt">
              <img
                src={`${import.meta.env.BASE_URL}myprofile.png`}
                alt="Saikumar Jagabathula"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
