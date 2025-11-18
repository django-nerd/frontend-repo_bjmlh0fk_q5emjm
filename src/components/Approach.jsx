import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Recon & Intelligence',
    points: ['Open-source intel', 'Surface mapping', 'Threat modeling']
  },
  {
    title: 'Attack & Exploitation',
    points: ['Privilege escalation', 'Credential access', 'Persistence']
  },
  {
    title: 'Report & Remediate',
    points: ['Executive summary', 'Prioritized fixes', 'Validation & retest']
  }
]

export default function Approach() {
  return (
    <section id="approach" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_0%,rgba(59,130,246,0.08),transparent),radial-gradient(50%_50%_at_10%_80%,rgba(16,185,129,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How we attack like adversaries</h2>
          <p className="mt-4 text-slate-300/90 max-w-xl">
            Our methodology mirrors modern threat actors to give you evidence, not guesses. Every finding includes business impact and clear guidance.
          </p>
          <div className="mt-6 space-y-4">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
                <h3 className="text-white font-semibold">{s.title}</h3>
                <ul className="mt-3 grid sm:grid-cols-3 gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-slate-300/90 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 overflow-hidden">
            <div className="absolute -inset-1 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-500/20 via-blue-400/20 to-emerald-400/20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200/90">
                  <div className="text-xs">Signal {i + 1}</div>
                  <div className="mt-1 text-lg font-semibold text-white">{Math.round(Math.random()*90)+10}%</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
