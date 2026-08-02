import { useInView } from '@/hooks/useInView';
import { Trophy, Medal, Star, Target } from 'lucide-react';

type Achievement = {
  icon: typeof Trophy;
  title: string;
  detail: string;
  color: string;
};

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: 'JEE Main 2024 — 98.9 Percentile',
    detail:
      'Ranked among the top 1.1% of over 1.2 million candidates appearing in JEE Main 2024.',
    color: '#fbbf24',
  },
  {
    icon: Target,
    title: '700+ DSA Problems Solved',
    detail:
      'Solved over 700 algorithmic problems across LeetCode, Codeforces, and CodeChef, sharpening problem-solving and data-structure intuition.',
    color: '#38bdf8',
  },
  {
    icon: Medal,
    title: 'Competitive Programming Contests',
    detail:
      'Regular participant in Codeforces and CodeChef contests, consistently improving global and national rankings.',
    color: '#818cf8',
  },
  {
    icon: Star,
    title: 'Full-Stack Project Leadership',
    detail:
      'Led end-to-end development of production-grade MERN applications including Expense Tracker.',
    color: '#34d399',
  },
];

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section id="achievements" className="py-28 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <div className={`mb-16 fade-up ${inView ? 'visible' : ''}`}>
          <p className="section-label mb-3">05. Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Milestones & recognition
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`achievement-card p-6 fade-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${(i % 2) * 0.1 + 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                  style={{
                    background: `${a.color}12`,
                    borderColor: `${a.color}30`,
                  }}
                >
                  <a.icon size={20} style={{ color: a.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{a.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
