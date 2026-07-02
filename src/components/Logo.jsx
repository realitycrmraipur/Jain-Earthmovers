import { Link } from 'react-router-dom'
import { brand } from '../content'

/* Reusable brand logo.
   variant: 'mark' (JE monogram, default) | 'full' (whole lockup)
   tone:    'dark' (for dark backgrounds, default) | 'light'
   height:  px height; link wraps it in a Home link unless link={false}. */
export default function Logo({ variant = 'mark', tone = 'dark', height = 52, link = true, className = '' }) {
  const src =
    variant === 'full'
      ? (tone === 'light' ? brand.logoLight : brand.logoDark)
      : (tone === 'light' ? brand.logoMarkLight : brand.logoMark)
  const img = (
    <img src={src} alt={`${brand.name} logo`} className={`logo-img ${className}`}
      style={{ height, width: 'auto' }} />
  )
  if (!link) return img
  return <Link to="/" className="logo-link" aria-label={`${brand.name} — home`}>{img}</Link>
}
