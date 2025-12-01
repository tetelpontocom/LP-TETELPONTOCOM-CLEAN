"use client"

import type React from "react"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    fbq: (...args: any[]) => void
    _fbq: (...args: any[]) => void
  }
}

function usePCJOrigin() {
  const [isFromTetelEcosystem, setIsFromTetelEcosystem] = useState(false)

  useEffect(() => {
    const referrer = document.referrer
    const tetelDomains = ["tetel.com.br", "fivecom.com.br", "tetelpontocom.com", "tetel.online"]
    const isTetelOrigin = tetelDomains.some((domain) => referrer.includes(domain))
    setIsFromTetelEcosystem(isTetelOrigin)
  }, [])

  return isFromTetelEcosystem
}

export default function RootLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isFromTetelEcosystem = usePCJOrigin()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.15 },
    )

    document
      .querySelectorAll(".reveal, .fade-section, .slide-section, section, .card")
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Load Meta Pixel
    !((f, b, e, v, n, t, s) => {
      if (f.fbq) return
      n = f.fbq = () => {
        // @ts-expect-error arguments from fbq
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = "2.0"
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode?.insertBefore(t, s)
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")

    window.fbq("init", "1305167264321996")
    window.fbq("track", "PageView")

    // Scroll tracking
    let sent25 = false,
      sent50 = false,
      sent90 = false

    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="root-container">
      {isFromTetelEcosystem && (
        <header className="w-full bg-zinc-900 text-white py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <img
              src="/images/logo1-tetelpontocom.png"
              alt="TetelPontocom"
              className="h-10 w-10 rounded-full tetel-logo"
            />
            <h1 className="text-lg font-semibold">TetelPontocom</h1>
          </div>
        </header>
      )}
      {children}
    </div>
  )
}
