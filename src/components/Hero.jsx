import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-10 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.18),transparent_40%),radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-24"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Offensive Security • Red Teaming • Threat-Led Testing
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Secure what matters with precision attacks and proof.
          </h1>
          <p className="mt-5 text-slate-300/90 text-lg max-w-xl">
            We simulate real adversaries to uncover your critical weaknesses before they do. Penetration testing, red teaming, and awareness training—engineered for impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-xl shadow-purple-900/40">
              Get a quote
            </a>
            <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90">
              Explore services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-slate-400/80 text-sm">
            <div>CREST-style methodology</div>
            <div className="w-px h-4 bg-white/10" />
            <div>Transparent, actionable reporting</div>
          </div>
        </motion.div>
        <div className="h-[60vh] lg:h-[80vh]" />
      </div>
    </section>
  )
}
