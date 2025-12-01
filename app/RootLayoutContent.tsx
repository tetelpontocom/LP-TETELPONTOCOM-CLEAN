"use client"

import type React from "react"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    fbq: (...args: any[]) => void
    _fbq: any
  }
}

function useTetelOriginDetector() {
  const [isFromTetelEcosystem, setIsFromTetelEcosystem] = useState(false)

  useEffect(() => {
    const referrer = document.referrer

    const tetelDomains = ["tetel.online", "tetelpontocom.com", "tetel.com.br", "fivecom.com.br"]

    const match = tetelDomains.some((d) => referrer.includes(d))
    setIsFromTetelEcosystem(match)
  }, [])

  return isFromTetelEcosystem
}

export default function RootLayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  const isFromTetelEcosystem = useTetelOriginDetector()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.15 },
    )

    const elements = document.querySelectorAll(".reveal, .fade-section, .slide-section, section, .card")

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    ;((f, b, e, v, n, t, s) => {
      if (f.fbq) return
      n = f.fbq = () => {
        // @ts-ignore
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
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

    window.fbq("init", "1305167264321996")
    window.fbq("track", "PageView")

    let sent25 = false
    let sent50 = false
    let sent90 = false

    const onScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)

      if (!sent25 && scrollPercent > 0.25) {
        window.fbq("trackCustom", "tp_scroll_25")
        sent25 = true
      }
      if (!sent50 && scrollPercent > 0.5) {
        window.fbq("trackCustom", "tp_scroll_50")
        sent50 = true
      }
      if (!sent90 && scrollPercent > 0.9) {
        window.fbq("trackCustom", "tp_scroll_90")
        sent90 = true
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
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
