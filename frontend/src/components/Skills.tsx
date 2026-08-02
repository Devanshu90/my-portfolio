import { useInView } from '@/hooks/useInView';
import { IconType } from 'react-icons';

import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiC,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiTypescript,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

type Skill = {
  name: string;
  icon: IconType;
};

const skillGroups: {
  category: string;
  color: string;
  skills: Skill[];
}[] = [
  {
    category: 'Languages',
    color: '#38bdf8',
    skills: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'C', icon: SiC },
      { name: 'SQL', icon: SiMysql },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    color: '#818cf8',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Databases & Tools',
    color: '#34d399',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: VscVscode },
    ],
  },
];

const concepts = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'DBMS',
  'REST APIs',
  'JWT Authentication',
  'Operating Systems',
  'Computer Networks',
  'Competitive Programming',
  'Responsive UI Design',
  'MERN Stack',
];

function SkillCard({
  name,
  icon: Icon,
  color,
}: Skill & { color: string }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl bg-slate-900/70 border border-slate-800 px-4 py-3
      hover:border-slate-600 hover:-translate-y-1 transition-all duration-300"
    >
      <Icon
        size={22}
        style={{ color }}
        className="flex-shrink-0"
      />

      <span className="text-sm font-medium text-slate-300">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      className="py-28 px-6 bg-[#0a0a12]"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-5xl mx-auto">

        <div className={`mb-16 fade-up ${inView ? 'visible' : ''}`}>
          <p className="section-label mb-3">
            02. Skills
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Technical Toolkit
          </h2>
        </div>

        {/* Skill Cards */}

        <div className="grid md:grid-cols-3 gap-8 mb-14">

          {skillGroups.map(({ category, color, skills }, gi) => (

            <div
              key={gi}
              className={`glow-border card-hover rounded-2xl p-6 bg-[#0f1020] border border-[rgba(56,189,248,0.08)] fade-up ${
                inView ? 'visible' : ''
              }`}
              style={{
                transitionDelay: `${gi * 0.15}s`,
              }}
            >

              <div
                className="text-xs font-mono font-semibold tracking-widest uppercase mb-6 pb-3 border-b border-slate-800"
                style={{ color }}
              >
                {category}
              </div>

              <div className="grid gap-3">

                {skills.map((skill, si) => (
                  <SkillCard
                    key={si}
                    {...skill}
                    color={color}
                  />
                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Core Concepts */}

        <div className={`fade-up delay-500 ${inView ? 'visible' : ''}`}>

          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">
            Core Concepts
          </p>

          <div className="flex flex-wrap gap-3">

            {concepts.map((concept, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:border-sky-400/40 hover:text-sky-300 hover:bg-sky-500/10 transition-all duration-300 cursor-default"
              >
                {concept}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}