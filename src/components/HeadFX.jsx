import { useEffect, useRef } from 'react'
import { Crane, Excavator, DumpTruck, Bulldozer, Mixer } from './Machines'

const MAP = { crane: Crane, excavator: Excavator, dozer: Bulldozer, mixer: Mixer, truck: DumpTruck }

/* Parallax art for a page header: a faint blueprint grid + a big ghosted machine
   on the right (fills the otherwise-empty half) that drifts as you scroll. */
export default function HeadFX({ machine = 'excavator' }) {
  const ref = useRef(null)
  const Machine = MAP[machine] || Excavator
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const el = ref.current
        if (el) el.style.setProperty('--sy', (window.scrollY * 0.2).toFixed(1) + 'px')
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return (
    <div className="head-fx" ref={ref} aria-hidden="true">
      <div className="head-grid" />
      <Machine className="head-machine" />
    </div>
  )
}
