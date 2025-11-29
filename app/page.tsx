"use client"

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center text-[#0A0A0A]">
      {/* ================= HERO ================= */}
      <section className="w-full max-w-5xl px-6 pt-10 pb-16 text-center">
        <img
          src="/images/hero-tetelpontocom.jpg"
          alt="TetelPontocom — Curadoria, Propósito e Confiança Digital"
          className="w-full rounded-xl shadow-md mb-8"
        />

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
          TetelPontocom
          <br />
          <span className="text-[#3B82F6]">Curadoria, Propósito e Confiança Digital</span>
        </h1>

        <p className="text-lg md:text-xl text-[#333] mb-6 max-w-3xl mx-auto">
          Seu ecossistema inteligente para construir, organizar e expandir sua presença digital com elegância, direção e
          propósito.
        </p>
      </section>

      {/* ================= SOLUÇÕES PRINCIPAIS ================= */}
      <section className="w-full max-w-5xl px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-6">Soluções Principais</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Faça Caixa Agora */}
          <div className="p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Faça Caixa Agora</h3>
            <p className="text-[#444] mb-4">
              Estratégia direta para gerar faturamento imediato com estrutura simples e validada.
            </p>
            <a href="/facacaixaagora" data-tp-enter="facacaixaagora" className="text-[#3B82F6] font-medium">
              Entrar →
            </a>
          </div>

          {/* Minha IA */}
          <div className="p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Minha IA</h3>
            <p className="text-[#444] mb-4">
              Sua inteligência emocional, profissional e estratégica reunida em um único sistema.
            </p>
            <a href="/minhaia" data-tp-enter="minhaia" className="text-[#3B82F6] font-medium">
              Entrar →
            </a>
          </div>

          {/* Starter Tetel */}
          <div className="p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Starter Tetel</h3>
            <p className="text-[#444] mb-4">
              Estrutura inicial para quem deseja entrar no ecossistema com clareza e direção.
            </p>
            <a href="/starter" data-tp-enter="starter" className="text-[#3B82F6] font-medium">
              Entrar →
            </a>
          </div>
        </div>
      </section>

      {/* ================= SHOPEE ================= */}
      <section className="w-full max-w-5xl px-6 pb-14">
        <h2 className="text-2xl font-semibold mb-6">Curadoria Shopee</h2>

        <img
          src="/images/tetel-shopee.jpg"
          alt="Shopee — Curadoria TetelPontocom"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] mb-4">
          Seleção inteligente dos melhores produtos da Shopee, escolhidos com critério, utilidade e custo-benefício
          real.
        </p>

        <a href="/shopee" data-tp-enter="shopee" className="text-[#3B82F6] font-medium">
          Entrar →
        </a>
      </section>

      {/* ================= INSTAGRAM ANALYZER ================= */}
      <section className="w-full max-w-5xl px-6 pb-14">
        <h2 className="text-2xl font-semibold mb-6">Instagram Analyzer</h2>

        <img
          src="/images/tetel-instagram-analyzer.jpg"
          alt="Instagram Analyzer TetelPontocom"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] mb-4">
          Diagnóstico profundo do seu Instagram com insights, métricas e plano de ação estratégico.
        </p>

        <a href="/instagramanalyzer" data-tp-enter="instagramanalyzer" className="text-[#3B82F6] font-medium">
          Entrar →
        </a>
      </section>

      {/* ================= MINHA IA ================= */}
      <section className="w-full max-w-5xl px-6 pb-14">
        <h2 className="text-2xl font-semibold mb-6">Minha IA</h2>

        <img
          src="/images/tetel-minha-ia.jpg"
          alt="Minha IA — Inteligência pessoal e estratégica"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <p className="text-[#444] mb-4">Inteligência emocional, estratégica e profissional reunida em um só lugar.</p>

        <a href="/minhaia" data-tp-enter="minhaia" className="text-[#3B82F6] font-medium">
          Entrar →
        </a>
      </section>

      {/* ================= NEGÓCIOS PRONTOS: BOLOS CASEIROS ================= */}
      <section className="w-full max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Negócios Prontos</h2>

        <img
          src="/images/tetel-plr-bolos.jpg"
          alt="Bolos Caseiros Lucrativos — Negócio Pronto"
          className="w-full rounded-xl shadow-md mb-5"
        />

        <h3 className="text-xl font-semibold mb-3">Bolos Caseiros Lucrativos</h3>

        <p className="text-[#444] mb-4">
          Material completo para começar agora um negócio simples, acessível e altamente procurado. Conteúdo pronto,
          estruturado e validado para uso imediato.
        </p>

        <a href="/boloscaseiros" data-tp-enter="boloscaseiros" className="text-[#3B82F6] font-medium">
          Entrar →
        </a>
      </section>

      {/* ================= SERVIÇOS ================= */}
      <section className="w-full max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Serviços</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Agentes IA */}
          <div className="p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Agentes de IA</h3>
            <p className="text-[#444] mb-4">
              Criação de agentes inteligentes personalizados para vendas, suporte e operações.
            </p>
            <a href="https://wa.me/5582999176900" data-tp-whatsapp="agentes" className="text-[#3B82F6] font-medium">
              Falar com TetelPontocom →
            </a>
          </div>

          {/* Desenvolvimento Web */}
          <div className="p-6 rounded-xl border border-[#e5e5e5] shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-3">Desenvolvimento Web & Automações</h3>
            <p className="text-[#444] mb-4">
              Construção de páginas, sistemas e fluxos inteligentes para negócios digitais.
            </p>
            <a
              href="https://wa.me/5582999176900"
              data-tp-whatsapp="desenvolvimento"
              className="text-[#3B82F6] font-medium"
            >
              Falar com TetelPontocom →
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTATO FINAL ================= */}
      <section className="w-full max-w-5xl px-6 pb-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">Fale com TetelPontocom</h2>
        <p className="text-[#444] mb-6">Dúvidas, projetos, estratégias ou orientações — estou à disposição.</p>

        <a
          href="https://wa.me/5582999176900"
          data-tp-whatsapp="final"
          className="inline-block text-[#3B82F6] font-medium text-lg"
        >
          Falar com TetelPontocom →
        </a>
      </section>
    </div>
  )
}
