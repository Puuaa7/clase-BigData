"use client"

import { useState } from "react"
import AeroShards from "@/components/AeroShards"
import { ChartRadialLabel } from "@/components/chart-radial-label"

const modules = [
  { number: "01", title: "Explora la red", text: "Cada conexión abre un nuevo universo.", tag: "DISCOVERY", symbol: "⌁" },
  { number: "02", title: "Rompe los límites", text: "Construye lo que todavía no existe.", tag: "CREATION", symbol: "◇" },
  { number: "03", title: "Diseña el futuro", text: "El siguiente movimiento es tuyo.", tag: "EVOLUTION", symbol: "↗" },
]

export default function Page() {
  const [connected, setConnected] = useState(false)

  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-[#090512] text-violet-50 selection:bg-violet-500/40">
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <AeroShards className="size-full" onError={() => {}} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,5,18,0.92),rgba(9,5,18,0.4)_55%,rgba(9,5,18,0.1))]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(167,139,250,0.025)_4px)]" />
      <div className="mx-auto flex min-h-svh max-w-[1440px] flex-col px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between gap-6 border-b border-violet-300/15 py-7">
          <a href="#" aria-label="Nexus, inicio" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center border border-violet-400/60 bg-violet-500/10 text-xl text-violet-300 shadow-[0_0_25px_#8b5cf625]">✳</span>
            <span className="text-lg font-black tracking-[0.25em]">NEXUS<span className="text-violet-400">.</span></span>
          </a>
          <nav aria-label="Navegación principal" className="hidden gap-8 font-mono text-[11px] tracking-[0.16em] text-violet-200/60 md:flex">
            <a href="#universo" className="transition hover:text-violet-300">EL UNIVERSO</a>
            <a href="#modulos" className="transition hover:text-violet-300">MÓDULOS</a>
            <button onClick={() => setConnected(true)} className="transition hover:text-violet-300">TERMINAL ↗</button>
          </nav>
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-violet-300">
            <span className="size-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa] motion-safe:animate-pulse" /> SISTEMA ONLINE
          </span>
        </header>
        <section id="universo" className="relative grid flex-1 items-center gap-12 py-16 lg:min-h-[570px] lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 lg:py-20">
          <div className="min-w-0 max-w-3xl">
            <p className="mb-7 flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-violet-300">
              <span className="h-px w-8 bg-violet-400" /> MÁS ALLÁ DE LO REAL / V.01
            </p>
            <h1 className="text-[clamp(2.8rem,6vw,6rem)] leading-[0.95] font-black tracking-[-0.065em]">
              EL FUTURO<br />
              <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_#8b5cf640]">NO ESPERA.</span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-violet-100/60 sm:text-base">
              Cruza la frontera entre lo posible y lo imposible. Un nuevo universo digital, una nueva forma de crear.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <button onClick={() => setConnected(!connected)} aria-expanded={connected} aria-controls="terminal" className="group flex items-center gap-8 border border-violet-300/40 bg-violet-600 px-6 py-4 font-mono text-xs font-semibold tracking-widest shadow-[0_0_35px_#7c3aed40] transition hover:bg-violet-500 hover:shadow-[0_0_45px_#7c3aed70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">
                {connected ? "CERRAR TERMINAL" : "INICIAR CONEXIÓN"}
                <span className="text-lg transition group-hover:translate-x-1">↗</span>
              </button>
              <a href="#modulos" className="border-b border-violet-300/30 py-2 font-mono text-[11px] tracking-widest text-violet-200/70 transition hover:text-white">EXPLORAR EL SISTEMA ↓</a>
            </div>
            <div id="terminal" hidden={!connected} role="status" className="mt-7 max-w-md border border-violet-400/30 bg-[#10091d]/90 p-5 font-mono text-xs leading-7 text-violet-300 shadow-[0_0_35px_#8b5cf615] backdrop-blur-xl">
              <p className="mb-2 border-b border-violet-400/20 pb-2 text-violet-100">NEXUS // TERMINAL_01</p>
              <p>&gt; Conexión establecida.</p>
              <p>&gt; Acceso al universo Nexus concedido.</p>
              <p className="text-violet-100">&gt; Bienvenido al siguiente nivel. <span aria-hidden="true" className="motion-safe:animate-pulse">▌</span></p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <ChartRadialLabel />
          </div>
        </section>
        <section id="modulos" aria-label="Explora el universo Nexus" className="grid scroll-mt-6 gap-px border border-violet-300/20 bg-violet-300/20 md:grid-cols-3">
          {modules.map((module) => (
            <article key={module.number} className="group bg-[#10091d]/80 p-6 backdrop-blur-md transition hover:bg-[#211036]/90 sm:p-8">
              <div className="mb-6 flex items-center justify-between font-mono text-[10px] tracking-widest text-violet-300/60">
                <span>{module.number} / {module.tag}</span>
                <span aria-hidden="true" className="text-3xl text-violet-400 transition group-hover:text-fuchsia-300">{module.symbol}</span>
              </div>
              <h2 className="text-lg font-semibold tracking-tight">{module.title}</h2>
              <p className="mt-2 text-xs leading-6 text-violet-200/50">{module.text}</p>
            </article>
          ))}
        </section>
        <footer className="flex flex-wrap items-center justify-between gap-3 py-6 font-mono text-[9px] tracking-[0.18em] text-violet-200/40">
          <p>NEXUS © 2026 / EL MAÑANA EMPIEZA AQUÍ</p>
          <p className="flex items-center gap-3"><span className="h-px w-10 bg-violet-400/40" /> SIN LÍMITES. SIN FINAL.</p>
        </footer>
      </div>
    </main>
  )
}
