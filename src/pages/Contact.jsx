import { useState } from 'react'
import { contact, brand, services } from '../content'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import HeadFX from '../components/HeadFX'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const tel = contact.phonePrimary.replace(/\s/g, '')

  return (
    <>
      <header className="page-head">
        <HeadFX machine="truck" />
        <div className="container">
          <div className="breadcrumb"><span className="gold">Home</span> / Contact</div>
          <h1 className="display h-xl">Get a Quote</h1>
          <p className="lead" style={{ marginTop: 16 }}>
            Tell us about your site and timeline. We’ll get back with machines, crew and a clear price.
          </p>
        </div>
      </header>
      <div className="hazard" />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* form */}
            <Reveal variant="left">
              <div className="contact-card">
                {sent ? (
                  <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                    <div className="card-icon" style={{ margin: '0 auto 16px' }}><Icon name="check" /></div>
                    <h3 className="display h-md" style={{ marginBottom: 10 }}>Thanks!</h3>
                    <p className="muted">This is a demo form. Once connected, your enquiry will reach the {brand.name} team directly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                    <div className="field"><label>Name</label><input required placeholder="Your name" /></div>
                    <div className="field"><label>Phone</label><input required placeholder="Your phone number" /></div>
                    <div className="field"><label>Email</label><input type="email" placeholder="you@email.com" /></div>
                    <div className="field">
                      <label>What do you need?</label>
                      <select>
                        <option value="">Select a service…</option>
                        {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                      </select>
                    </div>
                    <div className="field"><label>Project details</label><textarea placeholder="Site location, scope, timeline…" /></div>
                    <button className="btn btn-gold btn-lg" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                      Send enquiry <Icon name="send" />
                    </button>
                    <p className="note" style={{ marginTop: 14 }}>Demo form — not yet connected to a backend.</p>
                  </form>
                )}
              </div>
            </Reveal>

            {/* details */}
            <Reveal variant="right">
              <div>
                <div className="contact-card" style={{ marginBottom: 22 }}>
                  <a className="contact-line" href={`tel:${tel}`}>
                    <span className="ci"><Icon name="phone" /></span>
                    <span><b>Call</b>{contact.phonePrimary}<br />{contact.phoneSecondary}</span>
                  </a>
                  <a className="contact-line" href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}>
                    <span className="ci"><Icon name="whatsapp" /></span>
                    <span><b>WhatsApp</b>{contact.whatsapp}</span>
                  </a>
                  <a className="contact-line" href={`mailto:${contact.email}`}>
                    <span className="ci"><Icon name="mail" /></span>
                    <span><b>Email</b>{contact.email}<br />{contact.emailSales}</span>
                  </a>
                  <div className="contact-line">
                    <span className="ci"><Icon name="mappin" /></span>
                    <span><b>Address</b>{contact.addressLines.map((l, i) => <span key={i}>{l}<br /></span>)}</span>
                  </div>
                  <div className="contact-line">
                    <span className="ci"><Icon name="clock" /></span>
                    <span><b>Hours</b>{contact.hours.map((h) => <span key={h.day}>{h.day}: {h.time}<br /></span>)}</span>
                  </div>
                </div>
                {/* map */}
                {contact.mapEmbedUrl ? (
                  <iframe title="Map" src={contact.mapEmbedUrl} style={{ width: '100%', height: 240, border: 0, borderRadius: 10 }} loading="lazy" />
                ) : (
                  <div className="ph" style={{ minHeight: 240 }}>
                    <span className="ph-label"><Icon name="mappin" /> Map embed goes here</span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
