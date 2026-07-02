import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { hero, stats, services, process as proc, projects, finalCta, brand } from '../content'
import ParallaxStrip from '../components/ParallaxStrip'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { Btn, SectionHead, Stat, Marquee, Placeholder } from '../components/UI'

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))

export default function Home() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const copyRef = useRef(null)
  const marquee = services.map((s) => s.title)

  // Hero parallax on scroll — one rAF loop writing transforms straight to the DOM
  // (no React re-render per scroll, GPU-composited) so the autoplay video stays 60fps.
  useEffect(() => {
    const el = heroRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0, started = false
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const p = total > 0 ? clamp(-r.top / total, 0, 1) : 0
      // play the clip once, forward, the first time the user scrolls into the hero (then it freezes at the end)
      if (!started && p > 0.008 && videoRef.current) { started = true; videoRef.current.play().catch(() => {}) }
      if (videoRef.current) videoRef.current.style.transform = `translate3d(0,${(p * 5).toFixed(2)}%,0) scale(${(1.04 + p * 0.1).toFixed(3)})`
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(0,${(-p * 42).toFixed(1)}px,0)`
        copyRef.current.style.opacity = (1 - clamp((p - 0.08) / 0.4, 0, 1)).toFixed(3)
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" ref={heroRef}>
        <div className="hero-stage">
          <video ref={videoRef} className="hero-video" src="./hero.mp4?v=3" poster="./hero-poster.jpg?v=3"
            muted playsInline preload="auto" aria-hidden="true" />
          <div className="hero-ember" aria-hidden="true" />
          <div className="hero-veil" />
          <div className="hero-grid-bg" />
          <div className="container">
            <div className="hero-copy hero-copy-in" ref={copyRef}>
              <span className="eyebrow">{hero.kicker}</span>
              <h1 className="display">
                {hero.titleLines.map((l, i) => (
                  <span key={i} className="line-mask">
                    <span className={`line-in ${i === hero.titleLines.length - 1 ? 'gold' : ''}`}
                      style={{ animationDelay: `${(0.26 + i * 0.09).toFixed(2)}s` }}>{l}</span>
                  </span>
                ))}
              </h1>
              <p className="lead hero-sub">{hero.subtitle}</p>
              <div className="hero-actions">
                <Btn to={finalCta.primary.to} big>{finalCta.primary.label}</Btn>
                <Btn to={finalCta.secondary.to} variant="ghost" big icon={null}>{finalCta.secondary.label}</Btn>
              </div>
            </div>
          </div>
          <div className="hero-scrollhint"><span className="dot" />{hero.scrollHint}</div>
        </div>
      </section>

      <Marquee items={marquee} />

      {/* ===== STATS ===== */}
      <section className="section">
        <div className="container">
          <div className="stats-row">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}><Stat {...s} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="hazard-thin" />

      {/* ===== SERVICES TEASER ===== */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="What we do" title="Heavy work, handled end to end"
              text="Excavation, concrete and contracting — one fleet, one accountable team." />
          </Reveal>
          <div className="grid grid-3">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.id} delay={i * 110}>
                <article className="card">
                  <div className="card-icon"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul className="pts">{s.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Btn to="/services" variant="ghost">All services</Btn>
          </div>
        </div>
      </section>

      {/* ===== PARALLAX STATEMENT ===== */}
      <ParallaxStrip>
        <div className="container">
          <Reveal>
            <span className="eyebrow">{brand.tagline}</span>
            <h2 className="display h-xl" style={{ maxWidth: '16ch', margin: '0 auto' }}>
              If it needs to be <span style={{ color: 'var(--gold)' }}>moved</span>, we move it.
            </h2>
          </Reveal>
        </div>
      </ParallaxStrip>

      {/* ===== PROCESS ===== */}
      <section className="section">
        <div className="container">
          <Reveal><SectionHead eyebrow={proc.kicker} title={proc.heading} /></Reveal>
          <div className="grid grid-4">
            {proc.steps.map((st, i) => (
              <Reveal key={st.no} delay={i * 90}>
                <div className="step">
                  <div className="step-no">{st.no}</div>
                  <h4>{st.title}</h4>
                  <p>{st.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS TEASER ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <SectionHead eyebrow="Recent work" title="Projects built on our iron" />
          </Reveal>
          <div className="grid grid-3">
            {projects.items.slice(0, 3).map((pr, i) => (
              <Reveal key={pr.title} delay={i * 110}>
                <Link to="/projects" className="proj">
                  <Placeholder icon="excavator" label={pr.category} />
                  <div className="proj-info">
                    <span className="proj-cat">{pr.category}</span>
                    <h4>{pr.title}</h4>
                    <div className="proj-meta"><span>{pr.location}</span><span>·</span><span>{pr.metric}</span></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 36 }}><Btn to="/projects" variant="ghost">View all projects</Btn></div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{brand.tagline}</span>
            <h2 className="display h-lg">{finalCta.heading}</h2>
            <p className="lead" style={{ margin: '14px auto 0' }}>{finalCta.text}</p>
            <div className="cta-actions">
              <Btn to={finalCta.primary.to} big>{finalCta.primary.label}</Btn>
              <Btn to={finalCta.secondary.to} variant="ghost" big icon={null}>{finalCta.secondary.label}</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
