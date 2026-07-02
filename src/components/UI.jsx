import { Link } from 'react-router-dom'
import Icon from './Icon'
import { useInView, useCountUp } from '../lib/hooks'

export function Btn({ to, href, variant = 'gold', big, icon = 'arrowRight', children }) {
  const cls = `btn btn-${variant} ${big ? 'btn-lg' : ''}`
  const inner = <>{children}{icon && <Icon name={icon} />}</>
  if (href) return <a className={cls} href={href}>{inner}</a>
  return <Link className={cls} to={to}>{inner}</Link>
}

export function SectionHead({ eyebrow, title, text, center, children }) {
  return (
    <div className={`sec-head ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="display h-lg">{title}</h2>}
      {text && <p className="lead" style={{ marginTop: 16 }}>{text}</p>}
      {children}
    </div>
  )
}

/* Striped placeholder image box (swap with a real <img> by passing src). */
export function Placeholder({ label = 'Image', icon = 'excavator', src, minHeight, className = '', alt }) {
  if (src) return <img src={src} alt={alt || label} className={className} style={{ minHeight, objectFit: 'cover', width: '100%', height: '100%' }} />
  return (
    <div className={`ph ${className}`} style={{ minHeight }}>
      <span className="ph-label"><Icon name={icon} /> {label}</span>
    </div>
  )
}

export function Stat({ value, suffix = '', label }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const n = useCountUp(value, inView)
  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">{n}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export function Marquee({ items }) {
  const row = items.concat(items)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span className="marquee-item" key={i}>{t}<span className="sep">◆</span></span>
        ))}
      </div>
    </div>
  )
}
