"use client"

import { useEffect, useState } from "react"

const HERO_FRAMES = [
  {
    src: "/images/hero-tetelpontocom-1.jpg",
    alt: "TetelPontocom — Confiança e propósito nas suas escolhas (Frame 1)",
  },
  {
    src: "/images/hero-tetelpontocom-2.jpg",
    alt: "TetelPontocom — Confiança e propósito nas suas escolhas (Frame 2)",
  },
  {
    src: "/images/hero-tetelpontocom-3.jpg",
    alt: "TetelPontocom — Confiança e propósito nas suas escolhas (Frame 3)",
  },
]

function HeroCinematica() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_FRAMES.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero section-hero reveal w-full bg-[#FFF6EF]">
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Bloco visual (frames cinematográficos) */}
        <div className="relative w-full md:w-1/2 aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
          {HERO_FRAMES.map((frame, index) => (
            <img
              key={frame.src}
              src={frame.src || "/placeholder.svg"}
              alt={frame.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Bloco de texto e CTAs */}
        <div className="w-full md:w-1/2 text-left md:text-left">
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-black/60 mb-3">
            Ecossistema Tetel • Curadoria Digital
          </p>

          <h1 className="hero-title text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Confiança e propósito
            <br />
            também cabem nas suas escolhas.
          </h1>

          <p className="text-base md:text-lg text-black/70 mb-6 max-w-xl">
            TetelPontocom é o ponto de partida do Ecossistema Tetel: um lugar onde produtos, serviços e projetos passam
            por filtro humano antes de chegar até você.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#solucoes"
              className="btn-tetel inline-flex items-center px-5 py-3 rounded-full bg-black text-white"
              aria-label="Explorar as soluções principais da TetelPontocom"
            >
              Explorar soluções
            </a>

            <a
              href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20TetelPontocom%2C%20na%20se%C3%A7%C3%A3o%20principal.%20Quero%20organizar%20minha%20presen%C3%A7a%20digital."
              data-tp-whatsapp="hero"
              className="inline-flex items-center px-5 py-3 rounded-full border border-black/10 text-black bg-white/80"
              aria-label="Falar com TetelPontocom sobre presença digital"
            >
              Falar com TetelPontocom →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center text-[#0A0A0A]">
      {/* =============== HERO CINEMÁTICA =============== */}
      <HeroCinematica />

      {/* =============== SOLUÇÕES PRINCIPAIS =============== */}
      <section id="solucoes" className="w-full max-w-5xl px-6 pb-12 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Soluções Principais</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Faça Caixa Agora */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Faça Caixa Agora</h3>
            <p className="text-[#444] mb-4">
              Estratégia direta para gerar faturamento imediato com estrutura simples e validada.
            </p>
            <a
              href="https://facacaixaagora.tetel.online/?ref=tetelpontocom"
              data-tp-enter="facacaixaagora"
              className="text-[#3B82F6] font-medium"
            >
              Entrar →
            </a>
          </div>

          {/* Minha IA */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Minha IA</h3>
            <p className="text-[#444] mb-4">
              Sua inteligência emocional, profissional e estratégica reunida em um único sistema.
            </p>
            <a
              href="https://minhaia.tetel.online/?ref=tetelpontocom"
              data-tp-enter="minhaia"
              className="text-[#3B82F6] font-medium"
            >
              Entrar →
            </a>
          </div>

          {/* Starter Tetel */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Starter Tetel</h3>
            <p className="text-[#444] mb-4">
              Pacote avançado para quem deseja acelerar resultados com estrutura pronta e apoio estratégico.
            </p>
            <a
              href="https://facacaixaagoraupsell.tetel.online/?ref=tetelpontocom"
              data-tp-enter="starter"
              className="text-[#3B82F6] font-medium"
            >
              Entrar →
            </a>
          </div>
        </div>
      </section>

      {/* =============== CURADORIA SHOPEE =============== */}
      <section className="w-full max-w-5xl px-6 pb-14 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Curadoria Shopee</h2>

        <img
          src="/images/tetel-shopee.jpg"
          alt="Produtos recomendados na Shopee — Curadoria TetelPontocom"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] mb-4 text-center max-w-3xl mx-auto">
          Seleção inteligente dos melhores produtos da Shopee, escolhidos com critério, utilidade e custo-benefício
          real.
        </p>

        <div className="text-center">
          <a
            href="https://shopee.tetel.online/?ref=tetelpontocom"
            data-tp-enter="shopee"
            className="text-[#3B82F6] font-medium"
          >
            Entrar →
          </a>
        </div>
      </section>

      {/* =============== INSTAGRAM ANALYZER =============== */}
      <section className="w-full max-w-5xl px-6 pb-14 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Instagram Analyzer</h2>

        <img
          src="/images/tetel-instagram-analyzer.jpg"
          alt="Instagram Analyzer TetelPontocom"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] mb-4 text-center max-w-3xl mx-auto">
          Diagnóstico profundo do seu Instagram com leitura visual, métricas e plano de ação estratégico para crescer
          com consistência.
        </p>

        <div className="text-center">
          <a
            href="https://instagramanalyzer.tetel.online/?ref=tetelpontocom"
            data-tp-enter="instagramanalyzer"
            className="text-[#3B82F6] font-medium"
          >
            Entrar →
          </a>
        </div>
      </section>

      {/* =============== MINHA IA (DESTAQUE EXTRA) =============== */}
      <section className="w-full max-w-5xl px-6 pb-14 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Minha IA</h2>

        <img
          src="/images/tetel-minha-ia.jpg"
          alt="Minha IA — Inteligência pessoal e estratégica"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] mb-4 text-center max-w-3xl mx-auto">
          Inteligência emocional, estratégica e profissional reunida em um só lugar, para organizar sua vida por dentro
          e por fora.
        </p>

        <div className="text-center">
          <a
            href="https://minhaia.tetel.online/?ref=tetelpontocom"
            data-tp-enter="minhaia"
            className="text-[#3B82F6] font-medium"
          >
            Entrar →
          </a>
        </div>
      </section>

      {/* =============== NEGÓCIOS PRONTOS: BOLOS CASEIROS =============== */}
      <section className="w-full max-w-5xl px-6 pb-16 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Negócios Prontos</h2>

        <img
          src="/images/tetel-plr-bolos.jpg"
          alt="Bolos Caseiros Lucrativos — Negócio Pronto"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <h3 className="text-xl font-semibold mb-3 text-center">Bolos Caseiros Lucrativos</h3>

        <p className="text-[#444] mb-4 text-center max-w-3xl mx-auto">
          Material completo para começar agora um negócio simples, acessível e altamente procurado. Conteúdo pronto,
          estruturado e validado para uso imediato.
        </p>

        <div className="text-center">
          <a
            href="https://boloscaseiros.tetel.online/?ref=tetelpontocom"
            data-tp-enter="boloscaseiros"
            className="text-[#3B82F6] font-medium"
          >
            Entrar →
          </a>
        </div>
      </section>

      {/* =============== SERVIÇOS =============== */}
      <section className="w-full max-w-5xl px-6 pb-16 reveal">
        <h2 className="text-2xl font-semibold mb-6 text-center">Serviços</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Agentes IA */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Agentes de IA</h3>
            <p className="text-[#444] mb-4">
              Criação de agentes inteligentes personalizados para vendas, suporte e operações, alinhados ao seu jeito de
              trabalhar.
            </p>
            <a
              href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20do%20site%20TetelPontocom%2C%20na%20se%C3%A7%C3%A3o%20Agentes%20de%20IA.%20Gostaria%20de%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20agentes%20inteligentes."
              data-tp-whatsapp="agentes"
              className="text-[#3B82F6] font-medium"
            >
              Falar com TetelPontocom →
            </a>
          </div>

          {/* Desenvolvimento Web */}
          <div className="card p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Desenvolvimento Web &amp; Automações</h3>
            <p className="text-[#444] mb-4">
              Construção de páginas, sistemas e fluxos inteligentes para negócios digitais, sempre com foco em clareza e
              resultado.
            </p>
            <a
              href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20do%20site%20TetelPontocom%2C%20na%20se%C3%A7%C3%A3o%20Desenvolvimento%20Web%20%26%20Automa%C3%A7%C3%B5es.%20Gostaria%20de%20falar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20uma%20p%C3%A1gina%20ou%20automa%C3%A7%C3%A3o%20para%20o%20meu%20projeto."
              data-tp-whatsapp="desenvolvimento"
              className="text-[#3B82F6] font-medium"
            >
              Falar com TetelPontocom →
            </a>
          </div>
        </div>
      </section>

      {/* =============== CONTATO FINAL =============== */}
      <section className="w-full max-w-5xl px-6 pb-24 text-center reveal section-contato">
        <h2 className="text-2xl font-semibold mb-4">Fale com TetelPontocom</h2>
        <p className="text-[#444] mb-6">Dúvidas, projetos, estratégias ou orientações — estou à disposição.</p>

        <a
          href="https://wa.me/5582999176900?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20TetelPontocom%20e%20gostaria%20de%20falar%20com%20voc%C3%AA."
          data-tp-whatsapp="final"
          className="inline-block text-[#3B82F6] font-medium text-lg"
        >
          Falar com TetelPontocom →
        </a>
      </section>
    </div>
  )
}
