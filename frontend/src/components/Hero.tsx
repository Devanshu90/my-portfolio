import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code2, Trophy } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'Competitive Programmer',
  'CSE @ IIIT Bhopal',
  'React & Node.js Developer',
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Devanshu90' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/devanshu-aslaliya-1027b6324/' },
  { icon: Mail, label: 'Email', href: 'mailto:devanshuaslaliya@gmail.com' },
];

const stats = [
  { icon: Code2, value: '700+', label: 'DSA Problems' },
  { icon: Trophy, value: '98.9%ile', label: 'JEE Main 2024' },
  { icon: Code2, value: '8.43', label: 'CGPA at IIIT' },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 grid-bg overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-sky-500/8 -top-32 -left-32" />
      <div className="orb w-[400px] h-[400px] bg-indigo-500/6 bottom-0 right-0" />
      <div className="orb w-[300px] h-[300px] bg-purple-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/8 border border-sky-500/15 text-sky-400 text-sm font-mono mb-8 fade-in visible">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to Internship Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-none tracking-tight">
          <span className="text-slate-100">Devanshu</span>
          <br />
          <span className="gradient-text">Aslaliya</span>
        </h1>

        {/* Typing role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="font-mono text-lg sm:text-xl text-slate-300 font-medium">
            {displayed}
            <span className="cursor-blink text-sky-400">|</span>
          </span>
        </div>

        {/* Brief bio */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          CSE undergrad at <span className="text-sky-400 font-medium">IIIT Bhopal</span> passionate
          about building full-stack web apps and crushing competitive programming challenges.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-sky-500/40 text-slate-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-sky-500/40 text-slate-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Open Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mb-16">
          {socialLinks.map(({ icon: Icon, label, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map(({ value, label }, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black gradient-text-blue mb-1">{value}</div>
              <div className="text-xs text-slate-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-sky-400 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <ChevronDown size={18} className="float-anim" />
      </a>
    </section>
  );
}
