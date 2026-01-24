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
    <div className="mx-auto max-w-7xl px-4">
      <section className="hero-cinematica w-full bg-[#FFF6EF] reveal">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="hero-card glass-box rounded-2xl overflow-hidden shadow-md mx-auto max-w-3xl">
            {/* IMAGEM */}
            <div className="w-full">
              <img
                src={HERO_FRAMES[activeIndex].src || "/placeholder.svg"}
                alt={HERO_FRAMES[activeIndex].alt}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* TEXTO + CTA */}
            <div className="p-6 md:p-8 text-center">
              <p className="tetel-sub mb-3 mx-auto w-fit text-center">Ecossistema Tetel • Curadoria Digital</p>

              <h1 className="text-2xl md:text-3xl font-semibold leading-snug tetel-title mb-4">
                Soluções digitais com propósito,
                <br />
                clareza e confiança.
              </h1>

              <p className="text-base text-black/70 mb-6">
                O ponto de partida do Ecossistema Tetel: um lugar onde produtos, serviços e projetos passam por filtro
                humano antes de chegar até você.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <a href="#solucoes" className="btn-glass px-6 py-3">
                  Explorar soluções
                </a>

                <a
                  href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20TetelPontocom."
                  className="inline-flex items-center px-6 py-3 rounded-full border border-black/10 bg-white/80"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com TetelPontocom →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      {/* QUEM É TETELPONTOCOM */}
      <section className="w-full bg-[#FFF6EF] py-16 reveal">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Quem é TetelPontocom</h2>
          <p className="text-base md:text-lg text-[#666] leading-relaxed mb-8 text-center">
            A TetelPontocom organiza soluções digitais, produtos e projetos com base em critério, experiência e
            coerência de jornada. Nada chega até você sem passar por curadoria humana, visão estratégica e
            responsabilidade real.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://curriculumpremium.tetel.online"
              className="text-[#3B82F6] font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver trajetória
            </a>
            <a
              href="https://curriculopremiumtrabalho.tetel.online"
              className="text-[#3B82F6] font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver currículo
            </a>
          </div>
        </div>
      </section>

      {/* AGENTES DE IA & AUTOMAÇÃO */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Agentes de IA & Automação</h2>
          <p className="text-base md:text-lg text-neutral-600 mb-6">
            Estruturas inteligentes que automatizam processos, organizam decisões e ampliam capacidade estratégica. Nada
            genérico — tudo adaptado à sua realidade.
          </p>
          <a
            href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Agentes%20de%20IA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2 text-sm hover:bg-neutral-100 transition"
          >
            Falar diretamente comigo →
          </a>
        </div>
      </section>

      {/* DESENVOLVIMENTO DE WEBSITES */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Desenvolvimento de Websites</h2>
          <p className="text-base md:text-lg text-neutral-600 mb-6">
            Landing pages, sites institucionais e estruturas digitais construídas com foco em clareza, autoridade e
            conversão — integradas ao ecossistema TetelPontocom.
          </p>
          <a
            href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Tenho%20um%20projeto%20de%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2 text-sm hover:bg-neutral-100 transition"
          >
            Conversar sobre um projeto →
          </a>
        </div>
      </section>

      {/* TRÁFEGO PAGO E ORGÂNICO */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tráfego Pago e Orgânico</h2>

          <p className="text-sm uppercase tracking-wide text-neutral-500 mb-2">Estratégia integrada • Modelo híbrido</p>

          <p className="text-base md:text-lg text-neutral-600 mb-6">
            Combinação inteligente entre tráfego pago e orgânico para gerar visibilidade, validação e resultados
            consistentes — sem depender exclusivamente de anúncios ou alcance aleatório.
          </p>

          <p className="text-base text-neutral-600 mb-8">
            O foco não é volume, é eficiência: entender dados, testar rápido, reforçar o que funciona e sustentar
            crescimento com coerência de jornada.
          </p>

          <a
            href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20TetelPontocom.%20Gostaria%20de%20falar%20sobre%20tr%C3%A1fego."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2 text-sm hover:bg-neutral-100 transition"
          >
            Falar sobre tráfego →
          </a>
        </div>
      </section>

      {/* SOLUÇÕES PRINCIPAIS */}
      <section id="solucoes" className="w-full py-16 reveal">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Soluções Principais</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 rounded-xl shadow-sm border bg-white">
              <h3 className="text-xl font-semibold mb-3">Faça Caixa Agora</h3>
              <p className="text-[#666] mb-4">
                Estratégia direta para faturar rapidamente com estrutura simples e validada.
              </p>
              <a
                href="https://facacaixaagora.tetel.online/?origem=tetelpontocom"
                className="text-[#3B82F6] font-medium inline-flex hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar →
              </a>
            </div>

            <div className="card p-6 rounded-xl shadow-sm border bg-white">
              <h3 className="text-xl font-semibold mb-3">Minha IA</h3>
              <p className="text-[#666] mb-4">
                Inteligência emocional, estratégica e profissional reunida em um só sistema.
              </p>
              <a
                href="https://minhaia.tetel.online/?origem=tetelpontocom"
                className="text-[#3B82F6] font-medium inline-flex hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar →
              </a>
            </div>

            <div className="card p-6 rounded-xl shadow-sm border bg-white">
              <h3 className="text-xl font-semibold mb-3">Starter Tetel</h3>
              <p className="text-[#666] mb-4">
                Estrutura completa + direcionamento estratégico para acelerar resultados.
              </p>
              <a
                href="https://facacaixaagoraupsell.tetel.online/?origem=tetelpontocom"
                className="text-[#3B82F6] font-medium inline-flex hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SOLUÇÕES DO ECOSSISTEMA
      ============================================================ */}
      <section className="w-full py-16 reveal">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Soluções do Ecossistema</h2>

          {/* MOBILE — CARROSSEL */}
          <div className="md:hidden w-full overflow-x-auto no-scrollbar flex gap-5 pb-4">
            <SolucaoCard
              image="/images/tetel-curadoria-ofertas.jpg"
              title="Curadoria de Ofertas Selecionadas"
              desc="Seleção criteriosa de produtos e oportunidades com foco em utilidade real, custo-benefício e confiança."
              href="https://tetelpontocomspee.tetel.online/?origem=tetelpontocom"
            />

            <SolucaoCard
              image="/images/tetel-minha-ia.jpg"
              title="Minha IA"
              desc="Inteligência emocional, estratégica e profissional integrada."
              href="https://minhaia.tetel.online/?origem=tetelpontocom"
            />

            <SolucaoCard
              image="/images/tetel-plr-bolos.jpg"
              title="Bolos Caseiros Lucrativos"
              desc="Negócio simples e validado — estrutura completa para começar hoje."
              href="https://boloscaseiros.tetel.online/?origem=tetelpontocom"
            />
          </div>

          {/* DESKTOP — GRID PREMIUM */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            <SolucaoCard
              image="/images/tetel-curadoria-ofertas.jpg"
              title="Curadoria de Ofertas Selecionadas"
              desc="Seleção criteriosa de produtos e oportunidades com foco em utilidade real, custo-benefício e confiança."
              href="https://tetelpontocomspee.tetel.online/?origem=tetelpontocom"
            />

            <SolucaoCard
              image="/images/tetel-minha-ia.jpg"
              title="Minha IA"
              desc="Inteligência emocional, estratégica e profissional integrada."
              href="https://minhaia.tetel.online/?origem=tetelpontocom"
            />

            <SolucaoCard
              image="/images/tetel-plr-bolos.jpg"
              title="Bolos Caseiros Lucrativos"
              desc="Negócio simples e validado — estrutura completa para começar hoje."
              href="https://boloscaseiros.tetel.online/?origem=tetelpontocom"
            />
          </div>
        </div>
      </section>

      {/* CONTATO FINAL */}
      <section className="w-full py-20 reveal">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Fale com TetelPontocom</h2>
          <p className="text-base md:text-lg text-[#666] mb-8">
            Projetos, dúvidas e orientações — fale diretamente comigo.
          </p>

          <a
            href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20TetelPontocom."
            className="text-[#3B82F6] font-semibold text-lg hover:underline inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com TetelPontocom →
          </a>
        </div>
      </section>
    </div>
  )
}

// =========================================
// CARD COMPONENT (compartilhado)
// =========================================
function SolucaoCard({
  image,
  title,
  desc,
  href,
}: {
  image: string
  title: string
  desc: string
  href: string
}) {
  return (
    <div className="min-w-[260px] max-w-[260px] md:max-w-none md:min-w-0 bg-white/90 card p-5 rounded-2xl shadow-md border flex flex-col">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-contain rounded-xl mb-4" />

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-[#444] mb-3 leading-relaxed">{desc}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3B82F6] font-medium inline-flex mt-auto"
      >
        Entrar →
      </a>
    </div>
  )
}
