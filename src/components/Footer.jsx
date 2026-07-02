import { Link } from 'react-router-dom'
import { brand, footer, contact } from '../content'
import Logo from './Logo'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo variant="mark" tone="light" height={62} className="logo-darkarm" />
            <p>{footer.blurb}</p>
            <div className="footer-social">
              {contact.social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}><Icon name={s.icon} /></a>
              ))}
            </div>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h5>{col.heading}</h5>
              <ul className="footer-links">
                {col.links.map((l) => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
          <div>
            <h5>Get in touch</h5>
            <ul className="footer-links">
              <li><a href={`tel:${contact.phonePrimary.replace(/\s/g, '')}`}>{contact.phonePrimary}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li style={{ color: 'var(--ink-3)' }}>{contact.addressLines[1]}, {contact.addressLines[2]}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{footer.legal}</span>
          <span className="credit">{footer.credit}</span>
        </div>
      </div>
    </footer>
  )
}
