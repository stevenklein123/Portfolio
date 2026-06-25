import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 bg-transparent overflow-hidden pt-20">
      
      {/* STATIC GRID BACKGROUND (Malinis, walang gumagalaw na malaking linya) */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,243,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,243,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* Decorative Brackets (May neon flicker/lightning lighting effect na) */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-cyan-500/10 font-extralight hidden md:block select-none z-10 text-5xl sm:text-6xl animate-bracket-flicker">[</div>
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-cyan-500/10 font-extralight hidden md:block select-none z-10 text-5xl sm:text-6xl animate-bracket-flicker">]</div>

      {/* Main Content */}
      <div className="flex flex-col items-center max-w-4xl w-full text-center my-auto relative z-10">

        {/* Top Label */}
        <p className="text-[#00F3FF] tracking-[0.35em] text-xs sm:text-sm mb-4 uppercase font-bold opacity-90">
          Welcome to my portfolio
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter text-white leading-none">
          Steven Fernandez
        </h1>

        {/* Subtitle */}
        <div className="border border-[#00F3FF]/40 bg-[#00F3FF]/5 text-[#00F3FF] font-medium tracking-wide px-5 py-2 rounded-full mb-8 text-sm sm:text-base shadow-[0_0_15px_rgba(0,243,255,0.15)]">
          Aspiring Full Stack Web Developer
        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base leading-relaxed mb-10 px-2">
          Building responsive, user-friendly web applications that merge clean
          architecture with intuitive design. Passionate about crafting digital
          experiences that solve real problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto px-6 sm:px-0">

          <a
            href="/Steven-Fernandez-Resume.pdf"
            download
            className="dlBtn flex items-center justify-center gap-2 bg-[#00F3FF] text-black px-7 py-3 rounded-xl font-semibold hover:brightness-110 transition duration-300 shadow-[0_0_25px_rgba(0,243,255,0.4)] text-sm sm:text-base"
          >
            <Download size={18} className="stroke-3" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="contactBtn flex items-center justify-center gap-2 border border-[#00F3FF]/50 bg-transparent px-7 py-3 rounded-xl text-[#00F3FF] font-semibold hover:bg-[#00F3FF]/10 transition duration-300 text-sm sm:text-base"
          >
            <Mail size={18} />
            Contact Me
          </a>

        </div>
      </div>

      {/* ── FOOTER LAYER WITH SCROLL INDICATOR ── */}
      <div className="flex flex-col items-center gap-4 mt-auto pb-0 w-full relative z-10">
        <div className="flex gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/stevenklein123"
            target="_blank"
            rel="noopener noreferrer"
            className="githubIcon p-2.5 rounded-full border border-gray-800 text-gray-500 hover:text-[#00F3FF] hover:border-[#00F3FF]/40 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1BQK4VFust/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebookIcon p-2.5 rounded-full border border-gray-800 text-gray-500 hover:text-[#00F3FF] hover:border-[#00F3FF]/40 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5C10.5 7 12 5.5 14.5 5.5c1 0 2 .1 2 .1v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H18l-.5 3h-3v7A10 10 0 0022 12z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:fernandezklein123@gmail.com"
            className="gmailIcon p-2.5 rounded-full border border-gray-800 text-gray-500 hover:text-[#00F3FF] hover:border-[#00F3FF]/40 transition-all"
          >
            <Mail size={18} />
          </a>

        </div>

        {/* 🔥 THE SCROLL INDICATOR (Ang pinakamalinis na pagkakagawa ng taas-baba) */}
        <div className="flex flex-col items-center mt-2 gap-1 animate-scroll-line">
          <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase select-none"></span>
          
          {/* Nilagyan ng 'bg-' sa unahan ng gradient-to-b at neon drop shadow */}
          <div className="h-14 w-px gradient-to-b from-[#00F3FF] via-[#00F3FF]/80 to-transparent shadow-[0_0_10px_rgba(0,243,255,0.7)]" />
        </div>
      </div>

    </section>
  );
}