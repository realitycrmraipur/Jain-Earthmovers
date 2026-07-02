/* ============================================================================
   JAIN EARTHMOVERS — SINGLE SOURCE OF TRUTH
   ----------------------------------------------------------------------------
   EDIT EVERYTHING HERE. Nothing on the website is hard-coded in the pages.
   Change any text, number, phone, email, spec or list item below and the
   whole site updates. Add or remove items from any array and the pages adapt.
   Replace the bracketed [PLACEHOLDER] values with the client's real details.
   ========================================================================== */

export const brand = {
  name: 'Jain Earthmovers',
  shortName: 'Jain Earthmovers',
  tagline: 'Building Tomorrow',
  owner: 'Chitrank Chopra',
  established: '2009',          // year founded (placeholder)
  logoDark: './logo-dark.png',            // full lockup, cream/gold (dark bg)
  logoLight: './logo-light.png',          // full lockup, charcoal/gold (light bg)
  logoMark: './logo-mark-dark.png',       // JE monogram only (dark bg) — used in nav/footer
  logoMarkLight: './logo-mark-light.png', // JE monogram only (light bg)
  blurb:
    'Heavy hydraulic excavation, Ajax concrete supply and turnkey earthwork contracts — delivered on time, on spec, and to mining-grade standards.',
}

/* Top navigation — order shown left to right. `to` matches the routes. */
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Equipment', to: '/equipment' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

/* Buttons reused across the site */
export const cta = {
  primary: { label: 'Request a Quote', to: '/contact' },
  secondary: { label: 'View Equipment', to: '/equipment' },
  call: { label: 'Call Now', to: '/contact' },
}

/* Contact details — REPLACE with real values */
export const contact = {
  phonePrimary: '+91 98XXX XXXXX',
  phoneSecondary: '+91 97XXX XXXXX',
  whatsapp: '+91 98XXX XXXXX',
  email: 'info@jainearthmovers.in',
  emailSales: 'sales@jainearthmovers.in',
  addressLines: [
    'Jain Earthmovers',
    'Plot No. 00, [Industrial Area]',
    '[City], [State] – 000000',
    'India',
  ],
  hours: [
    { day: 'Mon – Sat', time: '8:00 AM – 7:00 PM' },
    { day: 'Sunday', time: 'On-call for active sites' },
  ],
  // Paste a Google Maps embed URL here later; leave '' to show a styled placeholder
  mapEmbedUrl: '',
  social: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'YouTube', href: '#', icon: 'youtube' },
  ],
}

/* HERO (home top) */
export const hero = {
  kicker: 'Hydraulic Excavation · Concrete · Contracts',
  titleLines: ['We Move', 'The Earth.'],
  subtitle:
    'From 140 and 210-tonne hydraulic excavators to Ajax self-loading concrete mixers, Jain Earthmovers powers mining, infrastructure and large-site construction across the region.',
  scrollHint: 'Scroll to dig in',
}

/* Headline stats — used on Home and About. Animated count-up. */
export const stats = [
  { value: 15, suffix: '+', label: 'Years on site' },
  { value: 40, suffix: '+', label: 'Machines deployed' },
  { value: 320, suffix: '+', label: 'Projects delivered' },
  { value: 18, suffix: 'M', label: 'm³ earth moved' },
]

/* SERVICES — add/remove freely */
export const services = [
  {
    id: 'excavation',
    icon: 'excavator',
    title: 'Bulk Excavation & Earthmoving',
    blurb:
      'Mass excavation, cut-and-fill and grading for industrial, infrastructure and township sites using our heavy hydraulic fleet.',
    points: ['Mass & detailed excavation', 'Cut, fill & grading', 'Volume-based or rate contracts'],
  },
  {
    id: 'mining',
    icon: 'mountain',
    title: 'Mining & Overburden Removal',
    blurb:
      'Mining-grade 140T and 210T excavators for overburden stripping, bench formation and high-volume material handling.',
    points: ['Overburden stripping', 'Bench & haul-road formation', '24×7 deployment'],
  },
  {
    id: 'hire',
    icon: 'key',
    title: 'Equipment Hire',
    blurb:
      'Excavators and mixers available on wet or dry hire — with trained operators, maintenance and on-site support.',
    points: ['Wet hire (with operator)', 'Dry hire available', 'Daily / monthly rates'],
  },
  {
    id: 'concrete',
    icon: 'mixer',
    title: 'On-site Concrete Supply',
    blurb:
      'Ajax self-loading mixers deliver consistent, batched concrete directly at the pour — no fixed plant required.',
    points: ['Self-loading mixing', 'Mobile, site-to-site', 'Consistent batch quality'],
  },
  {
    id: 'sitedev',
    icon: 'layers',
    title: 'Site Development',
    blurb:
      'Land clearing, levelling and site preparation that turns raw land into a build-ready platform.',
    points: ['Land clearing', 'Levelling & compaction', 'Drainage & access'],
  },
  {
    id: 'infra',
    icon: 'road',
    title: 'Infrastructure Earthworks',
    blurb:
      'Embankments, roads and foundation earthworks executed to specification with full plant and crew.',
    points: ['Road & embankment works', 'Foundation excavation', 'Turnkey crews'],
  },
]

/* EQUIPMENT (separate page). Each item renders a full spec card.
   `image` is left empty -> a styled placeholder box is shown. Drop a file in
   /public and set image: './your-photo.jpg' to swap it in. */
export const equipment = {
  intro:
    'A heavy, well-maintained fleet built for mining and large-site construction. All machines are available for project contracts or hire.',
  categories: [
    {
      id: 'exc-140',
      name: 'JE-140 Hydraulic Excavator',
      type: 'Hydraulic Excavator',
      badge: '140-Tonne Class',
      image: '',
      tagline: 'Mining-grade digging power for high-volume earthwork.',
      specs: [
        { label: 'Operating Weight', value: '140 t' },
        { label: 'Engine Power', value: '760 hp (567 kW)' },
        { label: 'Bucket Capacity', value: '6.7 m³' },
        { label: 'Max Digging Depth', value: '7.9 m' },
        { label: 'Max Reach', value: '13.2 m' },
        { label: 'Fuel Tank', value: '1,600 L' },
      ],
      features: ['Reinforced HD undercarriage', 'High-flow hydraulics', 'Operator-comfort cab', 'Quick-couple attachments'],
    },
    {
      id: 'exc-210',
      name: 'JE-210 Hydraulic Excavator',
      type: 'Hydraulic Excavator',
      badge: '210-Tonne Class',
      image: '',
      tagline: 'Maximum output for overburden and mass excavation.',
      specs: [
        { label: 'Operating Weight', value: '210 t' },
        { label: 'Engine Power', value: '1,180 hp (880 kW)' },
        { label: 'Bucket Capacity', value: '12.0 m³' },
        { label: 'Max Digging Depth', value: '8.9 m' },
        { label: 'Max Reach', value: '14.7 m' },
        { label: 'Fuel Tank', value: '2,400 L' },
      ],
      features: ['Heavy-duty boom & stick', 'Auto-lubrication system', 'Mining-spec cooling', '360° camera safety'],
    },
    {
      id: 'ajax-argo',
      name: 'Ajax ARGO 4000',
      type: 'Self-Loading Concrete Mixer',
      badge: '4.0 m³ Batch',
      image: '',
      tagline: 'Mobile, self-loading concrete — batched right at the pour.',
      specs: [
        { label: 'Output per Batch', value: '4.0 m³' },
        { label: 'Mixing Output', value: '~28 m³/hr' },
        { label: 'Engine Power', value: '74 hp' },
        { label: 'Drive', value: '4WD self-loading' },
        { label: 'Hopper Capacity', value: '2,750 kg' },
        { label: 'Water Tank', value: '750 L' },
      ],
      features: ['Self-loading hopper', 'On-board water dosing', 'All-terrain 4WD', 'Consistent batch control'],
    },
    {
      id: 'ajax-slm',
      name: 'Ajax SLM 4500',
      type: 'Self-Loading Concrete Mixer',
      badge: '4.5 m³ Batch',
      image: '',
      tagline: 'Higher-volume self-loading mixer for sustained pours.',
      specs: [
        { label: 'Output per Batch', value: '4.5 m³' },
        { label: 'Mixing Output', value: '~32 m³/hr' },
        { label: 'Engine Power', value: '90 hp' },
        { label: 'Drive', value: '4WD self-loading' },
        { label: 'Hopper Capacity', value: '3,100 kg' },
        { label: 'Water Tank', value: '900 L' },
      ],
      features: ['Weigh-batching system', 'Swing drum discharge', 'Heavy-duty axles', 'Low-maintenance design'],
    },
  ],
  ctaNote: 'Need specs, availability or rental rates for a specific machine?',
}

/* PROJECTS gallery — placeholder boxes; swap `image` later */
export const projects = {
  intro:
    'A snapshot of the earthwork, mining and concreting projects our fleet has powered. Replace these with the client’s real case studies.',
  filters: ['All', 'Mining', 'Infrastructure', 'Industrial', 'Concrete'],
  items: [
    { title: 'Highway Embankment Earthworks', category: 'Infrastructure', location: '[City], [State]', year: '2024', metric: '2.4M m³ moved', image: '' },
    { title: 'Open-cast Overburden Removal', category: 'Mining', location: '[Mine Site]', year: '2023', metric: '210T fleet, 24×7', image: '' },
    { title: 'Industrial Park Site Grading', category: 'Industrial', location: '[Industrial Area]', year: '2024', metric: '85-acre platform', image: '' },
    { title: 'Township Foundation & Concreting', category: 'Concrete', location: '[City]', year: '2023', metric: '9,000 m³ poured', image: '' },
    { title: 'Canal & Drainage Excavation', category: 'Infrastructure', location: '[District]', year: '2022', metric: '14 km alignment', image: '' },
    { title: 'Cement Plant Bulk Excavation', category: 'Industrial', location: '[State]', year: '2025', metric: '1.1M m³ cut', image: '' },
  ],
}

/* ABOUT */
export const about = {
  kicker: 'About Jain Earthmovers',
  heading: 'Heavy iron. Disciplined crews. Work that lasts.',
  lead:
    'Founded by Chitrank Chopra, Jain Earthmovers has grown into a trusted name in heavy excavation and concrete supply — pairing a modern, mining-grade fleet with crews who deliver on time and on spec.',
  paragraphs: [
    'We specialise in the work most contractors can’t touch: high-volume excavation, overburden removal and large-scale site development driven by 140 and 210-tonne hydraulic excavators.',
    'Our Ajax self-loading mixers bring consistent, batched concrete straight to the pour, while our contracting team takes on turnkey earthwork mandates from mobilisation to handover.',
    'Every project runs on three commitments: safety first, schedule certainty, and machines that are maintained to keep running when it matters.',
  ],
  values: [
    { icon: 'shield', title: 'Safety First', text: 'Trained operators, maintained machines and site discipline on every shift.' },
    { icon: 'clock', title: 'On Schedule', text: 'We mobilise fast and hold the program — your timeline is the priority.' },
    { icon: 'gauge', title: 'Built to Spec', text: 'Mining-grade standards and quality control, from excavation to concrete.' },
    { icon: 'wrench', title: 'Always Running', text: 'In-house maintenance keeps the fleet productive and downtime low.' },
  ],
}

/* HOW WE WORK — process steps */
export const process = {
  kicker: 'How we work',
  heading: 'From site visit to handover',
  steps: [
    { no: '01', title: 'Site Visit & Survey', text: 'We assess scope, access and ground conditions on the ground.' },
    { no: '02', title: 'Quote & Plan', text: 'A clear, itemised proposal with machines, crew and timeline.' },
    { no: '03', title: 'Mobilise', text: 'Fleet and operators on site, fast, with safety briefing in place.' },
    { no: '04', title: 'Execute & Handover', text: 'We deliver to spec, with progress reporting through to handover.' },
  ],
}

/* AI CHATBOT (front-end demo shell — wire a backend later) */
export const chatbot = {
  launcherLabel: 'Enquiries',
  title: 'Jain Earthmovers Assistant',
  subtitle: 'Typically replies in a few minutes',
  welcome:
    'Hi! 👋 I can help with equipment, hire rates and quotes. What are you looking for today?',
  quickReplies: [
    'Excavator hire rates',
    'Ajax mixer availability',
    'Request a site visit',
    'Get a project quote',
  ],
  // Shown after any user message (demo only — no backend yet)
  cannedReply:
    'Thanks for reaching out! This is a demo assistant. A Jain Earthmovers specialist will get back to you shortly — or call us directly and we’ll sort it out right away.',
  inputPlaceholder: 'Type your enquiry…',
  disclaimer: 'Demo assistant — responses are sample only.',
}

/* FINAL CALL-TO-ACTION band */
export const finalCta = {
  heading: 'Have a site that needs moving?',
  text: 'Tell us about your project. We’ll bring the iron.',
  primary: { label: 'Request a Quote', to: '/contact' },
  secondary: { label: 'See the Fleet', to: '/equipment' },
}

/* FOOTER */
export const footer = {
  blurb:
    'Heavy hydraulic excavation, Ajax concrete supply and turnkey earthwork contracts.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Projects', to: '/projects' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      heading: 'Fleet',
      links: [
        { label: 'JE-140 Excavator', to: '/equipment' },
        { label: 'JE-210 Excavator', to: '/equipment' },
        { label: 'Ajax Mixers', to: '/equipment' },
        { label: 'Equipment Hire', to: '/services' },
      ],
    },
  ],
  legal: '© ' + new Date().getFullYear() + ' Jain Earthmovers. All rights reserved.',
  credit: 'Building Tomorrow.',
}
