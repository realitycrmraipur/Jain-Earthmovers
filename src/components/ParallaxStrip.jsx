import { useRef, useEffect } from 'react'

/* Dark silhouette construction site as a parallax band. The clip plays ONCE
   (forward, no loop) the first time the band scrolls into view, then freezes on
   its last frame. It drifts subtly on scroll via one rAF loop writing the
   transform straight to the DOM (GPU-composited, no React re-render). */
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
      if (videoRef.current) videoRef.current.style.transform = `translate3d(0,${((p - 0.5) * 3).toFixed(2)}%,0) scale(1.06)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // play once, forward, when the band first scrolls into view; freezes at the end
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && videoRef.current) { videoRef.current.play().catch(() => {}); io.disconnect() }
    }, { rootMargin: '0px 0px -12% 0px' })
    io.observe(el)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); io.disconnect() }
  }, [])
  return (
    <section className="parallax" ref={ref}>
      <video ref={videoRef} className="parallax-video" src="./parallax.mp4?v=3" poster="./parallax-poster.jpg?v=3"
        muted playsInline preload="auto" aria-hidden="true" />
      <div className="parallax-veil" />
      <div className="parallax-copy">{children}</div>
    </section>
  )
}
