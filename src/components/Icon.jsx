/* Single inline-SVG icon set (no emoji, no icon dependency).
   Usage: <Icon name="excavator" />  — inherits color + size from CSS. */
const P = {
  excavator: (
    <>
      <path d="M2 20h20" /><path d="M4 20v-4h7v4" /><circle cx="6" cy="20" r="1.4" /><circle cx="9.5" cy="20" r="1.4" />
      <path d="M11 16v-3h3l4-5" /><path d="M14 13l1.5 3" /><path d="M18 8l2.5-1.5-1-2.2-2.6 1" /><path d="M5 16l-1-3h7" />
    </>
  ),
  mixer: (
    <>
      <path d="M2 20h20" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" />
      <path d="M2 18h2M8 18h7M19 18h3" /><path d="M9 16l2-9 7 2-2 7" /><path d="M11 7l6 1" /><path d="M10 11l6 1.5" />
    </>
  ),
  mountain: (<><path d="M3 20l6-12 4 7 2-3 6 8z" /><path d="M9 8l2 3" /></>),
  key: (<><circle cx="8" cy="8" r="4" /><path d="M11 11l9 9" /><path d="M16 16l2-2M19 19l2-2" /></>),
  layers: (<><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>),
  road: (<><path d="M7 21L9 3M17 21l-2-18" /><path d="M12 7v2M12 12v2M12 17v2" /></>),
  shield: (<><path d="M12 3l8 3v6c0 4.5-3.4 7.6-8 9-4.6-1.4-8-4.5-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  gauge: (<><path d="M3 14a9 9 0 0 1 18 0" /><path d="M12 14l4-3" /><circle cx="12" cy="14" r="1.3" /></>),
  wrench: (<><path d="M14 6a4 4 0 0 0-5 5l-6 6 3 3 6-6a4 4 0 0 0 5-5l-2.5 2.5-2.5-2.5L14 6z" /></>),
  phone: (<><path d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  whatsapp: (<><path d="M3 21l1.6-4A8 8 0 1 1 8 19.5L3 21z" /><path d="M9 9c0 3 3 6 6 6 1 0 1.5-1 1.5-1l-2-1-1 1c-1 0-2.5-1.5-2.5-2.5l1-1-1-2S9 8 9 9z" /></>),
  mappin: (<><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  building: (<><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" /><path d="M10 21v-3h4v3" /></>),
  arrowRight: (<><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>),
  check: (<><path d="M5 12l4 4 10-10" /></>),
  menu: (<><path d="M3 6h18M3 12h18M3 18h18" /></>),
  close: (<><path d="M6 6l12 12M18 6L6 18" /></>),
  send: (<><path d="M4 12l16-7-7 16-2-7-7-2z" /></>),
  chat: (<><path d="M4 5h16v11H8l-4 4V5z" /><path d="M8 9h8M8 12h5" /></>),
  quote: (<><path d="M8 7H5v5h3l-1 4M19 7h-3v5h3l-1 4" /></>),
  linkedin: (<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" /></>),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></>),
  youtube: (<><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M11 9l4 3-4 3z" /></>),
  truck: (<><path d="M3 16V6h11v10" /><path d="M14 9h4l3 3v4h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>),
}

export default function Icon({ name, className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name] || P.check}
    </svg>
  )
}
