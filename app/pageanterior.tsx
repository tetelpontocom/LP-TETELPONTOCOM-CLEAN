"use client"

const WHATSAPP_OPEN =
  "https://wa.me/5582999176900?text=Oi%2C%20vim%20da%20TetelPontocom.%20Quero%20te%20dizer%20meu%20ponto%20de%20partida%20e%20entender%20qual%20caminho%20faz%20sentido%20pra%20mim."

function HeroEntrada() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <section className="w-full bg-[#FFF6EF] reveal">
        <div className="mx-auto max-w-6xl py-14 md:py-24">
          {/* Card unico (sem "linha" entre imagem e texto) */}
          <div className="rounded-3xl overflow-hidden border border-black/5 shadow-md bg-[#FFF6EF]">
            <div className="grid md:grid-cols-2">
              {/* IMAGEM */}
              <div className="relative">
                {/* Altura controlada no mobile: evita "imagem gigante" e melhora a primeira dobra */}
                <div className="relative h-[48vh] min-h-[380px] w-full md:h-[760px]">
                  <img
                    src="/images/hero-tetel-entrada.jpg"
                    alt="TetelPontocom — orientacao pratica para decisoes no mundo digital"
                    className="w-full h-full object-cover object-[50%_16%] md:object-[50%_18%]"
                  />

                  {/* No mobile, suaviza a base para nao virar "mancha" quando o texto desce */}

                  {/* Overlay MUITO leve para "premium" sem escurecer (reduz sensacao de sombra) */}
                </div>
              </div>

              {/* TEXTO */}
              <div className="bg-[#FFF6EF] px-6 py-8 md:px-12 md:py-14 flex flex-col justify-center">
                <p className="tetel-sub mb-4 w-fit">Ecossistema TetelPontocom</p>

                <h1 className="tetel-title text-3xl md:text-5xl font-semibold leading-[1.08] tracking-tight mb-5">
                  Clareza para decisoes
                  <br />
                  no mundo digital.
                </h1>

                <p className="text-base md:text-lg text-black/70 leading-relaxed mb-6 max-w-[54ch]">
                  Um ecossistema de soluções em tecnologia, IA e estratégia — com orientação humana e direção prática.
                </p>

                <p className="text-sm text-black/60 mb-7">
                  <span className="font-semibold text-black/70">Por Denivaldo (Tetel)</span>
                </p>

                {/* CTAs alinhados e "limpos" (sem quebra estranha no mobile) */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <a
                    href="#solucoes"
                    className="btn-glass px-6 py-3 w-full sm:w-auto text-center"
                    data-tetel-event="tetel_link_click"
                    data-tetel-context="hero"
                    data-tetel-target="explorar_solucoes"
                  >
                    Explorar solucoes
                  </a>

                  <a
                    href={WHATSAPP_OPEN}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-black/10 bg-white/70 hover:bg-white/80 transition w-full sm:w-auto"
                    target="_blank"
                    rel="noreferrer"
                    data-tetel-event="tetel_whatsapp_click"
                    data-tetel-context="hero"
                    data-tetel-target="whatsapp"
                  >
                    {"Falar no WhatsApp (orientação) →"}
                  </a>
                </div>

                <p className="tetel-promise mt-5">
                  Atendimento humano e cuidadoso. Posso não responder na hora, mas respondo com atenção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center text-[#0A0A0A]">
      {/* HERO NOVA (sem cinematica) */}
      <HeroEntrada />

      <section className="w-full bg-[#FFF6EF] py-16 reveal">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Quem e TetelPontocom</h2>
          <p className="text-base md:text-lg text-[#666] leading-relaxed mb-8 text-center">
            A TetelPontocom organiza soluções digitais, produtos e projetos com base em critério, experiência e coerência de
            jornada. Nada chega até você sem passar por curadoria humana, visão estratégica e responsabilidade real.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://curriculumpremium.tetel.online"
              className="text-[#3B82F6] font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              data-tetel-event="tetel_link_click"
              data-tetel-context="quem_somos"
              data-tetel-target="trajetória"
            >
              Ver trajetória
            </a>
            <a
              href="https://curriculopremiumtrabalho.tetel.online"
              className="text-[#3B82F6] font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              data-tetel-event="tetel_link_click"
              data-tetel-context="quem_somos"
              data-tetel-target="curriculo"
            >
              Ver curriculo
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{"Agentes de IA & Automacao"}</h2>
          <p className="text-base md:text-lg text-neutral-600 mb-6">
            Estruturas inteligentes que automatizam processos, organizam decisões e ampliam capacidade estratégica. Nada genérico
            — tudo adaptado a sua realidade.
          </p>
          <a
            href={WHATSAPP_OPEN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2 text-sm hover:bg-neutral-100 transition"
            data-tetel-event="tetel_whatsapp_click"
            data-tetel-context="agentes_ia"
            data-tetel-target="whatsapp"
          >
            {"Falar diretamente comigo →"}
          </a>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Desenvolvimento de Websites</h2>
          <p className="text-base md:text-lg text-neutral-600 mb-6">
            Landing pages, sites institucionais e estruturas digitais construidas com foco em clareza, autoridade e conversão —
            integradas ao ecossistema TetelPontocom.
          </p>
          <a
            href={WHATSAPP_OPEN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2 text-sm hover:bg-neutral-100 transition"
            data-tetel-event="tetel_whatsapp_click"
            data-tetel-context="websites"
            data-tetel-target="whatsapp"
          >
            {"Conversar sobre um projeto →"}
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tráfego Pago e Orgânico</h2>
          <p className="text-sm uppercase tracking-wide text-neutral-500 mb-2">{"Estratégia integrada • Modelo hibrido"}</p>
          <p className="text-base md:text-lg text-neutral-600 mb-6">
            Combinação inteligente entre tráfego pago e orgânico para gerar visibilidade, validação e resultados consistentes —
            sem depender exclusivamente de anúncios ou alcance aleatório.
          </p>
          <p className="text-base text-neutral-600 mb-8">
            O foco não é volume, é eficiência: entender dados, testar rápido, reforçar o que funciona e sustentar crescimento com
            coerência de jornada.
          </p>
          <a
            href={WHATSAPP_OPEN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2 text-sm hover:bg-neutral-100 transition"
            data-tetel-event="tetel_whatsapp_click"
            data-tetel-context="trafego"
            data-tetel-target="whatsapp"
          >
            {"Falar sobre trafego →"}
          </a>
        </div>
      </section>

      <section id="solucoes" className="w-full py-16 reveal">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Soluções Principais</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 rounded-xl shadow-sm border bg-white">
              <h3 className="text-xl font-semibold mb-3">Faca Caixa Agora</h3>
              <p className="text-[#666] mb-4">Estratégia direta para faturar rapidamente com estrutura simples e validada.</p>
              <a
                href="https://facacaixaagora.tetel.online/?origem=tetelpontocom"
                className="text-[#3B82F6] font-medium inline-flex hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                data-tetel-event="tetel_solution_click"
                data-tetel-context="solucoes_principais"
                data-tetel-target="faca_caixa_agora"
              >
                {"Entrar →"}
              </a>
            </div>

            <div className="card p-6 rounded-xl shadow-sm border bg-white">
              <h3 className="text-xl font-semibold mb-3">Minha IA</h3>
              <p className="text-[#666] mb-4">Inteligência emocional, estratégica e profissional reunida em um só sistema.</p>
              <a
                href="https://minhaia.tetel.online/?origem=tetelpontocom"
                className="text-[#3B82F6] font-medium inline-flex hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                data-tetel-event="tetel_minhaia_click"
                data-tetel-context="page"
                data-tetel-placement="solucoes_principais"
                data-tetel-target="minha_ia_sales_page"
              >
                {"Conhecer Minha IA →"}
              </a>
            </div>

            <div className="card p-6 rounded-xl shadow-sm border bg-white">
              <h3 className="text-xl font-semibold mb-3">Starter Tetel</h3>
              <p className="text-[#666] mb-4">Estrutura completa + direcionamento estratégico para acelerar resultados.</p>
              <a
                href="https://facacaixaagoraupsell.tetel.online/?origem=tetelpontocom"
                className="text-[#3B82F6] font-medium inline-flex hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                data-tetel-event="tetel_solution_click"
                data-tetel-context="solucoes_principais"
                data-tetel-target="starter_tetel"
              >
                {"Entrar →"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 reveal">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Soluções do Ecossistema</h2>

          <div className="md:hidden w-full tetel-carousel-fade">
            <div className="tetel-carousel-track no-scrollbar grid grid-flow-col auto-cols-[85%] gap-5 overflow-x-auto pb-4 snap-x snap-mandatory px-4 -mx-4">
              <SolucaoCard
                image="/images/tetel-curadoria-ofertas.jpg"
                title="Curadoria de Ofertas Selecionadas"
                desc="Seleção criteriosa de produtos e oportunidades com foco em utilidade real, custo-benefício e confiança."
                href="https://tetelpontocomspee.tetel.online/?origem=tetelpontocom"
                event="tetel_solution_click"
                context="solucoes_ecossistema"
                target="curadoria_ofertas"
              />
              <SolucaoCard
                image="/images/tetel-minha-ia.jpg"
                title="Minha IA"
                desc="Eixo do ecossistema: inteligencia artificial + metodo, do acolhimento a execucao."
                href="https://minhaia.tetel.online/?origem=tetelpontocom"
                ctaLabel="Entender Minha IA →"
                event="tetel_minhaia_click"
                context="page"
                placement="solucoes_ecossistema"
                target="minha_ia_sales_page"
              />
              <SolucaoCard
                image="/images/tetel-plr-bolos.jpg"
                title="Bolos Caseiros Lucrativos"
                desc="Treinamento pratico e direto, com estrutura completa para comecar hoje."
                href="https://boloscaseiros.tetel.online/?origem=tetelpontocom"
                event="tetel_solution_click"
                context="solucoes_ecossistema"
                target="bolos_caseiros_treinamento"
              />
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-8">
            <SolucaoCard
              image="/images/tetel-curadoria-ofertas.jpg"
              title="Curadoria de Ofertas Selecionadas"
              desc="Seleção criteriosa de produtos e oportunidades com foco em utilidade real, custo-benefício e confiança."
              href="https://tetelpontocomspee.tetel.online/?origem=tetelpontocom"
              event="tetel_solution_click"
              context="solucoes_ecossistema"
              target="curadoria_ofertas"
            />
            <SolucaoCard
              image="/images/tetel-minha-ia.jpg"
              title="Minha IA"
              desc="Eixo do ecossistema: inteligencia artificial + método, do acolhimento a execução."
              href="https://minhaia.tetel.online/?origem=tetelpontocom"
              ctaLabel="Entender Minha IA →"
              event="tetel_minhaia_click"
              context="page"
              placement="solucoes_ecossistema"
              target="minha_ia_sales_page"
            />
            <SolucaoCard
              image="/images/tetel-plr-bolos.jpg"
              title="Bolos Caseiros Lucrativos"
              desc="Treinamento pratico e direto, com estrutura completa para comecar hoje."
              href="https://boloscaseiros.tetel.online/?origem=tetelpontocom"
              event="tetel_solution_click"
              context="solucoes_ecossistema"
              target="bolos_caseiros_treinamento"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-20 reveal">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Fale com TetelPontocom</h2>
          <p className="text-base md:text-lg text-[#666] mb-4">{"Projetos, duvidas e orientacoes — fale diretamente comigo."}</p>
          <p className="tetel-promise mb-8">Atendimento humano e cuidadoso. Posso nao responder na hora, mas respondo com atencao.</p>

          <a
            href={WHATSAPP_OPEN}
            className="text-[#3B82F6] font-semibold text-lg hover:underline inline-block"
            target="_blank"
            rel="noopener noreferrer"
            data-tetel-event="tetel_whatsapp_click"
            data-tetel-context="final"
            data-tetel-target="whatsapp"
          >
            {"Falar no WhatsApp (orientacao) →"}
          </a>
        </div>
      </section>
    </div>
  )
}

function SolucaoCard({
  image,
  title,
  desc,
  href,
  ctaLabel = "Entrar →",
  event,
  context,
  target,
  placement,
}: {
  image: string
  title: string
  desc: string
  href: string
  ctaLabel?: string
  event: string
  context: string
  target: string
  placement?: string
}) {
  return (
    <div className="bg-white/90 card p-5 rounded-2xl shadow-md border flex flex-col snap-start w-full">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-contain rounded-xl mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[#444] mb-3 leading-relaxed">{desc}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3B82F6] font-medium inline-flex mt-auto"
        data-tetel-event={event}
        data-tetel-context={context}
        data-tetel-target={target}
        data-tetel-placement={placement || ""}
      >
        {ctaLabel}
      </a>
    </div>
  )
}
