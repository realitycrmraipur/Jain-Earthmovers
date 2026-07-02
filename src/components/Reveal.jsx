import { useInView } from '../lib/hooks'

/* Wrap anything to fade/slide it in on scroll.
   variant: 'up' | 'left' | 'right' ; delay in ms for staggering. */
export default function Reveal({ children, variant = 'up', delay = 0, className = '', as: Tag = 'div', style }) {
  const [ref, inView] = useInView()
  const base = variant === 'left' ? 'reveal-l' : variant === 'right' ? 'reveal-r' : 'reveal'
  return (
    <Tag ref={ref} className={`${base} ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  )
}
