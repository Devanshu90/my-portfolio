import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Github, Linkedin, Mail, Send, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'devanshuaslaliya@gmail.com', href: 'mailto:devanshuaslaliya@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 — 9904527454', href: '#' },
  { icon: MapPin, label: 'Location', value: 'Bhopal,Madhya Pradesh, India', href: 'https://www.google.com/maps/place/Signature+Residency+(Main+Entrance)/@23.1812801,77.421787,17z/data=!3m1!4b1!4m6!3m5!1s0x397c439fd5284f05:0x76a1c1b000d029ac!8m2!3d23.1812801!4d77.4243619!16s%2Fg%2F11gbg9x4dy?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Devanshu90' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/devanshu-aslaliya-1027b6324/' },
  { icon: Mail, label: 'Email', href: 'mailto:devanshuaslaliya@gmail.com' },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:devanshuaslaliya@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a12]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <div className={`mb-16 fade-up ${inView ? 'visible' : ''}`}>
          <p className="section-label mb-3">06. Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Let's build something
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg">
            I'm currently open to software development internship opportunities. Whether you have
            a role, a project idea, or just want to connect — my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left – info */}
          <div className={`md:col-span-2 space-y-4 fade-up delay-200 ${inView ? 'visible' : ''}`}>
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <a
                key={i}
                href={href}
                className="glow-border card-hover rounded-2xl p-5 bg-[#0f1020] border border-[rgba(56,189,248,0.08)] flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm text-slate-200 font-medium group-hover:text-sky-300 transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <div className={`md:col-span-3 fade-up delay-300 ${inView ? 'visible' : ''}`}>
            <form
              onSubmit={handleSubmit}
              className="glow-border rounded-2xl p-7 bg-[#0f1020] border border-[rgba(56,189,248,0.08)] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 block">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-sky-400/40 focus:bg-slate-900 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-sky-400/40 focus:bg-slate-900 transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-sky-400/40 focus:bg-slate-900 transition-all resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
              >
                {sent ? (
                  <>Opening your email client...</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
