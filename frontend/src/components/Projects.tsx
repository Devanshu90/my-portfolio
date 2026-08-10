import { useInView } from '@/hooks/useInView';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

type Project = {
  name: string;
  description: string;
  tags: string[];
  highlights: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: 'Expense Tracker',
    description:
      'A full-stack expense tracking web application that helps users manage income and expenses, monitor their financial activity, and visualize spending patterns through an interactive dashboard.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    highlights: [
      'Secure user authentication with login & signup',
      'Track income and expenses with categorized transactions',
      'Interactive dashboard with financial summaries and analytics',
    ],
    link: 'https://expense-tracker-frontend-n8k8.onrender.com',
    repo: 'https://github.com/Devanshu90/Expense-Tracker-MERN-Stack-Project',
  },
  {
    name: 'Portfolio Website',
    description:
      'A modern, dark-themed personal portfolio built with React, TypeScript, and Tailwind CSS featuring subtle animations and a fully responsive layout.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    highlights: [
      'Scroll-triggered reveal animations',
      'Typing effect & micro-interactions',
      'Mobile-first responsive design',
    ],
    link: 'https://my-portfolio-theta-lilac-91.vercel.app/',
    repo: 'https://github.com/Devanshu90/my-portfolio',
  },
  {
    name: 'Local AI Agent',
    description:
      'A locally running AI agent that understands user requests, performs tasks, and maintains persistent memory using a local SQLite database.',
    tags: ['Python', 'LLM', 'Agentic AI', 'SQLite', 'Local AI'],
    highlights: [
      'Persistent agent memory using SQLite',
      'Task-oriented reasoning and action execution',
      'Local AI inference using CPU or GPU',
    ],
    repo: 'https://github.com/Devanshu90/local-ai-task-agent',
  },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-28 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <div className={`mb-16 fade-up ${inView ? 'visible' : ''}`}>
          <p className="section-label mb-3">03. Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Things I have built!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`glow-border card-hover rounded-2xl p-7 bg-[#0f1020] border border-[rgba(56,189,248,0.08)] fade-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${(i % 2) * 0.1 + 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <FolderGit2 size={20} className="text-sky-400" />
                </div>
                <div className="flex gap-3">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub repository"
                      className="text-slate-500 hover:text-sky-400 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="text-slate-500 hover:text-sky-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
                {p.name}
                {p.featured && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    FEATURED
                  </span>
                )}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.description}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {p.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="text-sky-400 mt-0.5">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800">
                {p.tags.map((t, ti) => (
                  <span
                    key={ti}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/40 text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
