import { services, process as proc, cta } from '../content'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { Btn, SectionHead } from '../components/UI'
import HeadFX from '../components/HeadFX'

export default function Services() {
  return (
    <>
      <header className="page-head">
        <HeadFX machine="crane" />
        <div className="container">
          <div className="breadcrumb"><span className="gold">Home</span> / Services</div>
          <h1 className="display h-xl">Services</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Excavation, mining support, concrete and turnkey earthwork contracts — backed by a heavy, well-run fleet.
          </p>
        </div>
      </header>
      <div className="hazard" />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 100}>
                <article className="card">
                  <div className="card-icon"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul className="pts">{s.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal><SectionHead eyebrow={proc.kicker} title={proc.heading} center /></Reveal>
          <div className="grid grid-4">
            {proc.steps.map((st, i) => (
              <Reveal key={st.no} delay={i * 90}>
                <div className="step"><div className="step-no">{st.no}</div><h4>{st.title}</h4><p>{st.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <h2 className="display h-lg">Tell us what you need moved.</h2>
            <div className="cta-actions"><Btn to={cta.primary.to} big>{cta.primary.label}</Btn></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
