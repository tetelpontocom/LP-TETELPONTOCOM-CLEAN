"use client"

import type React from "react"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    _fbq?: any
    /** Tracking TetelPontocom (sempre seguro; nunca deve quebrar a página) */
    tetelTrack?: (eventName: string, payload?: Record<string, any>) => void

    /** Guards para evitar double-init em previews/StrictMode */
    __tetel_pixel_inited__?: boolean
    __tetel_pageview_sent__?: boolean
  }
}

function useTetelOriginDetector() {
  const [isFromTetelEcosystem, setIsFromTetelEcosystem] = useState(false)

  useEffect(() => {
    const referrer = document.referrer || ""
    const tetelDomains = ["tetel.online", "tetelpontocom.com", "tetel.com.br", "fivecom.com.br"]
    const match = tetelDomains.some((d) => referrer.includes(d))
    setIsFromTetelEcosystem(match)
  }, [])

  return isFromTetelEcosystem
}

function installMetaPixel(pixelId: string) {
  // Evita init duplicado (ex.: React StrictMode no preview)
  if (window.__tetel_pixel_inited__) return
  window.__tetel_pixel_inited__ = true
  ;((f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) => {
    if (f.fbq) return
    n = (f.fbq = function () {
      // @ts-ignore
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    })
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = "2.0"
    n.queue = []
    t = b.createElement(e)
    t.async = true
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s?.parentNode?.insertBefore(t, s)
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")

  try {
    window.fbq?.("init", pixelId)
    window.fbq?.("track", "PageView")
  } catch {
    // nunca quebra
  }
}

function safeFbqTrackCustom(eventName: string, payload: Record<string, any> = {}) {
  try {
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, payload)
    }
  } catch {
    // nunca quebra
  }
}

export default function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const isFromTetelEcosystem = useTetelOriginDetector()

  // Reveal (com fallback para evitar "sumir tudo" no preview do V0)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.15 },
    )

    const elements = document.querySelectorAll(".reveal")
    elements.forEach((el) => observer.observe(el))

    const fallbackTimer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("visible"))
    }, 900)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  // Pixel + Tracking global (fonte única) + delegação por data-atributos
  useEffect(() => {
    installMetaPixel("1305167264321996")

    window.tetelTrack = (eventName: string, payload: Record<string, any> = {}) => {
      safeFbqTrackCustom(eventName, payload)
    }

    if (!window.__tetel_pageview_sent__) {
      window.__tetel_pageview_sent__ = true
      window.tetelTrack("tetel_pageview", {
        path: window.location?.pathname || "",
        ref: document.referrer || "",
      })
    }

    const onDocClick = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement | null
      const anchor = target?.closest?.("a[data-tetel-event]") as HTMLAnchorElement | null
      if (!anchor) return

      const eventName = anchor.getAttribute("data-tetel-event") || ""
      if (!eventName) return

      const payload: Record<string, any> = {
        href: anchor.getAttribute("href") || "",
        context: anchor.getAttribute("data-tetel-context") || "",
        target: anchor.getAttribute("data-tetel-target") || "",
        placement: anchor.getAttribute("data-tetel-placement") || "",
      }

      window.tetelTrack?.(eventName, payload)
    }

    document.addEventListener("click", onDocClick, true)
    return () => document.removeEventListener("click", onDocClick, true)
  }, [])

  return (
    <div className="root-container">
      {isFromTetelEcosystem && (
        <header className="w-full bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3">
            <img
              src="/images/logo1-tetelpontocom.png"
              alt="TetelPontocom"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium tracking-wide">TetelPontocom</span>
          </div>
        </header>
      )}

      {children}
    </div>
  )
}
