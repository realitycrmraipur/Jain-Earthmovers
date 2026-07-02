import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { nav, cta } from '../content'
import Logo from './Logo'
import Icon from './Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false) }, [loc.pathname])

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Logo variant="mark" tone="light" height={54} className="logo-darkarm" />
          <nav className="nav-links">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {n.label}
              </NavLink>
            ))}
            <Link to={cta.primary.to} className="btn btn-gold nav-cta">{cta.primary.label}</Link>
          </nav>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>
        ))}
        <Link to={cta.primary.to} className="btn btn-gold" style={{ marginTop: 16, justifyContent: 'center' }}>
          {cta.primary.label}
        </Link>
      </div>
    </>
  )
}
