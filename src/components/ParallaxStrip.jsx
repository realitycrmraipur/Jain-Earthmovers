import { useRef, useEffect } from 'react'

/* Dark silhouette construction site as a parallax band: the clip autoplays
   (smooth) and drifts on scroll via one rAF loop writing transform straight to
   the DOM (GPU-composited, no React re-render per scroll). Headline pinned on top. */
export default function ParallaxStrip({ children }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)))   // 0..1 travelling through viewport
      if (videoRef.current) videoRef.current.style.transform = `translate3d(0,${((p - 0.5) * 7).toFixed(2)}%,0) scale(1.12)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // only decode the band video while it's on screen (battery + no double-decode with the hero)
    const io = new IntersectionObserver(([e]) => {
      const v = videoRef.current
      if (v) e.isIntersecting ? v.play().catch(() => {}) : v.pause()
    }, { rootMargin: '200px' })
    io.observe(el)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); io.disconnect() }
  }, [])
  return (
    <section className="parallax" ref={ref}>
      <video ref={videoRef} className="parallax-video" src="./parallax.mp4" poster="./parallax-poster.jpg"
        autoPlay muted loop playsInline aria-hidden="true" />
      <div className="parallax-veil" />
      <div className="parallax-copy">{children}</div>
    </section>
  )
}
