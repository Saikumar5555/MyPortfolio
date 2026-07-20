import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'home', href: '#home' },
    { label: 'about', href: '#about' },
    { label: 'experience', href: '#experience' },
    { label: 'projects', href: '#projects' },
    { label: 'education', href: '#education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education'];
      const scrollPosition = window.scrollY + 120; // offset for sticky nav

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-brand-bg/75 border-b border-brand-border">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        <a href="#" className="font-mono font-semibold text-base text-brand-green tracking-wider hover:opacity-90 transition-opacity">
          SJ<span className="text-brand-muted-2">.dev</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9 font-mono text-[13px] text-brand-muted">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`hover:text-brand-green transition-colors relative py-1 ${
                activeSection === link.label ? 'text-brand-green' : ''
              }`}
            >
              {link.label}
              {activeSection === link.label && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-green rounded-full shadow-[0_0_8px_rgba(57,224,122,0.8)]" />
              )}
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="font-mono text-[13px] px-[18px] py-[9px] border border-brand-green-dim rounded-md text-brand-green transition-all duration-300 hover:bg-brand-green hover:text-brand-bg hover:shadow-lg hover:shadow-brand-green/10"
          >
            Contact →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-brand-muted hover:text-brand-green focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.829z"/>
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border bg-brand-bg-alt/95 backdrop-blur-lg">
          <div className="px-6 py-4 flex flex-col gap-4 font-mono text-[13px] text-brand-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 hover:text-brand-green transition-colors ${
                  activeSection === link.label ? 'text-brand-green pl-2 border-l-2 border-brand-green' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center font-mono text-[13px] px-[18px] py-[9px] border border-brand-green rounded-md text-brand-green transition-all duration-300 hover:bg-brand-green hover:text-brand-bg"
            >
              Contact →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
