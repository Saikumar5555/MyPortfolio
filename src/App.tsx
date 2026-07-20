import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Background grid overlay */}
      <div className="bg-grid"></div>
      
      {/* Premium ambient glows */}
      <div className="ambient-glow animate-drift-slow"></div>
      <div className="ambient-glow-right animate-drift-slower"></div>

      {/* Page layout wrapper */}
      <div className="relative min-h-screen z-10 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
