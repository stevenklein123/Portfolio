import profile from '../assets/profile.png';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center bg-[#030a10] text-white px-6 sm:px-12 md:px-24 py-20 overflow-hidden">
      
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: IMAGE WITH GLOW & FLOATING ANIMATION */}
        <div className="md:col-span-5 flex justify-center items-center relative group">
          
          {/* Wrapper that handles the floating animation and cyan box-shadow */}
          {/* Inayos ang core gradient utility sa pamamagitan ng pagdagdag ng 'bg-' */}
          <div className="animate-float-img relative rounded-3xl overflow-visible p-1 shadow-[0_0_40px_rgba(0,243,255,0.15)] gradient-to-br from-[#00F3FF]/20 to-transparent">
            
            {/* Outer Cyan Glow Aura */}
            <div className="absolute inset-0 bg-[#00F3FF]/10 blur-xl rounded-3xl -z-10" />
            
            {/* The Main Profile Photo */}
            <img 
              src={profile} 
              alt="Steven Fernandez" 
              className="w-70 sm:w-[320px] md:w-90 h-85 sm:h-95 md:h-105 object-cover rounded-2xl border border-[#00F3FF]/20"
            />

            {/* "Available for hire" Badge with Breathing Light effect */}
            <div className="animate-pulse-glow absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#030a10]/90 border border-[#00F3FF]/50 text-[#00F3FF] text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm select-none">
              <span className="text-sm font-bold">✦</span>
              Available for hire
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT & DETAILS CARDS */}
        <div className="md:col-span-7 flex flex-col justify-center">
          
          {/* Main Subtitle Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">
            IT Student & Web Developer
          </h2>

          {/* Description Paragraphs */}
          <div className="text-gray-400 space-y-4 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
            <p>
              I'm an Information Technology student with a deep passion for web development. 
              I love crafting digital experiences that are not only visually engaging but also 
              functionally robust and accessible to everyone.
            </p>
            <p>
              My journey started with curiosity and has grown into a commitment to building 
              real-world solutions. From interactive frontend interfaces to backend logic and 
              database design, I enjoy the full spectrum of development.
            </p>
          </div>

          {/* Info Cards Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            
            {/* Card 1: Name */}
            <div className="bg-[#0b131a]/40 border border-gray-800/60 rounded-xl p-4 backdrop-blur-sm hover:border-[#00F3FF]/20 transition duration-300">
              <span className="text-[#00F3FF] text-xs font-bold tracking-wider uppercase block mb-1">Name</span>
              <span className="text-gray-200 font-medium text-sm sm:text-base">Steven Klein G. Fernandez</span>
            </div>

            {/* Card 2: Location */}
            <div className="bg-[#0b131a]/40 border border-gray-800/60 rounded-xl p-4 backdrop-blur-sm hover:border-[#00F3FF]/20 transition duration-300">
              <span className="text-[#00F3FF] text-xs font-bold tracking-wider uppercase block mb-1">Location</span>
              <span className="text-gray-200 font-medium text-sm sm:text-base">Quezon City, PH</span>
            </div>

            {/* Card 3: Degree */}
            <div className="bg-[#0b131a]/40 border border-gray-800/60 rounded-xl p-4 backdrop-blur-sm hover:border-[#00F3FF]/20 transition duration-300">
              <span className="text-[#00F3FF] text-xs font-bold tracking-wider uppercase block mb-1">Degree</span>
              <span className="text-gray-200 font-medium text-sm sm:text-base">B.S. Information Technology</span>
            </div>

            {/* Card 4: Status */}
            <div className="bg-[#0b131a]/40 border border-gray-800/60 rounded-xl p-4 backdrop-blur-sm hover:border-[#00F3FF]/20 transition duration-300">
              <span className="text-[#00F3FF] text-xs font-bold tracking-wider uppercase block mb-1">Status</span>
              <span className="text-gray-200 font-medium text-sm sm:text-base">Open to opportunities</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}