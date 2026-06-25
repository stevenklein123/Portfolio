import { SiHtmx, SiTypescript, SiTailwindcss, 
    SiMysql, SiPostgresql, SiMongodb, SiCanva, 
    SiPostman, SiVercel, SiNetlify, SiSupabase } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, 
    FaBootstrap, FaPhp, FaLaravel, FaJava, 
    FaServer, FaDatabase, FaDocker } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { FaNode, FaGitSquare, FaGithub } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { BiLogoVisualStudio } from "react-icons/bi";

// Sub-component para sa Skills Item na may Progress Bar para malinis ang code at hindi paulit-ulit
const SkillItem = ({ icon: Icon, name, percentage, level }) => {
  return (
    <div className="flex flex-col gap-1 p-2 bg-slate-900/50 rounded-lg border border-slate-700/30">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl text-[#00F3FF]"><Icon /></span>
          <span className="text-slate-200 font-medium text-sm">{name}</span>
        </div>
        <span className="text-xs text-[#00F3FF]/80 font-mono">{level} ({percentage}%)</span>
      </div>
      {/* Progress Bar Container */}
      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mt-1">
        <div 
          className="bg-[#00F3FF] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#00F3FF]" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-2xl font-sans text-[#00F3FF] mt-10 tracking-widest uppercase text-2xl">
          <h3>What I work with</h3>
      </div>

      <div className="flex flex-col justify-center items-center text-4xl md:text-5xl font-sans font-bold text-white mt-2 mb-8">
          <h1>Skills & Technologies</h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      
        {/* CARD 1: FRONTEND */}
        <div className= "skill-card bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-3">
                <div className="bg-slate-700 text-[#00F3FF] p-2.5 text-2xl rounded-lg">
                    <SiHtmx/>
                </div>
                <div className="font-semibold text-xl text-white">
                    <h3>Frontend</h3>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <SkillItem icon={FaHtml5} name="HTML5" percentage={90} level="Expert" />
                <SkillItem icon={FaCss3Alt} name="CSS3" percentage={85} level="Expert" />
                <SkillItem icon={IoLogoJavascript} name="JavaScript" percentage={75} level="Advanced" />
                <SkillItem icon={FaReact} name="React" percentage={70} level="Advanced" />
                <SkillItem icon={SiTypescript} name="TypeScript" percentage={35} level="Basic" />
                <SkillItem icon={SiTailwindcss} name="Tailwind CSS" percentage={80} level="Advanced" />
                <SkillItem icon={FaBootstrap} name="Bootstrap" percentage={75} level="Advanced" />
            </div>
        </div>

        {/* CARD 2: BACKEND */}
        <div className=" skill-card bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-3">
                <div className="bg-slate-700 text-[#00F3FF] p-2.5 text-2xl rounded-lg">
                    <FaServer/>
                </div>
                <div className="font-semibold text-xl text-white">
                    <h3>Backend</h3>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <SkillItem icon={FaNode} name="Node.js" percentage={50} level="Intermediate" />
                <SkillItem icon={FaPhp} name="PHP" percentage={75} level="Advanced" />
                <SkillItem icon={FaLaravel} name="Laravel" percentage={60} level="Intermediate" />
                <SkillItem icon={FaJava} name="Java" percentage={55} level="Intermediate" />
            </div>
        </div>

        {/* CARD 3: DATABASE */}
        <div className="skill-card bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-3">
                <div className="bg-slate-700 text-[#00F3FF] p-2.5 text-2xl rounded-lg">
                    <FaDatabase/>
                </div>
                <div className="font-semibold text-xl text-white">
                    <h3>Database</h3>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <SkillItem icon={SiMysql} name="MySQL" percentage={80} level="Advanced" />
                <SkillItem icon={SiPostgresql} name="PostgreSQL" percentage={45} level="Intermediate" />
                <SkillItem icon={SiMongodb} name="MongoDB" percentage={40} level="Basic" />
            </div>
        </div>

        {/* CARD 4: TOOLS & UTILITIES */}
        <div className="skill-card bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-3">
                <div className="bg-slate-700 text-[#00F3FF] p-2.5 text-2xl rounded-lg">
                    <FiTool/>
                </div>
                <div className="font-semibold text-xl text-white">
                    <h3>Tools & Utilities</h3>
                </div>
            </div>
            <div className="flex flex-col gap-3 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
                
                <SkillItem icon={BiLogoVisualStudio} name="VS Code" percentage={85} level="Expert" />
                <SkillItem icon={FaGitSquare} name="Git" percentage={75} level="Advanced" />
                <SkillItem icon={FaGithub} name="GitHub" percentage={80} level="Advanced" />
                <SkillItem icon={SiPostman} name="Postman" percentage={65} level="Intermediate" />
                <SkillItem icon={SiSupabase} name="Supabase" percentage={50} level="Intermediate" />
                <SkillItem icon={IoLogoFigma} name="Figma" percentage={60} level="Intermediate" />
                <SkillItem icon={SiCanva} name="Canva" percentage={85} level="Expert" />
                <SkillItem icon={FaDocker} name="Docker" percentage={25} level="Basic" />
                <SkillItem icon={SiVercel} name="Vercel" percentage={70} level="Advanced" />
                <SkillItem icon={SiNetlify} name="Netlify" percentage={65} level="Intermediate" />
            </div>
        </div>

      </div>
    </>
  )
}

export default Skills;