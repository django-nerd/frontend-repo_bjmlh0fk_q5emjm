import { motion } from 'framer-motion'
import { ShieldCheck, Target, GraduationCap, Users, Network, Bug } from 'lucide-react'

const services = [
  {
    icon: Bug,
    title: 'Penetration Testing',
    desc: 'Application, API, and infrastructure testing to expose exploitable weaknesses with reproducible paths and clear remediation.'
  },
  {
    icon: GraduationCap,
    title: 'Awareness Training',
    desc: 'Role‑based training and phishing simulations that measurably shift behavior and reduce risk across your organization.'
  },
  {
    icon: Target,
    title: 'Red Teaming',
    desc: 'Threat‑led adversary emulation to test people, process, and technology under realistic attack conditions.'
  },
  {
    icon: ShieldCheck,
    title: 'Security Consulting',
    desc: 'Security reviews, threat modeling, cloud posture hardening, and program strategy aligned to your business.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(168,85,247,0.08),transparent),radial-gradient(50%_50%_at_80%_40%,rgba(16,185,129,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          What we do
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur hover:border-fuchsia-400/30"
            >
              <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-500 to-cyan-500 ring-1 ring-white/10 shadow-lg" >
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
