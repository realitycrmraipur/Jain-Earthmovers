import { useEffect, useRef, useState } from 'react'

/* Adds an `in` class the first time an element scrolls into view. */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setInView(true); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } },
      { threshold: options.threshold ?? 0.18, rootMargin: options.rootMargin ?? '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView]
}

/* Count-up animation that runs once when `active` becomes true. */
export function useCountUp(target, active, dur = 1500) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(target); return }
    let raf = 0, start = 0
    const tick = (t) => {
      if (!start) start = t
      const k = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - k, 3)
      setN(Math.round(target * eased))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return n
}
