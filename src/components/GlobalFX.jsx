import { useEffect, useRef } from 'react'

/* One delegated pointer listener drives three effects, all via CSS vars:
   - a soft glow that trails the cursor (the fixed .cursor-glow element)
   - a 3D tilt on cards as the pointer moves over them
   - a spotlight highlight (--px/--py) inside the hovered card
   Desktop / fine-pointer only, and off under reduced-motion. */
const SEL = '.card,.step,.value,.proj,.contact-card,.stat'
export default function GlobalFX() {
  const glow = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduce || !fine) return

    let cur = null, raf = 0, gx = 0, gy = 0
    const reset = (el) => { if (el) { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); el.style.removeProperty('--spot') } }
    const paint = () => {
      raf = 0
      if (glow.current) { glow.current.style.transform = `translate3d(${gx}px,${gy}px,0) translate(-50%,-50%)`; glow.current.style.opacity = '1' }
    }
    const move = (e) => {
      gx = e.clientX; gy = e.clientY
      if (!raf) raf = requestAnimationFrame(paint)
      const el = e.target.closest(SEL)
      if (el !== cur) { reset(cur); cur = el }
      if (!el) return
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      el.style.setProperty('--ry', ((px - 0.5) * 7).toFixed(2) + 'deg')
      el.style.setProperty('--rx', (-(py - 0.5) * 7).toFixed(2) + 'deg')
      el.style.setProperty('--mx', (px * 100).toFixed(1) + '%')
      el.style.setProperty('--my', (py * 100).toFixed(1) + '%')
      el.style.setProperty('--spot', '1')
    }
    const hide = () => { if (glow.current) glow.current.style.opacity = '0' }
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', hide)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <div className="cursor-glow" ref={glow} aria-hidden="true" />
}
