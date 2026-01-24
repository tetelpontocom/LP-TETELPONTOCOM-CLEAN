import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import RootLayoutContent from "./RootLayoutContent"

export const metadata: Metadata = {
  title: "TetelPontocom — Curadoria, Propósito e Confiança Digital",
  description:
    "A TetelPontocom conecta você a soluções digitais, serviços e curadorias filtradas com propósito, clareza e confiança.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "TetelPontocom — Curadoria Digital com Propósito",
    description: "O ponto de partida do Ecossistema Tetel. Soluções com utilidade real, propósito e confiança.",
    images: [
      {
        url: "/images/logo1-tetelpontocom.png",
        width: 800,
        height: 800,
        alt: "TetelPontocom",
      },
    ],
  },
  themeColor: "#FFF6EF",
  generator: "v0.app",
}

const WHATSAPP_OPEN = "https://wa.me/5582999176900?text=Oi%2C%20vim%20da%20TetelPontocom.%20Quero%20te%20dizer%20meu%20ponto%20de%20partida%20e%20entender%20qual%20caminho%20faz%20sentido%20pra%20mim."

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-[#FFF6EF]">
        <RootLayoutContent>{children}</RootLayoutContent>

        <footer className="tetel-footer">
          <div className="tetel-footer__inner">
            <div className="tetel-footer__brand">
              <img src="/images/logo1-tetelpontocom.png" alt="TetelPontocom" className="tetel-footer__logo" />
              <div>
                <p className="tetel-footer__title">TetelPontocom</p>
                <p className="tetel-footer__desc">
                  Porta de entrada do ecossistema: método, curadoria e inteligência artificial aplicados com responsabilidade.
                </p>
              </div>
            </div>

            <div className="tetel-footer__links">
              <a
                href="https://curriculumpremium.tetel.online"
                target="_blank"
                rel="noopener noreferrer"
                data-tetel-event="tetel_footer_click"
                data-tetel-context="footer"
                data-tetel-target="trajetoria"
              >
                Trajetória
              </a>
              <a
                href="https://curriculopremiumtrabalho.tetel.online"
                target="_blank"
                rel="noopener noreferrer"
                data-tetel-event="tetel_footer_click"
                data-tetel-context="footer"
                data-tetel-target="curriculo"
              >
                Currículo
              </a>
            </div>

            <div className="tetel-footer__cta">
              <p className="tetel-footer__promise">
                Atendimento humano e cuidadoso. Posso não responder na hora, mas respondo com atenção.
              </p>
              <a
                href={WHATSAPP_OPEN}
                target="_blank"
                rel="noopener noreferrer"
                className="tetel-footer__whats"
                data-tetel-event="tetel_whatsapp_click"
                data-tetel-context="footer"
                data-tetel-target="whatsapp"
              >
                Falar no WhatsApp (orientação) →
              </a>
            </div>
          </div>

          <div className="tetel-footer__bottom">
            <span>© 2026 TetelPontocom</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
