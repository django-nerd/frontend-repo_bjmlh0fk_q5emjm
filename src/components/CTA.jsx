import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 sm:p-12 backdrop-blur-lg overflow-hidden"
        >
          <div className="absolute -inset-1 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(168,85,247,0.15),transparent),radial-gradient(50%_50%_at_80%_40%,rgba(16,185,129,0.12),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to see how secure you really are?
            </h3>
            <p className="mt-3 text-slate-300/90 max-w-2xl">
              Tell us about your environment. We’ll propose the right scope—no fluff, just outcomes you can measure.
            </p>
            <form className="mt-6 grid sm:grid-cols-2 gap-3">
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Name" />
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Work email" />
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Company" />
              <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40">
                <option className="bg-slate-900">Service of interest</option>
                <option className="bg-slate-900">Penetration Testing</option>
                <option className="bg-slate-900">Red Teaming</option>
                <option className="bg-slate-900">Awareness Training</option>
                <option className="bg-slate-900">Security Consulting</option>
              </select>
              <textarea className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" rows={4} placeholder="Tell us about your scope…" />
              <div className="sm:col-span-2 flex justify-between items-center gap-3">
                <p className="text-xs text-slate-400">We’ll reply within one business day.</p>
                <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-xl shadow-purple-900/40">
                  Request proposal
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
