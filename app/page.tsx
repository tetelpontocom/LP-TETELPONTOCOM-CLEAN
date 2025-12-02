"use client"

import { useEffect, useState } from "react"

// ================================
// HERO FRAMES (CAMINHO CORRETO)
// ================================
const HERO_FRAMES = [
  {
    src: "/images/hero-tetelpontocom-1.jpg",
    alt: "Soluções digitais com propósito, clareza e confiança — TetelPontocom (Frame 1)",
  },
  {
    src: "/images/hero-tetelpontocom-2.jpg",
    alt: "Soluções digitais com propósito, clareza e confiança — TetelPontocom (Frame 2)",
  },
  {
    src: "/images/hero-tetelpontocom-3.jpg",
    alt: "Soluções digitais com propósito, clareza e confiança — TetelPontocom (Frame 3)",
  },
]

// ================================
// HERO CINEMÁTICA
// ================================
function HeroCinematica() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_FRAMES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-cinematica w-full bg-[#FFF6EF] reveal">
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        {/* BLOCO VISUAL */}
        <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-md aspect-[3/4] md:aspect-[10/12] glass-box">
          {HERO_FRAMES.map((frame, index) => (
            <img
              key={frame.src}
              src={frame.src || "/placeholder.svg"}
              alt={frame.alt}
              className={`absolute inset-0 w-full h-full object-cover object-[center_20%] transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* TEXTO + CTA */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="tetel-sub mb-3">Ecossistema Tetel • Curadoria Digital</p>

          <h1 className="text-3xl md:text-4xl font-semibold leading-snug tetel-title mb-4">
            Soluções digitais com propósito,
            <br /> clareza e confiança.
          </h1>

          <p className="text-base md:text-lg text-black/70 mb-6">
            O ponto de partida do Ecossistema Tetel: um lugar onde produtos, serviços e projetos passam por filtro
            humano antes de chegar até você.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="#solucoes" className="btn-glass inline-flex items-center px-6 py-3">
              Explorar soluções
            </a>

            <a
              href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20TetelPontocom."
              className="inline-flex items-center px-6 py-3 rounded-full border border-black/10 bg-white/80 text-black"
            >
              Falar com TetelPontocom →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// =========================================
// CARD COMPONENT (compartilhado)
// =========================================
function SolucaoCard({ image, title, desc, href }) {
  return (
    <div className="min-w-[260px] max-w-[260px] md:max-w-none md:min-w-0 bg-white/90 card p-5 rounded-2xl shadow-md border flex flex-col">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-contain rounded-xl mb-4" />

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-[#444] mb-3 leading-relaxed">{desc}</p>

      <a href={href} className="text-[#3B82F6] font-medium inline-flex mt-auto">
        Entrar →
      </a>
    </div>
  )
}

// =============================================================================
// PAGE PRINCIPAL
// =============================================================================
export default function Page() {
  return (
    <div className="w-full flex flex-col items-center text-[#0A0A0A]">
      {/* HERO */}
      <HeroCinematica />

      {/* SOLUÇÕES PRINCIPAIS */}
      <section id="solucoes" className="w-full max-w-5xl px-6 pb-16 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Soluções Principais</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Faça Caixa Agora</h3>
            <p className="text-[#444] mb-4">
              Estratégia direta para faturar rapidamente com estrutura simples e validada.
            </p>
            <a
              href="https://facacaixaagora.tetel.online/?ref=tetelpontocom"
              className="text-[#3B82F6] font-medium inline-flex"
            >
              Entrar →
            </a>
          </div>

          <div className="card p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Minha IA</h3>
            <p className="text-[#444] mb-4">
              Inteligência emocional, estratégica e profissional reunida em um só sistema.
            </p>
            <a
              href="https://minhaia.tetel.online/?ref=tetelpontocom"
              className="text-[#3B82F6] font-medium inline-flex"
            >
              Entrar →
            </a>
          </div>

          <div className="card p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Starter Tetel</h3>
            <p className="text-[#444] mb-4">
              Estrutura completa + direcionamento estratégico para acelerar resultados.
            </p>
            <a
              href="https://facacaixaagoraupsell.tetel.online/?ref=tetelpontocom"
              className="text-[#3B82F6] font-medium inline-flex"
            >
              Entrar →
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          CARROSSEL MOBILE + GRID DESKTOP
      ============================================================ */}

      <section className="w-full max-w-5xl px-6 pb-20 reveal">
        <h2 className="text-2xl font-semibold mb-8 text-center">Soluções do Ecossistema</h2>

        {/* MOBILE — CARROSSEL */}
        <div className="md:hidden w-full overflow-x-auto no-scrollbar flex gap-5 pb-4">
          <SolucaoCard
            image="/images/tetel-shopee.jpg"
            title="Curadoria Shopee"
            desc="Seleção dos melhores produtos com critérios de utilidade e custo-benefício."
            href="https://shopee.tetel.online/?ref=tetelpontocom"
          />

          <SolucaoCard
            image="/images/tetel-instagram-analyzer.jpg"
            title="Instagram Analyzer"
            desc="Diagnóstico profundo com leitura visual, métricas e plano de ação."
            href="https://instagramanalyzer.tetel.online/?ref=tetelpontocom"
          />

          <SolucaoCard
            image="/images/tetel-minha-ia.jpg"
            title="Minha IA"
            desc="Inteligência emocional, estratégica e profissional integrada."
            href="https://minhaia.tetel.online/?ref=tetelpontocom"
          />

          <SolucaoCard
            image="/images/tetel-plr-bolos.jpg"
            title="Bolos Caseiros Lucrativos"
            desc="Negócio simples e validado — estrutura completa para começar hoje."
            href="https://boloscaseiros.tetel.online/?ref=tetelpontocom"
          />
        </div>

        {/* DESKTOP — GRID PREMIUM */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          <SolucaoCard
            image="/images/tetel-shopee.jpg"
            title="Curadoria Shopee"
            desc="Seleção dos melhores produtos com critérios de utilidade e custo-benefício."
            href="https://shopee.tetel.online/?ref=tetelpontocom"
          />

          <SolucaoCard
            image="/images/tetel-instagram-analyzer.jpg"
            title="Instagram Analyzer"
            desc="Diagnóstico profundo com leitura visual, métricas e plano de ação."
            href="https://instagramanalyzer.tetel.online/?ref=tetelpontocom"
          />

          <SolucaoCard
            image="/images/tetel-minha-ia.jpg"
            title="Minha IA"
            desc="Inteligência emocional, estratégica e profissional integrada."
            href="https://minhaia.tetel.online/?ref=tetelpontocom"
          />

          <SolucaoCard
            image="/images/tetel-plr-bolos.jpg"
            title="Bolos Caseiros Lucrativos"
            desc="Negócio simples e validado — estrutura completa para começar hoje."
            href="https://boloscaseiros.tetel.online/?ref=tetelpontocom"
          />
        </div>
      </section>

      {/* CONTATO FINAL */}
      <section className="w-full max-w-5xl px-6 pb-24 text-center reveal">
        <h2 className="text-2xl font-semibold mb-4">Fale com TetelPontocom</h2>
        <p className="text-[#444] mb-6">Projetos, dúvidas e orientações — fale diretamente comigo.</p>

        <a
          href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20TetelPontocom."
          className="text-[#3B82F6] font-medium text-lg"
        >
          Falar com TetelPontocom →
        </a>
      </section>
    </div>
  )
}
