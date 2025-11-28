"use client"

/**
 * LPTTEL.com CLEAN – v1.0
 *
 * Protocolo V0 Free Safe Mode – TetelPontocom:
 * - Componente 100% client-side
 * - Sem SSR
 * - Nenhum uso de window/document (rastreamento fica no RootLayoutContent)
 * - Estrutura modular, leve e escalável
 *
 * Upgrade path (V0 Pro):
 * - Fácil plugar testes A/B de hero, blocos e CTAs
 * - Possível adicionar lazy-loading, variações por segmento, etc.
 */

import Image from "next/image"
import {
  MessageCircle,
  ArrowRight,
  Wrench,
  Sparkles,
  HandHeart,
  ShieldCheck,
  ShoppingBag,
  PieChart,
} from "lucide-react"

const WHATSAPP_NUMBER = "5582999176900"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá, encontrei a TetelPontocom e quero entender qual é o melhor próximo passo para o meu momento dentro do Ecossistema Tetel.",
)}`

export default function TetelPontocomClean() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-black/10 py-2.5">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2.5">
            <Image
              src="/images/logo1-tetelpontocom.png"
              alt="TetelPontocom"
              width={40}
              height={40}
              priority
              className="rounded-md shadow-sm ring-1 ring-black/10"
            />
            <span className="font-semibold tracking-tight text-base text-black">TetelPontocom</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#inicio" className="hover:opacity-80">
              Início
            </a>
            <a href="#solucoes" className="hover:opacity-80">
              Soluções
            </a>
            <a href="#destaques" className="hover:opacity-80">
              Destaques
            </a>
            <a href="#ecossistema" className="hover:opacity-80">
              Ecossistema
            </a>
            <a href="#instagram" className="hover:opacity-80">
              Analyzer
            </a>
            <a href="#agentes" className="hover:opacity-80">
              IA & Soluções
            </a>
            <a href="#sobre" className="hover:opacity-80">
              Sobre
            </a>
            <a href="#contato" className="hover:opacity-80">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Tecnologia com humanidade,
            <br />
            para transformar o seu próximo passo.
          </h1>

          <p className="mt-4 text-lg text-black/70 max-w-xl">
            A <strong>TetelPontocom</strong> é o ponto de entrada do Ecossistema Tetel — um ambiente onde curadoria,
            inteligência artificial e propósito caminham juntos, sempre com cuidado humano e direção clara para cada
            momento da sua jornada.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://facacaixaagora.tetel.online/?origem=tetelpontocom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Faça Caixa Agora
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://minhaia.tetel.online/?origem=tetelpontocom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full hover:opacity-80 transition"
            >
              Minha IA Premium
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="text-sm text-black/60 mt-3">
            Produtos verificados · Acesso imediato · Parte do Ecossistema Tetel
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg border border-black/10">
          <img
            src="/images/hero-tetelpontocom-v1.png"
            alt="TetelPontocom — Curadoria, propósito e confiança digital."
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* SOLUÇÕES PRINCIPAIS */}
      <section id="solucoes" className="mx-auto max-w-6xl px-4 py-16 bg-[#FAFAFA] rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Caminhos diretos para começar com leveza.</h2>
        <p className="mt-2 text-center text-black/70">
          Três soluções práticas, humanas e eficientes para entrar no Ecossistema Tetel. Escolha aquela que conversa com
          o seu momento.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: "Faça Caixa Agora",
              description: "Um caminho enxuto para organizar sua virada e gerar caixa real, com clareza e foco.",
              link: "https://facacaixaagora.tetel.online/?origem=tetelpontocom",
            },
            {
              title: "Minha IA Premium",
              description:
                "Acompanhamento inteligente e humano, para planejar, decidir e executar com mais estrutura no dia a dia.",
              link: "https://minhaia.tetel.online/?origem=tetelpontocom",
            },
            {
              title: "Pacote Starter Tetel",
              description:
                "O encontro entre clareza, organização e resultado. Faça Caixa + Minha IA trabalhando juntos por você.",
              link: "https://starter.tetel.online/?origem=tetelpontocom",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-black/60">{item.description}</p>
              </div>
              <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition cursor-pointer">
                Quero saber mais
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DESTAQUES / SHOPEE */}
      <section id="destaques" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Curadoria Tetel — escolhas que fazem sentido.</h2>
        <p className="text-black/70 max-w-2xl mb-8">
          Selecionamos produtos úteis, acessíveis e de real impacto no dia a dia. Tudo passa pela visão do Ecossistema
          Tetel: funcional, confiável e com propósito.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="https://shopee.com.br"
            // TODO: ajustar para a LP própria da Shopee quando estiver publicada (ex: shopee.tetel.online)
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-black/10 bg-[#FFF8F4] p-6 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-white/80 border border-black/10 grid place-items-center mb-3">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Shopee</h3>
              <p className="mt-2 text-sm text-black/60">
                Curadoria ativa de produtos úteis, com foco em utilidade real e custo-benefício — base para a LP própria
                da Shopee dentro do ecossistema.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-black/70 group-hover:underline">
              Ver seleção na Shopee
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>

      {/* ECOSSISTEMA TETEL – TRIO PRINCIPAL */}
      <section id="ecossistema" className="mx-auto max-w-6xl px-4 py-16 bg-[#FFF6EF] rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Trio Principal do Ecossistema Tetel.</h2>
        <p className="mt-2 text-black/70">
          Produtos que se conectam entre si, criando uma trajetória contínua — do primeiro passo ao acompanhamento
          inteligente.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              nome: "Faça Caixa Agora",
              preco: "R$ 9,90",
              href: "https://facacaixaagora.tetel.online/?origem=tetelpontocom",
            },
            {
              nome: "Minha IA Premium",
              preco: "R$ 27,00",
              href: "https://minhaia.tetel.online/?origem=tetelpontocom",
            },
            {
              nome: "Pacote Starter Tetel",
              preco: "R$ 39,90",
              href: "https://starter.tetel.online/?origem=tetelpontocom",
            },
          ].map((p) => (
            <a
              key={p.nome}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-black/10 bg-white p-6 flex flex-col hover:shadow-md transition"
            >
              <div className="flex-1">
                <h3 className="font-semibold">{p.nome}</h3>
                <p className="mt-1 text-sm text-black/60">Produto do ecossistema · {p.preco}</p>
              </div>
              <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition cursor-pointer">
                Ver detalhes
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* INSTAGRAM ANALYZER & AUTORIDADE DIGITAL */}
      <section id="instagram" className="mx-auto max-w-6xl px-4 py-16 border-b border-black/10">
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Clareza, diagnóstico e direção — para o seu Instagram.
            </h2>
            <p className="text-black/70">
              O Instagram Analyzer é o núcleo de diagnóstico estratégico do Ecossistema Tetel. Ele lê o seu perfil com
              profundidade, identifica pontos de melhoria e entrega um plano de ação direto, humano e aplicável.
            </p>
          </div>

          <a
            href="https://instagramanalyzer.tetel.online/?origem=tetelpontocom"
            // Ajuste aqui se o subdomínio final for diferente
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-2xl border border-black/10 bg-white p-6 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#E8F3FF] border border-black/5 grid place-items-center mb-3">
                <PieChart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Instagram Analyzer</h3>
              <p className="mt-2 text-sm text-black/60">
                Diagnóstico de autoridade, consistência, engajamento e posicionamento, com base em dados públicos,
                leitura estratégica e um plano de ação organizado.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-black/80">
              Quero analisar meu Instagram
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>

      {/* NEGÓCIOS PRONTOS – PLR BOLOS CASEIROS */}
      <section className="mx-auto max-w-6xl px-4 py-16 border-b border-black/10">
        <h2 className="text-2xl md:text-3xl font-semibold">Negócios prontos para começar ainda hoje.</h2>
        <p className="mt-2 text-black/70 max-w-2xl">
          Projetos práticos, revisados e alinhados ao propósito de construção real, para você adaptar à sua realidade e
          começar a vender com mais segurança.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <a
            href="https://boloscaseiros.tetel.online/?origem=tetelpontocom"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-black/10 bg-[#FFFBF6] p-6 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">PLR Bolos Caseiros Lucrativos</h3>
              <p className="mt-2 text-sm text-black/60">
                Uma estrutura pronta para você adaptar ao seu bairro ou cidade, com narrativa, oferta e base de vendas
                organizada.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-black/80">
              Ver detalhes do PLR
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </section>

      {/* AGENTES DE IA TETEL */}
      <section id="agentes" className="mx-auto max-w-6xl px-4 py-16 border-b border-black/10">
        <h2 className="text-2xl font-semibold mb-3 tracking-tight">Agentes de IA feitos para o seu momento.</h2>
        <p className="text-black/60 mb-10 max-w-2xl">
          Projetos de IA sob medida — SDR, vendas e suporte — sempre com linguagem humana e alinhamento ao propósito da
          sua marca, negócio ou rotina.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { nome: "IA SDR", desc: "Captação e qualificação de leads com cuidado e contexto humano." },
            { nome: "IA Vendas", desc: "Apoio ao processo comercial com leveza, clareza e foco em decisão." },
            { nome: "IA Suporte", desc: "Pós-venda próximo, humano e organizado, com continuidade real." },
          ].map((agente) => (
            <div
              key={agente.nome}
              className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{agente.nome}</h3>
              <p className="mt-1 text-sm text-black/60">{agente.desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90"
              >
                Conversar sobre este agente
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* DESENVOLVIMENTO WEB & AUTOMAÇÕES */}
      <section className="mx-auto max-w-6xl px-4 py-16 border-b border-black/10 bg-[#FFF9F4]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3">Construção digital com direção e propósito.</h2>
            <p className="text-black/60 mb-4">
              Landing pages, sites e automações criados com clareza, lógica de funil, estética TetelPontocom e
              integração total ao Pixel Universal. Nada técnico demais, nada pesado: apenas o necessário para você
              avançar com fluidez e precisão.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-5 py-3 text-sm shadow-sm hover:opacity-90 transition"
            >
              Solicitar proposta
              <Wrench className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl bg-white border border-black/10 p-8 text-center">
            <p className="text-black/60 italic">
              “Cada página e cada automação nascem com um objetivo claro: facilitar a sua vida e destravar o próximo
              passo.”
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE A TETELPONTOCOM */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Um trabalho que nasce de história, cuidado e propósito.
            </h2>
            <p className="mt-2 text-black/60">
              A TetelPontocom é mais do que uma página de links. É uma curadoria afetiva e digital, nascida da
              trajetória do Tetel e conectada ao Ecossistema Tetel — para oferecer clareza, caminhos reais e um
              acompanhamento humano em cada etapa.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-black/10 p-6">
            <ul className="space-y-3 text-sm text-black/60">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-4 w-4 mt-0.5" />
                <span>Transparência em cada recomendação e em cada oferta.</span>
              </li>
              <li className="flex items-start gap-3">
                <HandHeart className="h-4 w-4 mt-0.5" />
                <span>Cuidado humano, respeitando o momento e a realidade de cada pessoa.</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-4 w-4 mt-0.5" />
                <span>Fluidez e elegância para que a experiência digital seja leve e confiável.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-6xl px-4 py-16 bg-[#FFF9F4] text-center">
        <h2 className="text-2xl font-semibold mb-4">Quer entender qual é o seu próximo passo?</h2>
        <p className="text-black/60 mb-8 max-w-xl mx-auto">
          Fale diretamente comigo pelo WhatsApp. A partir do seu momento, eu te ajudo a encontrar o caminho certo dentro
          do Ecossistema Tetel.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-2xl text-base font-medium shadow-sm hover:opacity-90 transition"
        >
          <MessageCircle className="h-5 w-5" />
          Falar no WhatsApp
        </a>
      </section>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366]/90 hover:bg-[#25D366] text-white p-3 rounded-full shadow-lg transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* FOOTER */}
      <footer className="mt-24 py-10 text-center text-black/60 text-sm border-t border-black/10">
        A <strong>TetelPontocom</strong> é parte do Ecossistema Tetel — crescimento com propósito, resultado e
        humanidade.
        <br />© 2025 TetelPontocom. Todos os direitos reservados.
      </footer>
    </main>
  )
}
