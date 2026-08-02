import { useInView } from '@/hooks/useInView';
import { MapPin, GraduationCap, Code, User } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'B.Tech CSE', sub: 'IIIT Bhopal · CGPA 8.43' },
  { icon: Code, label: 'Full-Stack Developer', sub: 'MERN · Next.js · TypeScript' },
  { icon: MapPin, label: 'Madhya Pradesh', sub: 'India' },
  { icon: User, label: 'Open to Internships', sub: 'SWE · Backend · Full-Stack' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-16 fade-up ${inView ? 'visible' : ''}`}>
          <p className="section-label mb-3">01. About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Who I am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left – text */}
          <div className={`space-y-5 fade-up delay-200 ${inView ? 'visible' : ''}`}>
            <p className="text-slate-300 text-base leading-relaxed">
              I'm a Third-year Computer Science and Engineering student at{' '}
              <span className="text-sky-400 font-semibold">IIIT Bhopal</span>, passionate about
              turning ideas into robust software. My journey spans competitive programming,
              full-stack web development, and a love for clean, efficient code.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I've built and deployed production-grade MERN applications, worked extensively with
              REST API design, JWT authentication, and responsive UI development using Tailwind CSS.
              Outside of projects, I actively compete on LeetCode, Codeforces, and CodeChef, having
              solved{' '}
              <span className="text-sky-400 font-semibold">700+ algorithmic problems</span>.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I'm currently seeking software development internship opportunities where I can apply
              my problem-solving skills and contribute to impactful products.
            </p>

            {/* Coding links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: 'LeetCode', href: 'https://leetcode.com/u/Devanshu9090/' },
                { label: 'Codeforces', href: 'https://codeforces.com/profile/devanshuaslaliya' },
                { label: 'CodeChef', href: 'https://www.codechef.com/users/devanshu_90' },
                { label: 'GitHub', href: 'https://github.com/Devanshu90' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devanshu-aslaliya-1027b6324/' },
              ].map((l, i) => (
                <a
                  key={i} 
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-400 hover:text-sky-400 hover:border-sky-400/30 transition-all duration-200"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right – highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, sub }, i) => (
              <div
                key={i}
                className={`glow-border card-hover rounded-2xl p-5 bg-[#0f1020] border border-[rgba(56,189,248,0.1)] fade-up ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${(i + 2) * 0.1 + 0.2}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-sky-400" />
                </div>
                <p className="text-slate-200 font-semibold text-sm mb-1">{label}</p>
                <p className="text-slate-500 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}