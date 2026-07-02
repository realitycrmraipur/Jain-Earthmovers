import { equipment, cta } from '../content'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { Btn, Placeholder } from '../components/UI'
import HeadFX from '../components/HeadFX'

export default function Equipment() {
  return (
    <>
      <header className="page-head">
        <HeadFX machine="excavator" />
        <div className="container">
          <div className="breadcrumb"><span className="gold">Home</span> / Equipment</div>
          <h1 className="display h-xl">The Fleet</h1>
          <p className="lead" style={{ marginTop: 16 }}>{equipment.intro}</p>
        </div>
      </header>
      <div className="hazard" />

      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {equipment.categories.map((m, i) => (
            <Reveal key={m.id} variant={i % 2 ? 'right' : 'left'}>
              <article className="equip" id={m.id}>
                <div className="equip-media">
                  <span className="equip-badge">{m.badge}</span>
                  <Placeholder icon={m.type.includes('Mixer') ? 'mixer' : 'excavator'} label={m.name} src={m.image} />
                </div>
                <div className="equip-body">
                  <span className="equip-type">{m.type}</span>
                  <h3>{m.name}</h3>
                  <p className="equip-tag">{m.tagline}</p>
                  <div className="spec-grid">
                    {m.specs.map((s) => (
                      <div className="spec" key={s.label}>
                        <div className="spec-label">{s.label}</div>
                        <div className="spec-val">{s.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="equip-features">
                    {m.features.map((f) => <span className="chip" key={f}>{f}</span>)}
                  </div>
                  <Btn to={cta.primary.to}>Enquire about this machine</Btn>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Equipment</span>
            <h2 className="display h-lg">{equipment.ctaNote}</h2>
            <div className="cta-actions">
              <Btn to={cta.primary.to} big>{cta.primary.label}</Btn>
              <Btn to={cta.call.to} variant="ghost" big icon="phone">{cta.call.label}</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
