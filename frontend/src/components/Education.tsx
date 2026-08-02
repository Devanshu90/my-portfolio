import { useInView } from '@/hooks/useInView';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

type EduItem = {
  institution: string;
  degree: string;
  period: string;
  details: string[];
  grade?: string;
};

const education: EduItem[] = [
  {
    institution: 'IIIT Bhopal',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2024 – 2028',
    details: [
      'CGPA: 8.43 / 10',
      'Coursework: Data Structures, DBMS, Operating Systems, Computer Networks, OOP'
    ],
    grade: '8.43 CGPA',
  },
  {
    institution: 'Senior Secondary (Class XII)',
    degree: 'CBSE — Science Stream (PCM + PE)',
    period: '2024',
    details: [
      'Score: 93.4%',
      'Studied Physics, Chemistry, Mathematics, and Physical Education'
    ],
    grade: '93.4%',
  },
  {
    institution: 'Secondary (Class X)',
    degree: 'CBSE',
    period: '2022',
    details: [
      'Score: 94.6%',
      'Strong foundation across all subjects',
    ],
    grade: '94.6%',
  },
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-28 px-6 bg-[#0a0a12]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <div className={`mb-16 fade-up ${inView ? 'visible' : ''}`}>
          <p className="section-label mb-3">04. Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Academic journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/40 via-sky-500/20 to-transparent" />

          <div className="space-y-8">
            {education.map((e, i) => (
              <div
                key={i}
                className={`relative pl-20 fade-up ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="absolute left-4 top-5 w-5 h-5 rounded-full bg-[#0a0a12] border-2 border-sky-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                </div>

                {/* Card */}
                <div className="glow-border card-hover rounded-2xl p-6 bg-[#0f1020] border border-[rgba(56,189,248,0.08)]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={18} className="text-sky-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-100">{e.institution}</h3>
                        <p className="text-sm text-slate-400">{e.degree}</p>
                      </div>
                    </div>
                    {e.grade && (
                      <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        {e.grade}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
                    <Calendar size={13} />
                    {e.period}
                  </div>

                  <ul className="space-y-1.5">
                    {e.details.map((d, di) => (
                      <li key={di} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-sky-400 mt-0.5">▹</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
