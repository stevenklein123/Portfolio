import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative min-h-screen bg-[#030a10] text-white overflow-x-hidden z-10">

      {/* ── BACKGROUND FIXED GLOBAL LAYOUT (Ambient Glow Only) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Kaliwang Glow sa may Hero/About transition */}
        <div className="absolute top-[15%] left-50 w-125 h-125 bg-[#00F3FF]/8 blur-[120px] rounded-full" />

        {/* Kanang Glow na aabot hanggang About section */}
        <div className="absolute top-[45%] right-50 w-125 h-125 bg-[#00F3FF]/8 blur-[120px] rounded-full" />
      </div>

      {/* ── CONTENT LAYER ── */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <About />
        <Skills/>
      </div>

    </div>
  );
}

export default App;