import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080810]/90 backdrop-blur-xl border-b border-[rgba(56,189,248,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
        >
          <span className="text-slate-500">{'<'}</span>
          DA
          <span className="text-slate-500">{'/>'}</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  active === l.href
                    ? 'text-sky-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:devanshuaslaliya@gmail.com"
          className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500/20 hover:border-sky-400/40 transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#080810]/95 backdrop-blur-xl border-t border-[rgba(56,189,248,0.08)] px-6 py-4 flex flex-col gap-4">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors ${
                active === l.href ? 'text-sky-400' : 'text-slate-400'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:devanshuaslaliya@gmail.com"
            className="text-sm font-medium text-sky-400 border-t border-slate-800 pt-4"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}