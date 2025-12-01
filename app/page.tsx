"use client"

import { useEffect, useState } from "react"

// ================================
// HERO FRAMES (CAMINHO CORRETO)
// ================================
const HERO_FRAMES = [
  {
    src: "/images/hero-tetelpontocom-1.jpg",
    alt: "Soluções digitais para você — TetelPontocom (Frame 1)",
  },
  {
    src: "/images/hero-tetelpontocom-2.jpg",
    alt: "Soluções digitais para você — TetelPontocom (Frame 2)",
  },
  {
    src: "/images/hero-tetelpontocom-3.jpg",
    alt: "Soluções digitais para você — TetelPontocom (Frame 3)",
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
    <section className="hero-cinematica reveal w-full bg-[#FFF6EF]">
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        {/* BLOCO VISUAL */}
        <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md aspect-[4/5] md:aspect-[3/4]">
          {HERO_FRAMES.map((frame, index) => (
            <img
              key={frame.src}
              src={frame.src || "/placeholder.svg"}
              alt={frame.alt}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* TEXTO + CTA */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-black/60 mb-3">
            Ecossistema Tetel • Curadoria Digital
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
            Soluções digitais com propósito,
            <br /> clareza e confiança.
          </h1>

          <p className="text-base md:text-lg text-black/70 mb-6">
            O ponto de partida do Ecossistema Tetel: um lugar onde produtos, serviços e projetos passam por filtro
            humano antes de chegar até você.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="#solucoes" className="inline-flex items-center px-5 py-3 rounded-full bg-black text-white">
              Explorar soluções
            </a>

            <a
              href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20TetelPontocom%2C%20na%20se%C3%A7%C3%A3o%20principal."
              className="inline-flex items-center px-5 py-3 rounded-full border border-black/10 bg-white/80 text-black"
            >
              Falar com TetelPontocom →
            </a>
          </div>
        </div>
      </div>
    </section>
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
          {/* Faça Caixa Agora */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Faça Caixa Agora</h3>
            <p className="text-[#444] mb-4">
              Estratégia direta para faturar de forma imediata com estrutura simples e validada.
            </p>
            <a href="https://facacaixaagora.tetel.online/?ref=tetelpontocom" className="text-[#3B82F6] font-medium">
              Entrar →
            </a>
          </div>

          {/* Minha IA */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Minha IA</h3>
            <p className="text-[#444] mb-4">
              Inteligência emocional, estratégica e profissional integrada em um sistema único.
            </p>
            <a href="https://minhaia.tetel.online/?ref=tetelpontocom" className="text-[#3B82F6] font-medium">
              Entrar →
            </a>
          </div>

          {/* Starter Tetel */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Starter Tetel</h3>
            <p className="text-[#444] mb-4">
              Estrutura completa + direcionamento estratégico para acelerar resultados.
            </p>
            <a
              href="https://facacaixaagoraupsell.tetel.online/?ref=tetelpontocom"
              className="text-[#3B82F6] font-medium"
            >
              Entrar →
            </a>
          </div>
        </div>
      </section>

      {/* CURADORIA SHOPEE */}
      <section className="w-full max-w-5xl px-6 pb-16 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Curadoria Shopee</h2>

        <img
          src="/images/tetel-shopee.jpg"
          alt="Curadoria Shopee TetelPontocom"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] text-center max-w-3xl mx-auto mb-4">
          Seleção dos melhores produtos da Shopee com critério real: utilidade, durabilidade e custo-benefício.
        </p>

        <div className="text-center">
          <a href="https://shopee.tetel.online/?ref=tetelpontocom" className="text-[#3B82F6] font-medium">
            Entrar →
          </a>
        </div>
      </section>

      {/* INSTAGRAM ANALYZER */}
      <section className="w-full max-w-5xl px-6 pb-16 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Instagram Analyzer</h2>

        <img
          src="/images/tetel-instagram-analyzer.jpg"
          alt="Instagram Analyzer TetelPontocom"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] text-center max-w-3xl mx-auto mb-4">
          Diagnóstico profundo com leitura visual, métricas, auditoria e plano de ação para crescer com consistência.
        </p>

        <div className="text-center">
          <a href="https://instagramanalyzer.tetel.online/?ref=tetelpontocom" className="text-[#3B82F6] font-medium">
            Entrar →
          </a>
        </div>
      </section>

      {/* MINHA IA — DESTAQUE */}
      <section className="w-full max-w-5xl px-6 pb-16 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Minha IA</h2>

        <img
          src="/images/tetel-minha-ia.jpg"
          alt="Minha IA — Inteligência Pessoal"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] text-center max-w-3xl mx-auto mb-4">
          Inteligência emocional, estratégica e profissional reunida para organizar sua vida por dentro e por fora.
        </p>

        <div className="text-center">
          <a href="https://minhaia.tetel.online/?ref=tetelpontocom" className="text-[#3B82F6] font-medium">
            Entrar →
          </a>
        </div>
      </section>

      {/* NEGÓCIOS PRONTOS — BOLOS CASEIROS */}
      <section className="w-full max-w-5xl px-6 pb-16 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Negócios Prontos</h2>

        <img
          src="/images/tetel-plr-bolos.jpg"
          alt="Bolos Caseiros Lucrativos — Negócio Pronto"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <h3 className="text-xl font-semibold mb-3 text-center">Bolos Caseiros Lucrativos</h3>

        <p className="text-[#444] text-center max-w-3xl mx-auto mb-4">
          Negócio simples, acessível e validado. Estrutura pronta para começar imediatamente.
        </p>

        <div className="text-center">
          <a href="https://boloscaseiros.tetel.online/?ref=tetelpontocom" className="text-[#3B82F6] font-medium">
            Entrar →
          </a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="w-full max-w-5xl px-6 pb-24 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Serviços</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* AGENTES DE IA */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Agentes de IA</h3>
            <p className="text-[#444] mb-4">
              Criamos agentes inteligentes personalizados para vendas, suporte e operações.
            </p>
            <a
              href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20do%20site%20TetelPontocom%2C%20na%20se%C3%A7%C3%A3o%20Agentes%20de%20IA."
              className="text-[#3B82F6] font-medium"
            >
              Falar →
            </a>
          </div>

          {/* DESENVOLVIMENTO WEB */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Desenvolvimento Web &amp; Automações</h3>
            <p className="text-[#444] mb-4">
              Construção de páginas, sistemas e fluxos inteligentes com clareza e resultado.
            </p>
            <a
              href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20TetelPontocom%2C%20na%20se%C3%A7%C3%A3o%20Desenvolvimento%20Web."
              className="text-[#3B82F6] font-medium"
            >
              Falar →
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO FINAL */}
      <section className="w-full max-w-5xl px-6 pb-32 text-center reveal">
        <h2 className="text-2xl font-semibold mb-4">Fale com TetelPontocom</h2>
        <p className="text-[#444] mb-6">Projetos, dúvidas e orientações — fale diretamente comigo.</p>

        <a
          href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20TetelPontocom%20e%20gostaria%20de%20falar."
          className="text-[#3B82F6] font-medium text-lg"
        >
          Falar com TetelPontocom →
        </a>
      </section>
    </div>
  )
}
