import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com/Devanshu90', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/devanshu-aslaliya-1027b6324/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:devanshuaslaliya@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(56,189,248,0.08)] bg-[#080810]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span className="text-slate-500">{'<'}</span>
            DA
            <span className="text-slate-500">{'/>'}</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-all duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-sky-400 transition-colors"
          >
            <ArrowUp size={14} />
            Back to top
          </a>

          {/* Copyright */}
          <p className="text-xs text-slate-600 text-center pt-4 border-t border-slate-800/60 w-full max-w-md">
            Designed & built by Devanshu Aslaliya · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
