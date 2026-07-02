import { about, stats, brand, finalCta } from '../content'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { Btn, Stat, Placeholder } from '../components/UI'
import HeadFX from '../components/HeadFX'

export default function About() {
  return (
    <>
      <header className="page-head">
        <HeadFX machine="mixer" />
        <div className="container">
          <div className="breadcrumb"><span className="gold">Home</span> / About</div>
          <h1 className="display h-xl">{about.kicker}</h1>
        </div>
      </header>
      <div className="hazard" />

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal variant="left">
              <div>
                <span className="eyebrow">Who we are</span>
                <h2 className="display h-md" style={{ marginBottom: 18 }}>{about.heading}</h2>
                <p className="lead" style={{ marginBottom: 16 }}>{about.lead}</p>
                {about.paragraphs.map((t, i) => <p className="muted" key={i} style={{ marginBottom: 12 }}>{t}</p>)}
                <p className="muted" style={{ marginTop: 18 }}>
                  <strong style={{ color: 'var(--ink)' }}>Founder:</strong> {brand.owner} · <strong style={{ color: 'var(--ink)' }}>Est.</strong> {brand.established}
                </p>
              </div>
            </Reveal>
            <Reveal variant="right">
              <Placeholder icon="building" label="Site / team photo" minHeight={420} className="" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="values-grid">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="value">
                  <div className="vi"><Icon name={v.icon} /></div>
                  <div><h4>{v.title}</h4><p>{v.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats-row">
            {stats.map((s, i) => <Reveal key={s.label} delay={i * 80}><Stat {...s} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{brand.tagline}</span>
            <h2 className="display h-lg">{finalCta.heading}</h2>
            <div className="cta-actions"><Btn to={finalCta.primary.to} big>{finalCta.primary.label}</Btn></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
