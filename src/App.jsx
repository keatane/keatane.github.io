import React from 'react';
import { Github, Linkedin, Shield, Trophy, Paperclip, ExternalLink, Gamepad2, Terminal, Briefcase, Languages } from 'lucide-react';
import ScrollToTop from './ScrollToTop';
import kevinAvatar from './assets/kevin.webp';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-cyan-500/30">

      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-32 pb-24 lg:px-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img src={kevinAvatar} alt="Picture of me" className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 object-cover" />
            </div>
            <div>
              <div className="flex gap-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-500 mb-4">
                <span>alias: keatane</span>
                <span className="text-slate-600">|</span>
                <span>status: monitoring</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tight leading-[0.9] mb-4">
                Kevin Cattaneo
              </h1>
              <p className="text-xl font-mono text-slate-500 italic">Cyber Security Consultant - SOC L2 Analyst</p>
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-slate-400 max-w-3xl font-serif italic leading-relaxed">
            Protecting enterprise perimeters through <span className="text-white">incident response</span> and high-fidelity monitoring, while building immersive worlds in <span className="text-white">game development</span>.
          </p>
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section className="px-6 py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-cyan-500 mb-12 flex items-center gap-2">
            <Briefcase size={16} /> EXPERIENCE
          </h2>
          <div className="space-y-12">

            <ExperienceItem
              company="Spike Reply"
              role="Cyber Security Consultant (SOC L2)"
              period="Oct 2025 - Present"
              description="Responding to security incidents as a SOC L2 analyst by monitoring alarms and security events in real-time. Managing corporate and ICS devices using SIEM tools like QRadar, Microsoft Defender, and Microsoft Sentinel. Collaborating with threat intelligence teams to tune rules and prevent potential threats."
              tags={['Incident Response', 'Threat Analysis', 'QRadar', 'Azure Sentinel', 'ICS Security']}
            />

            <ExperienceItem
              company="Laboro"
              role="Full-stack Developer & Co-Founder"
              period="Nov 2024 - Oct 2025"
              description="Developed a job-board platform from scratch using Python (FastAPI), NextJS, and AI models for resume building and job matching. Managed cloud infrastructure via Microsoft Azure and Kubernetes (K8s) for automated deployments. Conducted security audits on DNS and Python code for GDPR/ISO 27001 compliance."
              tags={['Python FastAPI', 'NextJS', 'Kubernetes', 'PostgreSQL', 'Cloud Security']}
            />

            <ExperienceItem
              company="University of Genoa"
              role="Research Scholarship Holder"
              period="Dec 2023 - Dec 2024"
              description="Recipient of a research grant focused on a comprehensive digital security analysis of the national IT-Alert service, evaluating vulnerabilities and system integrity."
              tags={['Research', 'Cyber Security Analysis', 'IT-Alert', 'ICT']}
            />
          </div>
        </div>
      </section>

      {/* 3. MILESTONES */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-cyan-500 mb-12 flex items-center gap-2">
            <Trophy size={16} /> ACADEMIC MILESTONES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl">
              <span className="text-xs font-mono text-cyan-600">Graduated July 2025</span>
              <h3 className="text-2xl font-serif text-white mt-2">Master Degree</h3>
              <p className="text-slate-400 mt-1 mb-4">University of Genoa</p>
              <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 font-bold">
                110/110 with laude
              </div>
            </div>
            <div className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl">
              <span className="text-xs font-mono text-slate-600">Graduated July 2023</span>
              <h3 className="text-2xl font-serif text-white mt-2">Bachelor Degree</h3>
              <p className="text-slate-400 mt-1 mb-4">University of Genoa</p>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-slate-400 font-bold">
                110/110 with laude
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS GRID */}
      <section className="px-6 py-24 bg-cyan-500/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-cyan-500 mb-12 uppercase tracking-widest">Skills, Security & Dev Stack</h2>
          <div className="grid md:grid-cols-4 gap-10">
            <SkillGroup icon={<Shield />} title="Security" skills={['Microsoft XDR', 'Microsoft Sentinel', 'QRadar', 'SOC Ops L2', 'Incident Response']} />
            <SkillGroup icon={<Terminal />} title="Development" skills={['React / NextJS', 'Python / C++', 'Docker', 'KQL']} />
            <SkillGroup icon={<Gamepad2 />} title="Creative" skills={['Blender 3D', 'Unity Engine', 'Godot Engine']} />
            <SkillGroup icon={<Languages />} title="Languages" skills={['Italian (Native)', 'English (B2)']} />
          </div>
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-cyan-500 mb-12 uppercase tracking-widest">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Fight Simulator"
              platform="Steam"
              desc="Godot programming and Blender 3D modelling and animation of a fight based videogame."
              link="https://store.steampowered.com/app/3330460/Cock_Fight_Simulator/"
            />
            <ProjectCard
              title="Lathar Game"
              platform="Play Store / Web"
              desc="Arcade videogame app (mobile and browser) developed on the plot of Lathar (book by Lorenzo Foschi)."
              link="https://play.google.com/store/apps/details?id=com.Uot_Company.LatharGame"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-sm font-mono text-cyan-500 mb-12 uppercase tracking-widest">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl">
              <span className="text-xs font-mono text-cyan-600">Feb 2026</span>
              <h3 className="text-2xl font-serif text-white mt-2">SC-200: Microsoft Security Operations Analyst</h3>
              <p className="text-slate-400 mt-1 mb-4">Microsoft</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-20 border-t border-white/5 text-center">
        <p className="font-serif text-xl text-slate-400 mb-8 italic">Reach out to me at:</p>
        <div className="flex justify-center gap-10 mb-12">
          <SocialIcon
            aria-label="Visit Kevin's GitHub Profile"
            icon={<Github />}
            link="https://github.com/keatane"
          />
          <SocialIcon
            aria-label="Connect with Kevin on LinkedIn"
            icon={<Linkedin />}
            link="https://it.linkedin.com/in/kevin-cattaneo-3b5a221bb"
          />
        </div>
        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest">© 2026 Kevin Cattaneo</p>
      </footer>
      <ScrollToTop />
    </div>
  );
};

// Sub-components
const ExperienceItem = ({ company, role, period, description, tags }) => (
  <div className="group grid md:grid-cols-[1fr_2.5fr] gap-4 md:gap-12 items-start py-10 border-b border-white/5 hover:bg-white/[0.01] transition-all px-4 rounded-lg">
    <div className="font-mono text-sm">
      <p className="text-cyan-500 font-bold mb-1 uppercase tracking-wider">{company}</p>
      <p className="text-slate-500">{period}</p>
    </div>
    <div>
      <h3 className="text-2xl font-serif text-white group-hover:text-cyan-400 transition-colors mb-3">
        {role}
      </h3>
      <p className="text-slate-400 leading-relaxed mb-6">
        {description}
      </p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-mono uppercase tracking-tighter bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const SkillGroup = ({ icon, title, skills }) => (
  <div>
    <h4 className="text-white font-bold mb-6 flex items-center gap-2">
      {React.cloneElement(icon, { size: 18, className: "text-cyan-500" })} {title}
    </h4>
    <ul className="space-y-3 text-slate-400 font-mono text-sm">
      {skills.map(s => <li key={s} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-900 rounded-full" />{s}</li>)}
    </ul>
  </div>
);

const ProjectCard = ({ title, platform, desc, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="group p-8 bg-black/40 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all hover:translate-y-[-4px]">
    <div className="flex justify-between items-start mb-4">
      <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">{platform}</span>
      <ExternalLink size={18} className="text-slate-600 group-hover:text-cyan-500 transition-colors" />
    </div>
    <h3 className="text-2xl font-serif text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </a>
);

const SocialIcon = ({ icon, link, ...props }) => (
  <a href={link} {...props} className="text-slate-500 hover:text-white hover:scale-110 transition-all">
    {React.cloneElement(icon, { size: 28 })}
  </a>
);

export default Portfolio;