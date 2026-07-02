import { useState } from 'react'
import { projects, cta } from '../content'
import Reveal from '../components/Reveal'
import { Btn, Placeholder } from '../components/UI'
import HeadFX from '../components/HeadFX'

export default function Projects() {
  const [f, setF] = useState(projects.filters[0])
  const list = f === projects.filters[0] ? projects.items : projects.items.filter((i) => i.category === f)

  return (
    <>
      <header className="page-head">
        <HeadFX machine="dozer" />
        <div className="container">
          <div className="breadcrumb"><span className="gold">Home</span> / Projects</div>
          <h1 className="display h-xl">Our Work</h1>
          <p className="lead" style={{ marginTop: 16 }}>{projects.intro}</p>
        </div>
      </header>
      <div className="hazard" />

      <section className="section">
        <div className="container">
          <div className="filter-row">
            {projects.filters.map((cat) => (
              <button key={cat} className={`filter-btn ${f === cat ? 'active' : ''}`} onClick={() => setF(cat)}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-3">
            {list.map((pr, i) => (
              <Reveal key={pr.title} delay={(i % 3) * 90}>
                <article className="proj">
                  <Placeholder icon="excavator" label={pr.category} src={pr.image} />
                  <div className="proj-info">
                    <span className="proj-cat">{pr.category} · {pr.year}</span>
                    <h4>{pr.title}</h4>
                    <div className="proj-meta"><span>{pr.location}</span><span>·</span><span>{pr.metric}</span></div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <h2 className="display h-lg">Your project could be next.</h2>
            <div className="cta-actions"><Btn to={cta.primary.to} big>{cta.primary.label}</Btn></div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
