import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-10 overflow-hidden">
      {/* 3D Spline background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Color overlays for neon vibe */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.28),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.22),transparent_45%),radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_55%)]" />

      {/* Floating glow orbs for motion even if Spline is blocked */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.6, y: [-8, 4, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-6 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Offensive Security • Red Teaming • Threat-Led Testing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white"
          >
            Secure what matters with precision attacks and proof.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 text-slate-300/90 text-lg max-w-xl"
          >
            We simulate real adversaries to uncover your critical weaknesses before they do. Penetration testing, red teaming, and awareness training—engineered for impact.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
            }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              href="#contact"
              className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-xl shadow-purple-900/40"
            >
              Get a quote
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              href="#services"
              className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90"
            >
              Explore services
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex items-center gap-6 text-slate-400/80 text-sm"
          >
            <div>CREST-style methodology</div>
            <div className="w-px h-4 bg-white/10" />
            <div>Transparent, actionable reporting</div>
          </motion.div>
        </motion.div>

        {/* Right column spacer to preserve hero height on large screens */}
        <div className="h-[60vh] lg:h-[80vh]" />
      </div>
    </section>
  )
}
