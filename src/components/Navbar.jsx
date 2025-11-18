import { useState } from 'react'
import { Menu, X, Shield, Lock } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 ring-1 ring-white/10 shadow-lg shadow-indigo-600/30">
            <Shield className="w-5 h-5 text-white drop-shadow" />
          </span>
          <span className="text-white font-semibold tracking-tight text-lg">
            Aegis Cyber
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#approach">Approach</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="hidden md:flex">
          <a href="#contact" className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 text-white text-sm font-medium shadow-lg shadow-purple-800/30">
            <Lock className="w-4 h-4" />
            Get a quote
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-6 space-y-4">
            <div className="flex flex-col gap-3">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#approach">Approach</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <a href="#contact" className="w-full inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 text-white text-sm font-medium shadow-lg shadow-purple-800/30">
              <Lock className="w-4 h-4" />
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
