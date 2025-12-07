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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-[#FFF6EF]">
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  )
}
