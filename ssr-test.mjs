// test-ssr.jsx
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

// src/App.jsx
import { useEffect as useEffect4 } from "react";
import { Routes, Route, useLocation as useLocation2 } from "react-router-dom";

// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

// src/content.js
var brand = {
  name: "Jain Earthmovers",
  shortName: "Jain Earthmovers",
  tagline: "Building Tomorrow",
  owner: "Chitrank Chopra",
  established: "2009",
  // year founded (placeholder)
  logoDark: "./logo-dark.png",
  // cream/gold logo for dark backgrounds
  logoLight: "./logo-light.png",
  // charcoal/gold logo for light backgrounds
  blurb: "Heavy hydraulic excavation, Ajax concrete supply and turnkey earthwork contracts \u2014 delivered on time, on spec, and to mining-grade standards."
};
var nav = [
  { label: "Home", to: "/" },
  { label: "Equipment", to: "/equipment" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];
var cta = {
  primary: { label: "Request a Quote", to: "/contact" },
  secondary: { label: "View Equipment", to: "/equipment" },
  call: { label: "Call Now", to: "/contact" }
};
var contact = {
  phonePrimary: "+91 98XXX XXXXX",
  phoneSecondary: "+91 97XXX XXXXX",
  whatsapp: "+91 98XXX XXXXX",
  email: "info@jainearthmovers.in",
  emailSales: "sales@jainearthmovers.in",
  addressLines: [
    "Jain Earthmovers",
    "Plot No. 00, [Industrial Area]",
    "[City], [State] \u2013 000000",
    "India"
  ],
  hours: [
    { day: "Mon \u2013 Sat", time: "8:00 AM \u2013 7:00 PM" },
    { day: "Sunday", time: "On-call for active sites" }
  ],
  // Paste a Google Maps embed URL here later; leave '' to show a styled placeholder
  mapEmbedUrl: "",
  social: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" }
  ]
};
var hero = {
  kicker: "Hydraulic Excavation \xB7 Concrete \xB7 Contracts",
  titleLines: ["We Move", "The Earth."],
  subtitle: "From 140 and 210-tonne hydraulic excavators to Ajax self-loading concrete mixers, Jain Earthmovers powers mining, infrastructure and large-site construction across the region.",
  scrollHint: "Scroll to dig in"
};
var stats = [
  { value: 15, suffix: "+", label: "Years on site" },
  { value: 40, suffix: "+", label: "Machines deployed" },
  { value: 320, suffix: "+", label: "Projects delivered" },
  { value: 18, suffix: "M", label: "m\xB3 earth moved" }
];
var services = [
  {
    id: "excavation",
    icon: "excavator",
    title: "Bulk Excavation & Earthmoving",
    blurb: "Mass excavation, cut-and-fill and grading for industrial, infrastructure and township sites using our heavy hydraulic fleet.",
    points: ["Mass & detailed excavation", "Cut, fill & grading", "Volume-based or rate contracts"]
  },
  {
    id: "mining",
    icon: "mountain",
    title: "Mining & Overburden Removal",
    blurb: "Mining-grade 140T and 210T excavators for overburden stripping, bench formation and high-volume material handling.",
    points: ["Overburden stripping", "Bench & haul-road formation", "24\xD77 deployment"]
  },
  {
    id: "hire",
    icon: "key",
    title: "Equipment Hire",
    blurb: "Excavators and mixers available on wet or dry hire \u2014 with trained operators, maintenance and on-site support.",
    points: ["Wet hire (with operator)", "Dry hire available", "Daily / monthly rates"]
  },
  {
    id: "concrete",
    icon: "mixer",
    title: "On-site Concrete Supply",
    blurb: "Ajax self-loading mixers deliver consistent, batched concrete directly at the pour \u2014 no fixed plant required.",
    points: ["Self-loading mixing", "Mobile, site-to-site", "Consistent batch quality"]
  },
  {
    id: "sitedev",
    icon: "layers",
    title: "Site Development",
    blurb: "Land clearing, levelling and site preparation that turns raw land into a build-ready platform.",
    points: ["Land clearing", "Levelling & compaction", "Drainage & access"]
  },
  {
    id: "infra",
    icon: "road",
    title: "Infrastructure Earthworks",
    blurb: "Embankments, roads and foundation earthworks executed to specification with full plant and crew.",
    points: ["Road & embankment works", "Foundation excavation", "Turnkey crews"]
  }
];
var equipment = {
  intro: "A heavy, well-maintained fleet built for mining and large-site construction. All machines are available for project contracts or hire.",
  categories: [
    {
      id: "exc-140",
      name: "JE-140 Hydraulic Excavator",
      type: "Hydraulic Excavator",
      badge: "140-Tonne Class",
      image: "",
      tagline: "Mining-grade digging power for high-volume earthwork.",
      specs: [
        { label: "Operating Weight", value: "140 t" },
        { label: "Engine Power", value: "760 hp (567 kW)" },
        { label: "Bucket Capacity", value: "6.7 m\xB3" },
        { label: "Max Digging Depth", value: "7.9 m" },
        { label: "Max Reach", value: "13.2 m" },
        { label: "Fuel Tank", value: "1,600 L" }
      ],
      features: ["Reinforced HD undercarriage", "High-flow hydraulics", "Operator-comfort cab", "Quick-couple attachments"]
    },
    {
      id: "exc-210",
      name: "JE-210 Hydraulic Excavator",
      type: "Hydraulic Excavator",
      badge: "210-Tonne Class",
      image: "",
      tagline: "Maximum output for overburden and mass excavation.",
      specs: [
        { label: "Operating Weight", value: "210 t" },
        { label: "Engine Power", value: "1,180 hp (880 kW)" },
        { label: "Bucket Capacity", value: "12.0 m\xB3" },
        { label: "Max Digging Depth", value: "8.9 m" },
        { label: "Max Reach", value: "14.7 m" },
        { label: "Fuel Tank", value: "2,400 L" }
      ],
      features: ["Heavy-duty boom & stick", "Auto-lubrication system", "Mining-spec cooling", "360\xB0 camera safety"]
    },
    {
      id: "ajax-argo",
      name: "Ajax ARGO 4000",
      type: "Self-Loading Concrete Mixer",
      badge: "4.0 m\xB3 Batch",
      image: "",
      tagline: "Mobile, self-loading concrete \u2014 batched right at the pour.",
      specs: [
        { label: "Output per Batch", value: "4.0 m\xB3" },
        { label: "Mixing Output", value: "~28 m\xB3/hr" },
        { label: "Engine Power", value: "74 hp" },
        { label: "Drive", value: "4WD self-loading" },
        { label: "Hopper Capacity", value: "2,750 kg" },
        { label: "Water Tank", value: "750 L" }
      ],
      features: ["Self-loading hopper", "On-board water dosing", "All-terrain 4WD", "Consistent batch control"]
    },
    {
      id: "ajax-slm",
      name: "Ajax SLM 4500",
      type: "Self-Loading Concrete Mixer",
      badge: "4.5 m\xB3 Batch",
      image: "",
      tagline: "Higher-volume self-loading mixer for sustained pours.",
      specs: [
        { label: "Output per Batch", value: "4.5 m\xB3" },
        { label: "Mixing Output", value: "~32 m\xB3/hr" },
        { label: "Engine Power", value: "90 hp" },
        { label: "Drive", value: "4WD self-loading" },
        { label: "Hopper Capacity", value: "3,100 kg" },
        { label: "Water Tank", value: "900 L" }
      ],
      features: ["Weigh-batching system", "Swing drum discharge", "Heavy-duty axles", "Low-maintenance design"]
    }
  ],
  ctaNote: "Need specs, availability or rental rates for a specific machine?"
};
var projects = {
  intro: "A snapshot of the earthwork, mining and concreting projects our fleet has powered. Replace these with the client\u2019s real case studies.",
  filters: ["All", "Mining", "Infrastructure", "Industrial", "Concrete"],
  items: [
    { title: "Highway Embankment Earthworks", category: "Infrastructure", location: "[City], [State]", year: "2024", metric: "2.4M m\xB3 moved", image: "" },
    { title: "Open-cast Overburden Removal", category: "Mining", location: "[Mine Site]", year: "2023", metric: "210T fleet, 24\xD77", image: "" },
    { title: "Industrial Park Site Grading", category: "Industrial", location: "[Industrial Area]", year: "2024", metric: "85-acre platform", image: "" },
    { title: "Township Foundation & Concreting", category: "Concrete", location: "[City]", year: "2023", metric: "9,000 m\xB3 poured", image: "" },
    { title: "Canal & Drainage Excavation", category: "Infrastructure", location: "[District]", year: "2022", metric: "14 km alignment", image: "" },
    { title: "Cement Plant Bulk Excavation", category: "Industrial", location: "[State]", year: "2025", metric: "1.1M m\xB3 cut", image: "" }
  ]
};
var about = {
  kicker: "About Jain Earthmovers",
  heading: "Heavy iron. Disciplined crews. Work that lasts.",
  lead: "Founded by Chitrank Chopra, Jain Earthmovers has grown into a trusted name in heavy excavation and concrete supply \u2014 pairing a modern, mining-grade fleet with crews who deliver on time and on spec.",
  paragraphs: [
    "We specialise in the work most contractors can\u2019t touch: high-volume excavation, overburden removal and large-scale site development driven by 140 and 210-tonne hydraulic excavators.",
    "Our Ajax self-loading mixers bring consistent, batched concrete straight to the pour, while our contracting team takes on turnkey earthwork mandates from mobilisation to handover.",
    "Every project runs on three commitments: safety first, schedule certainty, and machines that are maintained to keep running when it matters."
  ],
  values: [
    { icon: "shield", title: "Safety First", text: "Trained operators, maintained machines and site discipline on every shift." },
    { icon: "clock", title: "On Schedule", text: "We mobilise fast and hold the program \u2014 your timeline is the priority." },
    { icon: "gauge", title: "Built to Spec", text: "Mining-grade standards and quality control, from excavation to concrete." },
    { icon: "wrench", title: "Always Running", text: "In-house maintenance keeps the fleet productive and downtime low." }
  ]
};
var process = {
  kicker: "How we work",
  heading: "From site visit to handover",
  steps: [
    { no: "01", title: "Site Visit & Survey", text: "We assess scope, access and ground conditions on the ground." },
    { no: "02", title: "Quote & Plan", text: "A clear, itemised proposal with machines, crew and timeline." },
    { no: "03", title: "Mobilise", text: "Fleet and operators on site, fast, with safety briefing in place." },
    { no: "04", title: "Execute & Handover", text: "We deliver to spec, with progress reporting through to handover." }
  ]
};
var chatbot = {
  launcherLabel: "Enquiries",
  title: "Jain Earthmovers Assistant",
  subtitle: "Typically replies in a few minutes",
  welcome: "Hi! \u{1F44B} I can help with equipment, hire rates and quotes. What are you looking for today?",
  quickReplies: [
    "Excavator hire rates",
    "Ajax mixer availability",
    "Request a site visit",
    "Get a project quote"
  ],
  // Shown after any user message (demo only — no backend yet)
  cannedReply: "Thanks for reaching out! This is a demo assistant. A Jain Earthmovers specialist will get back to you shortly \u2014 or call us directly and we\u2019ll sort it out right away.",
  inputPlaceholder: "Type your enquiry\u2026",
  disclaimer: "Demo assistant \u2014 responses are sample only."
};
var finalCta = {
  heading: "Have a site that needs moving?",
  text: "Tell us about your project. We\u2019ll bring the iron.",
  primary: { label: "Request a Quote", to: "/contact" },
  secondary: { label: "See the Fleet", to: "/equipment" }
};
var footer = {
  blurb: "Heavy hydraulic excavation, Ajax concrete supply and turnkey earthwork contracts.",
  columns: [
    {
      heading: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Services", to: "/services" },
        { label: "Projects", to: "/projects" },
        { label: "Contact", to: "/contact" }
      ]
    },
    {
      heading: "Fleet",
      links: [
        { label: "JE-140 Excavator", to: "/equipment" },
        { label: "JE-210 Excavator", to: "/equipment" },
        { label: "Ajax Mixers", to: "/equipment" },
        { label: "Equipment Hire", to: "/services" }
      ]
    }
  ],
  legal: "\xA9 " + (/* @__PURE__ */ new Date()).getFullYear() + " Jain Earthmovers. All rights reserved.",
  credit: "Building Tomorrow."
};

// src/components/Icon.jsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var P = {
  excavator: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M2 20h20" }),
    /* @__PURE__ */ jsx("path", { d: "M4 20v-4h7v4" }),
    /* @__PURE__ */ jsx("circle", { cx: "6", cy: "20", r: "1.4" }),
    /* @__PURE__ */ jsx("circle", { cx: "9.5", cy: "20", r: "1.4" }),
    /* @__PURE__ */ jsx("path", { d: "M11 16v-3h3l4-5" }),
    /* @__PURE__ */ jsx("path", { d: "M14 13l1.5 3" }),
    /* @__PURE__ */ jsx("path", { d: "M18 8l2.5-1.5-1-2.2-2.6 1" }),
    /* @__PURE__ */ jsx("path", { d: "M5 16l-1-3h7" })
  ] }),
  mixer: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M2 20h20" }),
    /* @__PURE__ */ jsx("circle", { cx: "6", cy: "18", r: "2" }),
    /* @__PURE__ */ jsx("circle", { cx: "17", cy: "18", r: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M2 18h2M8 18h7M19 18h3" }),
    /* @__PURE__ */ jsx("path", { d: "M9 16l2-9 7 2-2 7" }),
    /* @__PURE__ */ jsx("path", { d: "M11 7l6 1" }),
    /* @__PURE__ */ jsx("path", { d: "M10 11l6 1.5" })
  ] }),
  mountain: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 20l6-12 4 7 2-3 6 8z" }),
    /* @__PURE__ */ jsx("path", { d: "M9 8l2 3" })
  ] }),
  key: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "8", cy: "8", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M11 11l9 9" }),
    /* @__PURE__ */ jsx("path", { d: "M16 16l2-2M19 19l2-2" })
  ] }),
  layers: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M12 3l9 5-9 5-9-5 9-5z" }),
    /* @__PURE__ */ jsx("path", { d: "M3 13l9 5 9-5" })
  ] }),
  road: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M7 21L9 3M17 21l-2-18" }),
    /* @__PURE__ */ jsx("path", { d: "M12 7v2M12 12v2M12 17v2" })
  ] }),
  shield: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M12 3l8 3v6c0 4.5-3.4 7.6-8 9-4.6-1.4-8-4.5-8-9V6l8-3z" }),
    /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4" })
  ] }),
  clock: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsx("path", { d: "M12 7v5l3 2" })
  ] }),
  gauge: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 14a9 9 0 0 1 18 0" }),
    /* @__PURE__ */ jsx("path", { d: "M12 14l4-3" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "14", r: "1.3" })
  ] }),
  wrench: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("path", { d: "M14 6a4 4 0 0 0-5 5l-6 6 3 3 6-6a4 4 0 0 0 5-5l-2.5 2.5-2.5-2.5L14 6z" }) }),
  phone: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("path", { d: "M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" }) }),
  mail: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M3 7l9 6 9-6" })
  ] }),
  whatsapp: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 21l1.6-4A8 8 0 1 1 8 19.5L3 21z" }),
    /* @__PURE__ */ jsx("path", { d: "M9 9c0 3 3 6 6 6 1 0 1.5-1 1.5-1l-2-1-1 1c-1 0-2.5-1.5-2.5-2.5l1-1-1-2S9 8 9 9z" })
  ] }),
  mappin: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "2.5" })
  ] }),
  building: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "4", y: "3", width: "16", height: "18", rx: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" }),
    /* @__PURE__ */ jsx("path", { d: "M10 21v-3h4v3" })
  ] }),
  arrowRight: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
    /* @__PURE__ */ jsx("path", { d: "M13 6l6 6-6 6" })
  ] }),
  check: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("path", { d: "M5 12l4 4 10-10" }) }),
  menu: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("path", { d: "M3 6h18M3 12h18M3 18h18" }) }),
  close: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M18 6L6 18" }) }),
  send: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("path", { d: "M4 12l16-7-7 16-2-7-7-2z" }) }),
  chat: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M4 5h16v11H8l-4 4V5z" }),
    /* @__PURE__ */ jsx("path", { d: "M8 9h8M8 12h5" })
  ] }),
  quote: /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("path", { d: "M8 7H5v5h3l-1 4M19 7h-3v5h3l-1 4" }) }),
  linkedin: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ jsx("path", { d: "M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" })
  ] }),
  instagram: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M17.5 6.5v.01" })
  ] }),
  youtube: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "6", width: "18", height: "12", rx: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M11 9l4 3-4 3z" })
  ] }),
  truck: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 16V6h11v10" }),
    /* @__PURE__ */ jsx("path", { d: "M14 9h4l3 3v4h-7" }),
    /* @__PURE__ */ jsx("circle", { cx: "7", cy: "18", r: "1.6" }),
    /* @__PURE__ */ jsx("circle", { cx: "17", cy: "18", r: "1.6" })
  ] })
};
function Icon({ name, className = "" }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: P[name] || P.check
    }
  );
}

// src/components/Navbar.jsx
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);
  return /* @__PURE__ */ jsxs2(Fragment2, { children: [
    /* @__PURE__ */ jsx2("header", { className: `nav ${scrolled ? "scrolled" : ""}`, children: /* @__PURE__ */ jsxs2("div", { className: "container", children: [
      /* @__PURE__ */ jsx2(Link, { to: "/", className: "nav-logo", "aria-label": `${brand.name} home`, children: /* @__PURE__ */ jsx2("img", { src: brand.logoDark, alt: brand.name }) }),
      /* @__PURE__ */ jsxs2("nav", { className: "nav-links", children: [
        nav.map((n) => /* @__PURE__ */ jsx2(
          NavLink,
          {
            to: n.to,
            end: n.to === "/",
            className: ({ isActive }) => `nav-link ${isActive ? "active" : ""}`,
            children: n.label
          },
          n.to
        )),
        /* @__PURE__ */ jsx2(Link, { to: cta.primary.to, className: "btn btn-gold nav-cta", children: cta.primary.label })
      ] }),
      /* @__PURE__ */ jsx2("button", { className: "nav-burger", "aria-label": "Menu", onClick: () => setOpen((o) => !o), children: /* @__PURE__ */ jsx2(Icon, { name: open ? "close" : "menu" }) })
    ] }) }),
    /* @__PURE__ */ jsxs2("div", { className: `mobile-menu ${open ? "open" : ""}`, children: [
      nav.map((n) => /* @__PURE__ */ jsx2(
        NavLink,
        {
          to: n.to,
          end: n.to === "/",
          className: ({ isActive }) => isActive ? "active" : "",
          children: n.label
        },
        n.to
      )),
      /* @__PURE__ */ jsx2(Link, { to: cta.primary.to, className: "btn btn-gold", style: { marginTop: 16, justifyContent: "center" }, children: cta.primary.label })
    ] })
  ] });
}

// src/components/Footer.jsx
import { Link as Link2 } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsx3("footer", { className: "footer", children: /* @__PURE__ */ jsxs3("div", { className: "container", children: [
    /* @__PURE__ */ jsxs3("div", { className: "footer-top", children: [
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("img", { src: brand.logoDark, alt: brand.name }),
        /* @__PURE__ */ jsx3("p", { children: footer.blurb }),
        /* @__PURE__ */ jsx3("div", { className: "footer-social", children: contact.social.map((s) => /* @__PURE__ */ jsx3("a", { href: s.href, "aria-label": s.label, children: /* @__PURE__ */ jsx3(Icon, { name: s.icon }) }, s.label)) })
      ] }),
      footer.columns.map((col) => /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("h5", { children: col.heading }),
        /* @__PURE__ */ jsx3("ul", { className: "footer-links", children: col.links.map((l) => /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(Link2, { to: l.to, children: l.label }) }, l.label)) })
      ] }, col.heading)),
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("h5", { children: "Get in touch" }),
        /* @__PURE__ */ jsxs3("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: `tel:${contact.phonePrimary.replace(/\s/g, "")}`, children: contact.phonePrimary }) }),
          /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: `mailto:${contact.email}`, children: contact.email }) }),
          /* @__PURE__ */ jsxs3("li", { style: { color: "var(--ink-3)" }, children: [
            contact.addressLines[1],
            ", ",
            contact.addressLines[2]
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsx3("span", { children: footer.legal }),
      /* @__PURE__ */ jsx3("span", { className: "credit", children: footer.credit })
    ] })
  ] }) });
}

// src/components/Chatbot.jsx
import { useEffect as useEffect2, useRef, useState as useState2 } from "react";
import { Fragment as Fragment3, jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function Chatbot() {
  const [open, setOpen] = useState2(false);
  const [messages, setMessages] = useState2([{ from: "bot", text: chatbot.welcome }]);
  const [input, setInput] = useState2("");
  const [typing, setTyping] = useState2(false);
  const [askedSomething, setAsked] = useState2(false);
  const bodyRef = useRef(null);
  useEffect2(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing, open]);
  const send = (text) => {
    const t = (text || "").trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "user", text: t }]);
    setInput("");
    setAsked(true);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: chatbot.cannedReply }]);
    }, 1100);
  };
  return /* @__PURE__ */ jsxs4(Fragment3, { children: [
    !open && /* @__PURE__ */ jsxs4("button", { className: "chat-launch", onClick: () => setOpen(true), "aria-label": "Open enquiries chat", children: [
      /* @__PURE__ */ jsx4(Icon, { name: "chat" }),
      " ",
      chatbot.launcherLabel
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: `chat-panel ${open ? "open" : ""}`, role: "dialog", "aria-label": chatbot.title, children: [
      /* @__PURE__ */ jsxs4("div", { className: "chat-head", children: [
        /* @__PURE__ */ jsx4("span", { className: "avatar", children: /* @__PURE__ */ jsx4(Icon, { name: "excavator" }) }),
        /* @__PURE__ */ jsxs4("div", { children: [
          /* @__PURE__ */ jsx4("h4", { children: chatbot.title }),
          /* @__PURE__ */ jsx4("span", { className: "status", children: chatbot.subtitle })
        ] }),
        /* @__PURE__ */ jsx4("button", { className: "chat-x", onClick: () => setOpen(false), "aria-label": "Close chat", children: /* @__PURE__ */ jsx4(Icon, { name: "close" }) })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "chat-body", ref: bodyRef, children: [
        messages.map((m, i) => /* @__PURE__ */ jsx4("div", { className: `msg ${m.from}`, children: m.text }, i)),
        typing && /* @__PURE__ */ jsxs4("div", { className: "msg bot typing", children: [
          /* @__PURE__ */ jsx4("span", {}),
          /* @__PURE__ */ jsx4("span", {}),
          /* @__PURE__ */ jsx4("span", {})
        ] }),
        !askedSomething && /* @__PURE__ */ jsx4("div", { className: "quick", children: chatbot.quickReplies.map((q) => /* @__PURE__ */ jsx4("button", { onClick: () => send(q), children: q }, q)) })
      ] }),
      /* @__PURE__ */ jsxs4("form", { className: "chat-input", onSubmit: (e) => {
        e.preventDefault();
        send(input);
      }, children: [
        /* @__PURE__ */ jsx4(
          "input",
          {
            value: input,
            onChange: (e) => setInput(e.target.value),
            placeholder: chatbot.inputPlaceholder,
            "aria-label": "Type your enquiry"
          }
        ),
        /* @__PURE__ */ jsx4("button", { className: "chat-send", type: "submit", "aria-label": "Send", children: /* @__PURE__ */ jsx4(Icon, { name: "send" }) })
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "chat-disc", children: chatbot.disclaimer })
    ] })
  ] });
}

// src/lib/hooks.js
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
function useInView(options = {}) {
  const ref = useRef2(null);
  const [inView, setInView] = useState3(false);
  useEffect3(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.18, rootMargin: options.rootMargin ?? "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}
function useScrollProgress() {
  const [p, setP] = useState3(0);
  useEffect3(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setP(max > 0 ? h.scrollTop / max : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return p;
}
function useCountUp(target, active, dur = 1500) {
  const [n, setN] = useState3(0);
  useEffect3(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0, start = 0;
    const tick = (t) => {
      if (!start) start = t;
      const k = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      setN(Math.round(target * eased));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return n;
}
function useSectionScroll(ref) {
  const [p, setP] = useState3(0);
  useEffect3(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = r.height - vh;
        const scrolled = Math.min(Math.max(-r.top, 0), Math.max(total, 1));
        setP(total > 0 ? scrolled / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return p;
}

// src/components/ScrollProgress.jsx
import { jsx as jsx5 } from "react/jsx-runtime";
function ScrollProgress() {
  const p = useScrollProgress();
  return /* @__PURE__ */ jsx5("div", { className: "scroll-bar", style: { width: `${p * 100}%` } });
}

// src/pages/Home.jsx
import { useRef as useRef4 } from "react";
import { Link as Link4 } from "react-router-dom";

// src/components/ExcavatorScene.jsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function track(p, stops, vals) {
  for (let i = 0; i < stops.length - 1; i++) {
    if (p <= stops[i + 1]) {
      const span = stops[i + 1] - stops[i] || 1;
      const t = Math.max(0, Math.min(1, (p - stops[i]) / span));
      return lerp(vals[i], vals[i + 1], t);
    }
  }
  return vals[vals.length - 1];
}
var K = [0, 0.3, 0.55, 0.8, 1];
function ExcavatorScene({ progress = 0, className = "" }) {
  const p = Math.max(0, Math.min(1, progress));
  const boom = track(p, K, [-8, 8, 15, 0, -10]);
  const stick = track(p, K, [6, 26, 42, 30, 12]);
  const bucket = track(p, K, [-10, 8, 54, 62, 8]);
  const dust = track(p, K, [0, 0, 1, 0.45, 0]);
  const fill = track(p, K, [0, 0, 0.4, 1, 1]);
  const S = { x: 560, y: 330 };
  const E = { x: 372, y: 236 };
  const W = { x: 300, y: 378 };
  return /* @__PURE__ */ jsxs5(
    "svg",
    {
      className,
      viewBox: "0 0 1000 640",
      fill: "none",
      role: "img",
      "aria-label": "Hydraulic excavator digging",
      preserveAspectRatio: "xMidYMax meet",
      children: [
        /* @__PURE__ */ jsx6("ellipse", { cx: "215", cy: "556", rx: "170", ry: "40", fill: "#1d1f25" }),
        /* @__PURE__ */ jsx6("ellipse", { cx: "215", cy: "540", rx: "120", ry: "34", fill: "#23262d" }),
        /* @__PURE__ */ jsxs5("g", { opacity: dust, fill: "#3a3d45", children: [
          /* @__PURE__ */ jsx6("circle", { cx: "250", cy: "470", r: "16" }),
          /* @__PURE__ */ jsx6("circle", { cx: "285", cy: "455", r: "12" }),
          /* @__PURE__ */ jsx6("circle", { cx: "225", cy: "450", r: "10" }),
          /* @__PURE__ */ jsx6("circle", { cx: "300", cy: "478", r: "9" }),
          /* @__PURE__ */ jsx6("circle", { cx: "265", cy: "438", r: "7" })
        ] }),
        /* @__PURE__ */ jsxs5("g", { children: [
          /* @__PURE__ */ jsx6("rect", { x: "470", y: "556", width: "380", height: "58", rx: "29", fill: "#16181d", stroke: "#2c2f37", strokeWidth: "3" }),
          [505, 560, 615, 670, 725, 780, 815].map((x) => /* @__PURE__ */ jsx6("circle", { cx: x, cy: "585", r: "15", fill: "#23262d", stroke: "#34373f", strokeWidth: "2" }, x)),
          /* @__PURE__ */ jsx6("rect", { x: "470", y: "548", width: "380", height: "12", rx: "6", fill: "#2c2f37" })
        ] }),
        /* @__PURE__ */ jsxs5("g", { children: [
          /* @__PURE__ */ jsx6("path", { d: "M548 540 L548 392 Q548 372 568 372 L812 372 Q834 372 834 396 L834 540 Z", fill: "#d89a2b" }),
          /* @__PURE__ */ jsx6("path", { d: "M548 540 L548 392 Q548 372 568 372 L600 372 L600 540 Z", fill: "#b07d1e", opacity: ".5" }),
          /* @__PURE__ */ jsx6("path", { d: "M566 372 L566 300 Q566 286 582 286 L660 286 Q672 286 672 300 L672 372 Z", fill: "#1c1e24", stroke: "#34373f", strokeWidth: "2" }),
          /* @__PURE__ */ jsx6("path", { d: "M576 360 L576 304 Q576 298 584 298 L654 298 L654 360 Z", fill: "#3a3d45", opacity: ".7" }),
          /* @__PURE__ */ jsx6("path", { d: "M576 318 L654 318", stroke: "#d89a2b", strokeWidth: "3", opacity: ".5" }),
          /* @__PURE__ */ jsx6("rect", { x: "806", y: "404", width: "44", height: "128", rx: "8", fill: "#16181d" }),
          /* @__PURE__ */ jsx6("path", { d: "M690 372 L800 372 L800 408 L690 408 Z", fill: "#b07d1e" }),
          /* @__PURE__ */ jsx6("circle", { cx: "745", cy: "500", r: "22", fill: "#16181d", stroke: "#34373f", strokeWidth: "3" }),
          /* @__PURE__ */ jsx6("text", { x: "600", y: "470", fontFamily: "Anton, sans-serif", fontSize: "34", fill: "#1a1408", opacity: ".85", children: "JE" })
        ] }),
        /* @__PURE__ */ jsxs5("g", { transform: `rotate(${boom} ${S.x} ${S.y})`, children: [
          /* @__PURE__ */ jsx6("path", { d: `M${S.x} ${S.y} L${E.x} ${E.y}`, stroke: "#d89a2b", strokeWidth: "30", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx6("path", { d: `M${S.x} ${S.y} L${E.x} ${E.y}`, stroke: "#b07d1e", strokeWidth: "8", strokeLinecap: "round", opacity: ".6" }),
          /* @__PURE__ */ jsx6("line", { x1: "540", y1: "356", x2: "430", y2: "286", stroke: "#52555e", strokeWidth: "7", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx6("circle", { cx: S.x, cy: S.y, r: "13", fill: "#16181d", stroke: "#52555e", strokeWidth: "3" }),
          /* @__PURE__ */ jsxs5("g", { transform: `rotate(${stick} ${E.x} ${E.y})`, children: [
            /* @__PURE__ */ jsx6("path", { d: `M${E.x} ${E.y} L${W.x} ${W.y}`, stroke: "#d89a2b", strokeWidth: "24", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx6("line", { x1: "360", y1: "250", x2: "312", y2: "356", stroke: "#52555e", strokeWidth: "6", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx6("circle", { cx: E.x, cy: E.y, r: "12", fill: "#16181d", stroke: "#52555e", strokeWidth: "3" }),
            /* @__PURE__ */ jsxs5("g", { transform: `rotate(${bucket} ${W.x} ${W.y})`, children: [
              /* @__PURE__ */ jsx6("path", { d: "M300 366 L255 388 L243 432 Q243 446 262 448 L322 448 L322 392 Z", fill: "#16181d", stroke: "#d89a2b", strokeWidth: "4", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsx6("path", { d: "M262 430 Q285 414 318 422 L318 446 L262 446 Z", fill: "#33363d", opacity: fill }),
              /* @__PURE__ */ jsxs5("g", { fill: "#d89a2b", children: [
                /* @__PURE__ */ jsx6("path", { d: "M246 432 l-7 12 9 -2 z" }),
                /* @__PURE__ */ jsx6("path", { d: "M262 438 l-6 13 9 -2 z" }),
                /* @__PURE__ */ jsx6("path", { d: "M280 442 l-6 13 9 -2 z" }),
                /* @__PURE__ */ jsx6("path", { d: "M298 444 l-6 13 9 -2 z" })
              ] }),
              /* @__PURE__ */ jsx6("circle", { cx: W.x, cy: W.y, r: "11", fill: "#16181d", stroke: "#52555e", strokeWidth: "3" })
            ] })
          ] })
        ] })
      ]
    }
  );
}

// src/components/ParallaxStrip.jsx
import { useRef as useRef3 } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function ParallaxStrip({ children }) {
  const ref = useRef3(null);
  const p = useSectionScroll(ref);
  const shift = (mult) => ({ transform: `translateY(${(p - 0.5) * mult}px)` });
  return /* @__PURE__ */ jsxs6("section", { className: "parallax", ref, children: [
    /* @__PURE__ */ jsx7("div", { className: "sun", style: shift(-60) }),
    /* @__PURE__ */ jsx7("svg", { className: "layer", style: shift(40), viewBox: "0 0 1440 240", preserveAspectRatio: "xMidYMax slice", height: "55%", children: /* @__PURE__ */ jsx7("path", { d: "M0 240 L0 150 L200 110 L420 160 L680 90 L920 150 L1180 100 L1440 150 L1440 240 Z", fill: "#191b22" }) }),
    /* @__PURE__ */ jsx7("svg", { className: "layer", style: shift(-30), viewBox: "0 0 1440 260", preserveAspectRatio: "xMidYMax slice", height: "46%", children: /* @__PURE__ */ jsxs6("g", { fill: "#0f1014", children: [
      /* @__PURE__ */ jsx7("path", { d: "M120 260 L120 70 L132 70 L132 260 Z" }),
      /* @__PURE__ */ jsx7("path", { d: "M120 78 L360 60 L120 92 Z" }),
      /* @__PURE__ */ jsx7("path", { d: "M120 70 L60 120 L120 110 Z" }),
      /* @__PURE__ */ jsx7("path", { d: "M1180 260 L1180 200 Q1180 188 1196 188 L1320 188 Q1336 188 1336 204 L1336 260 Z" }),
      /* @__PURE__ */ jsx7("rect", { x: "1150", y: "244", width: "220", height: "18", rx: "9" }),
      /* @__PURE__ */ jsx7("path", { d: "M1196 196 L1120 150 L1070 120", stroke: "#0f1014", strokeWidth: "14" }),
      /* @__PURE__ */ jsx7("path", { d: "M1070 120 L1040 170", stroke: "#0f1014", strokeWidth: "12" }),
      /* @__PURE__ */ jsx7("path", { d: "M700 260 L700 214 L820 214 L840 232 L840 260 Z" }),
      /* @__PURE__ */ jsx7("path", { d: "M705 210 L800 196 L808 214 L705 214 Z" })
    ] }) }),
    /* @__PURE__ */ jsx7("svg", { className: "layer", style: shift(-70), viewBox: "0 0 1440 120", preserveAspectRatio: "xMidYMax slice", height: "22%", children: /* @__PURE__ */ jsx7("path", { d: "M0 120 L0 40 Q360 10 720 40 T1440 40 L1440 120 Z", fill: "#0b0c0f" }) }),
    /* @__PURE__ */ jsx7("div", { className: "parallax-copy", children })
  ] });
}

// src/components/Reveal.jsx
import { jsx as jsx8 } from "react/jsx-runtime";
function Reveal({ children, variant = "up", delay = 0, className = "", as: Tag = "div", style }) {
  const [ref, inView] = useInView();
  const base = variant === "left" ? "reveal-l" : variant === "right" ? "reveal-r" : "reveal";
  return /* @__PURE__ */ jsx8(
    Tag,
    {
      ref,
      className: `${base} ${inView ? "in" : ""} ${className}`,
      style: { transitionDelay: `${delay}ms`, ...style },
      children
    }
  );
}

// src/components/UI.jsx
import { Link as Link3 } from "react-router-dom";
import { Fragment as Fragment4, jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
function Btn({ to, href, variant = "gold", big, icon = "arrowRight", children }) {
  const cls = `btn btn-${variant} ${big ? "btn-lg" : ""}`;
  const inner = /* @__PURE__ */ jsxs7(Fragment4, { children: [
    children,
    icon && /* @__PURE__ */ jsx9(Icon, { name: icon })
  ] });
  if (href) return /* @__PURE__ */ jsx9("a", { className: cls, href, children: inner });
  return /* @__PURE__ */ jsx9(Link3, { className: cls, to, children: inner });
}
function SectionHead({ eyebrow, title, text, center, children }) {
  return /* @__PURE__ */ jsxs7("div", { className: `sec-head ${center ? "center" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsx9("span", { className: "eyebrow", children: eyebrow }),
    title && /* @__PURE__ */ jsx9("h2", { className: "display h-lg", children: title }),
    text && /* @__PURE__ */ jsx9("p", { className: "lead", style: { marginTop: 16 }, children: text }),
    children
  ] });
}
function Placeholder({ label = "Image", icon = "excavator", src, minHeight, className = "", alt }) {
  if (src) return /* @__PURE__ */ jsx9("img", { src, alt: alt || label, className, style: { minHeight, objectFit: "cover", width: "100%", height: "100%" } });
  return /* @__PURE__ */ jsx9("div", { className: `ph ${className}`, style: { minHeight }, children: /* @__PURE__ */ jsxs7("span", { className: "ph-label", children: [
    /* @__PURE__ */ jsx9(Icon, { name: icon }),
    " ",
    label
  ] }) });
}
function Stat({ value, suffix = "", label }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const n = useCountUp(value, inView);
  return /* @__PURE__ */ jsxs7("div", { className: "stat", ref, children: [
    /* @__PURE__ */ jsxs7("div", { className: "stat-num", children: [
      n,
      suffix
    ] }),
    /* @__PURE__ */ jsx9("div", { className: "stat-label", children: label })
  ] });
}
function Marquee({ items }) {
  const row = items.concat(items);
  return /* @__PURE__ */ jsx9("div", { className: "marquee", "aria-hidden": "true", children: /* @__PURE__ */ jsx9("div", { className: "marquee-track", children: row.map((t, i) => /* @__PURE__ */ jsxs7("span", { className: "marquee-item", children: [
    t,
    /* @__PURE__ */ jsx9("span", { className: "sep", children: "\u25C6" })
  ] }, i)) }) });
}

// src/pages/Home.jsx
import { Fragment as Fragment5, jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function Home() {
  const heroRef = useRef4(null);
  const p = useSectionScroll(heroRef);
  const copyFade = 1 - clamp((p - 0.12) / 0.4, 0, 1);
  const marquee = services.map((s) => s.title);
  return /* @__PURE__ */ jsxs8(Fragment5, { children: [
    /* @__PURE__ */ jsx10("section", { className: "hero", ref: heroRef, children: /* @__PURE__ */ jsxs8("div", { className: "hero-stage", children: [
      /* @__PURE__ */ jsx10("div", { className: "hero-grid-bg" }),
      /* @__PURE__ */ jsx10(ExcavatorScene, { className: "hero-excavator", progress: p }),
      /* @__PURE__ */ jsx10("div", { className: "container", children: /* @__PURE__ */ jsxs8("div", { className: "hero-copy", style: { opacity: copyFade, transform: `translateY(${-p * 36}px)` }, children: [
        /* @__PURE__ */ jsx10("span", { className: "eyebrow", children: hero.kicker }),
        /* @__PURE__ */ jsx10("h1", { className: "display", children: hero.titleLines.map((l, i) => /* @__PURE__ */ jsx10("span", { className: i === hero.titleLines.length - 1 ? "gold" : "", style: { display: "block" }, children: l }, i)) }),
        /* @__PURE__ */ jsx10("p", { className: "lead hero-sub", children: hero.subtitle }),
        /* @__PURE__ */ jsxs8("div", { className: "hero-actions", children: [
          /* @__PURE__ */ jsx10(Btn, { to: finalCta.primary.to, big: true, children: finalCta.primary.label }),
          /* @__PURE__ */ jsx10(Btn, { to: finalCta.secondary.to, variant: "ghost", big: true, icon: null, children: finalCta.secondary.label })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs8("div", { className: "hero-scrollhint", children: [
        /* @__PURE__ */ jsx10("span", { className: "dot" }),
        hero.scrollHint
      ] })
    ] }) }),
    /* @__PURE__ */ jsx10(Marquee, { items: marquee }),
    /* @__PURE__ */ jsx10("section", { className: "section", children: /* @__PURE__ */ jsx10("div", { className: "container", children: /* @__PURE__ */ jsx10("div", { className: "stats-row", children: stats.map((s, i) => /* @__PURE__ */ jsx10(Reveal, { delay: i * 90, children: /* @__PURE__ */ jsx10(Stat, { ...s }) }, s.label)) }) }) }),
    /* @__PURE__ */ jsx10("div", { className: "hazard-thin" }),
    /* @__PURE__ */ jsx10("section", { className: "section", children: /* @__PURE__ */ jsxs8("div", { className: "container", children: [
      /* @__PURE__ */ jsx10(Reveal, { children: /* @__PURE__ */ jsx10(
        SectionHead,
        {
          eyebrow: "What we do",
          title: "Heavy work, handled end to end",
          text: "Excavation, concrete and contracting \u2014 one fleet, one accountable team."
        }
      ) }),
      /* @__PURE__ */ jsx10("div", { className: "grid grid-3", children: services.slice(0, 3).map((s, i) => /* @__PURE__ */ jsx10(Reveal, { delay: i * 110, children: /* @__PURE__ */ jsxs8("article", { className: "card", children: [
        /* @__PURE__ */ jsx10("div", { className: "card-icon", children: /* @__PURE__ */ jsx10(Icon, { name: s.icon }) }),
        /* @__PURE__ */ jsx10("h3", { children: s.title }),
        /* @__PURE__ */ jsx10("p", { children: s.blurb }),
        /* @__PURE__ */ jsx10("ul", { className: "pts", children: s.points.map((pt) => /* @__PURE__ */ jsx10("li", { children: pt }, pt)) })
      ] }) }, s.id)) }),
      /* @__PURE__ */ jsx10("div", { style: { marginTop: 36 }, children: /* @__PURE__ */ jsx10(Btn, { to: "/services", variant: "ghost", children: "All services" }) })
    ] }) }),
    /* @__PURE__ */ jsx10(ParallaxStrip, { children: /* @__PURE__ */ jsx10("div", { className: "container", children: /* @__PURE__ */ jsxs8(Reveal, { children: [
      /* @__PURE__ */ jsx10("span", { className: "eyebrow", children: brand.tagline }),
      /* @__PURE__ */ jsxs8("h2", { className: "display h-xl", style: { maxWidth: "16ch", margin: "0 auto" }, children: [
        "If it needs to be ",
        /* @__PURE__ */ jsx10("span", { style: { color: "var(--gold)" }, children: "moved" }),
        ", we move it."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx10("section", { className: "section", children: /* @__PURE__ */ jsxs8("div", { className: "container", children: [
      /* @__PURE__ */ jsx10(Reveal, { children: /* @__PURE__ */ jsx10(SectionHead, { eyebrow: process.kicker, title: process.heading }) }),
      /* @__PURE__ */ jsx10("div", { className: "grid grid-4", children: process.steps.map((st, i) => /* @__PURE__ */ jsx10(Reveal, { delay: i * 90, children: /* @__PURE__ */ jsxs8("div", { className: "step", children: [
        /* @__PURE__ */ jsx10("div", { className: "step-no", children: st.no }),
        /* @__PURE__ */ jsx10("h4", { children: st.title }),
        /* @__PURE__ */ jsx10("p", { children: st.text })
      ] }) }, st.no)) })
    ] }) }),
    /* @__PURE__ */ jsx10("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ jsxs8("div", { className: "container", children: [
      /* @__PURE__ */ jsx10(Reveal, { children: /* @__PURE__ */ jsx10(SectionHead, { eyebrow: "Recent work", title: "Projects built on our iron" }) }),
      /* @__PURE__ */ jsx10("div", { className: "grid grid-3", children: projects.items.slice(0, 3).map((pr, i) => /* @__PURE__ */ jsx10(Reveal, { delay: i * 110, children: /* @__PURE__ */ jsxs8(Link4, { to: "/projects", className: "proj", children: [
        /* @__PURE__ */ jsx10(Placeholder, { icon: "excavator", label: pr.category }),
        /* @__PURE__ */ jsxs8("div", { className: "proj-info", children: [
          /* @__PURE__ */ jsx10("span", { className: "proj-cat", children: pr.category }),
          /* @__PURE__ */ jsx10("h4", { children: pr.title }),
          /* @__PURE__ */ jsxs8("div", { className: "proj-meta", children: [
            /* @__PURE__ */ jsx10("span", { children: pr.location }),
            /* @__PURE__ */ jsx10("span", { children: "\xB7" }),
            /* @__PURE__ */ jsx10("span", { children: pr.metric })
          ] })
        ] })
      ] }) }, pr.title)) }),
      /* @__PURE__ */ jsx10("div", { style: { marginTop: 36 }, children: /* @__PURE__ */ jsx10(Btn, { to: "/projects", variant: "ghost", children: "View all projects" }) })
    ] }) }),
    /* @__PURE__ */ jsx10("section", { className: "section cta-band", children: /* @__PURE__ */ jsx10("div", { className: "container", children: /* @__PURE__ */ jsxs8(Reveal, { children: [
      /* @__PURE__ */ jsx10("span", { className: "eyebrow", children: brand.tagline }),
      /* @__PURE__ */ jsx10("h2", { className: "display h-lg", children: finalCta.heading }),
      /* @__PURE__ */ jsx10("p", { className: "lead", style: { margin: "14px auto 0" }, children: finalCta.text }),
      /* @__PURE__ */ jsxs8("div", { className: "cta-actions", children: [
        /* @__PURE__ */ jsx10(Btn, { to: finalCta.primary.to, big: true, children: finalCta.primary.label }),
        /* @__PURE__ */ jsx10(Btn, { to: finalCta.secondary.to, variant: "ghost", big: true, icon: null, children: finalCta.secondary.label })
      ] })
    ] }) }) })
  ] });
}

// src/pages/Equipment.jsx
import { Fragment as Fragment6, jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
function Equipment() {
  return /* @__PURE__ */ jsxs9(Fragment6, { children: [
    /* @__PURE__ */ jsx11("header", { className: "page-head", children: /* @__PURE__ */ jsxs9("div", { className: "container", children: [
      /* @__PURE__ */ jsxs9("div", { className: "breadcrumb", children: [
        /* @__PURE__ */ jsx11("span", { className: "gold", children: "Home" }),
        " / Equipment"
      ] }),
      /* @__PURE__ */ jsx11("h1", { className: "display h-xl", children: "The Fleet" }),
      /* @__PURE__ */ jsx11("p", { className: "lead", style: { marginTop: 16 }, children: equipment.intro })
    ] }) }),
    /* @__PURE__ */ jsx11("div", { className: "hazard" }),
    /* @__PURE__ */ jsx11("section", { className: "section", children: /* @__PURE__ */ jsx11("div", { className: "container", style: { display: "flex", flexDirection: "column", gap: 40 }, children: equipment.categories.map((m, i) => /* @__PURE__ */ jsx11(Reveal, { variant: i % 2 ? "right" : "left", children: /* @__PURE__ */ jsxs9("article", { className: "equip", id: m.id, children: [
      /* @__PURE__ */ jsxs9("div", { className: "equip-media", children: [
        /* @__PURE__ */ jsx11("span", { className: "equip-badge", children: m.badge }),
        /* @__PURE__ */ jsx11(Placeholder, { icon: m.type.includes("Mixer") ? "mixer" : "excavator", label: m.name, src: m.image })
      ] }),
      /* @__PURE__ */ jsxs9("div", { className: "equip-body", children: [
        /* @__PURE__ */ jsx11("span", { className: "equip-type", children: m.type }),
        /* @__PURE__ */ jsx11("h3", { children: m.name }),
        /* @__PURE__ */ jsx11("p", { className: "equip-tag", children: m.tagline }),
        /* @__PURE__ */ jsx11("div", { className: "spec-grid", children: m.specs.map((s) => /* @__PURE__ */ jsxs9("div", { className: "spec", children: [
          /* @__PURE__ */ jsx11("div", { className: "spec-label", children: s.label }),
          /* @__PURE__ */ jsx11("div", { className: "spec-val", children: s.value })
        ] }, s.label)) }),
        /* @__PURE__ */ jsx11("div", { className: "equip-features", children: m.features.map((f) => /* @__PURE__ */ jsx11("span", { className: "chip", children: f }, f)) }),
        /* @__PURE__ */ jsx11(Btn, { to: cta.primary.to, children: "Enquire about this machine" })
      ] })
    ] }) }, m.id)) }) }),
    /* @__PURE__ */ jsx11("section", { className: "section cta-band", children: /* @__PURE__ */ jsx11("div", { className: "container", children: /* @__PURE__ */ jsxs9(Reveal, { children: [
      /* @__PURE__ */ jsx11("span", { className: "eyebrow", children: "Equipment" }),
      /* @__PURE__ */ jsx11("h2", { className: "display h-lg", children: equipment.ctaNote }),
      /* @__PURE__ */ jsxs9("div", { className: "cta-actions", children: [
        /* @__PURE__ */ jsx11(Btn, { to: cta.primary.to, big: true, children: cta.primary.label }),
        /* @__PURE__ */ jsx11(Btn, { to: cta.call.to, variant: "ghost", big: true, icon: "phone", children: cta.call.label })
      ] })
    ] }) }) })
  ] });
}

// src/pages/Services.jsx
import { Fragment as Fragment7, jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
function Services() {
  return /* @__PURE__ */ jsxs10(Fragment7, { children: [
    /* @__PURE__ */ jsx12("header", { className: "page-head", children: /* @__PURE__ */ jsxs10("div", { className: "container", children: [
      /* @__PURE__ */ jsxs10("div", { className: "breadcrumb", children: [
        /* @__PURE__ */ jsx12("span", { className: "gold", children: "Home" }),
        " / Services"
      ] }),
      /* @__PURE__ */ jsx12("h1", { className: "display h-xl", children: "Services" }),
      /* @__PURE__ */ jsx12("p", { className: "lead", style: { marginTop: 16 }, children: "Excavation, mining support, concrete and turnkey earthwork contracts \u2014 backed by a heavy, well-run fleet." })
    ] }) }),
    /* @__PURE__ */ jsx12("div", { className: "hazard" }),
    /* @__PURE__ */ jsx12("section", { className: "section", children: /* @__PURE__ */ jsx12("div", { className: "container", children: /* @__PURE__ */ jsx12("div", { className: "grid grid-3", children: services.map((s, i) => /* @__PURE__ */ jsx12(Reveal, { delay: i % 3 * 100, children: /* @__PURE__ */ jsxs10("article", { className: "card", children: [
      /* @__PURE__ */ jsx12("div", { className: "card-icon", children: /* @__PURE__ */ jsx12(Icon, { name: s.icon }) }),
      /* @__PURE__ */ jsx12("h3", { children: s.title }),
      /* @__PURE__ */ jsx12("p", { children: s.blurb }),
      /* @__PURE__ */ jsx12("ul", { className: "pts", children: s.points.map((pt) => /* @__PURE__ */ jsx12("li", { children: pt }, pt)) })
    ] }) }, s.id)) }) }) }),
    /* @__PURE__ */ jsx12("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ jsxs10("div", { className: "container", children: [
      /* @__PURE__ */ jsx12(Reveal, { children: /* @__PURE__ */ jsx12(SectionHead, { eyebrow: process.kicker, title: process.heading, center: true }) }),
      /* @__PURE__ */ jsx12("div", { className: "grid grid-4", children: process.steps.map((st, i) => /* @__PURE__ */ jsx12(Reveal, { delay: i * 90, children: /* @__PURE__ */ jsxs10("div", { className: "step", children: [
        /* @__PURE__ */ jsx12("div", { className: "step-no", children: st.no }),
        /* @__PURE__ */ jsx12("h4", { children: st.title }),
        /* @__PURE__ */ jsx12("p", { children: st.text })
      ] }) }, st.no)) })
    ] }) }),
    /* @__PURE__ */ jsx12("section", { className: "section cta-band", children: /* @__PURE__ */ jsx12("div", { className: "container", children: /* @__PURE__ */ jsxs10(Reveal, { children: [
      /* @__PURE__ */ jsx12("h2", { className: "display h-lg", children: "Tell us what you need moved." }),
      /* @__PURE__ */ jsx12("div", { className: "cta-actions", children: /* @__PURE__ */ jsx12(Btn, { to: cta.primary.to, big: true, children: cta.primary.label }) })
    ] }) }) })
  ] });
}

// src/pages/Projects.jsx
import { useState as useState4 } from "react";
import { Fragment as Fragment8, jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
function Projects() {
  const [f, setF] = useState4(projects.filters[0]);
  const list = f === projects.filters[0] ? projects.items : projects.items.filter((i) => i.category === f);
  return /* @__PURE__ */ jsxs11(Fragment8, { children: [
    /* @__PURE__ */ jsx13("header", { className: "page-head", children: /* @__PURE__ */ jsxs11("div", { className: "container", children: [
      /* @__PURE__ */ jsxs11("div", { className: "breadcrumb", children: [
        /* @__PURE__ */ jsx13("span", { className: "gold", children: "Home" }),
        " / Projects"
      ] }),
      /* @__PURE__ */ jsx13("h1", { className: "display h-xl", children: "Our Work" }),
      /* @__PURE__ */ jsx13("p", { className: "lead", style: { marginTop: 16 }, children: projects.intro })
    ] }) }),
    /* @__PURE__ */ jsx13("div", { className: "hazard" }),
    /* @__PURE__ */ jsx13("section", { className: "section", children: /* @__PURE__ */ jsxs11("div", { className: "container", children: [
      /* @__PURE__ */ jsx13("div", { className: "filter-row", children: projects.filters.map((cat) => /* @__PURE__ */ jsx13("button", { className: `filter-btn ${f === cat ? "active" : ""}`, onClick: () => setF(cat), children: cat }, cat)) }),
      /* @__PURE__ */ jsx13("div", { className: "grid grid-3", children: list.map((pr, i) => /* @__PURE__ */ jsx13(Reveal, { delay: i % 3 * 90, children: /* @__PURE__ */ jsxs11("article", { className: "proj", children: [
        /* @__PURE__ */ jsx13(Placeholder, { icon: "excavator", label: pr.category, src: pr.image }),
        /* @__PURE__ */ jsxs11("div", { className: "proj-info", children: [
          /* @__PURE__ */ jsxs11("span", { className: "proj-cat", children: [
            pr.category,
            " \xB7 ",
            pr.year
          ] }),
          /* @__PURE__ */ jsx13("h4", { children: pr.title }),
          /* @__PURE__ */ jsxs11("div", { className: "proj-meta", children: [
            /* @__PURE__ */ jsx13("span", { children: pr.location }),
            /* @__PURE__ */ jsx13("span", { children: "\xB7" }),
            /* @__PURE__ */ jsx13("span", { children: pr.metric })
          ] })
        ] })
      ] }) }, pr.title)) })
    ] }) }),
    /* @__PURE__ */ jsx13("section", { className: "section cta-band", children: /* @__PURE__ */ jsx13("div", { className: "container", children: /* @__PURE__ */ jsxs11(Reveal, { children: [
      /* @__PURE__ */ jsx13("h2", { className: "display h-lg", children: "Your project could be next." }),
      /* @__PURE__ */ jsx13("div", { className: "cta-actions", children: /* @__PURE__ */ jsx13(Btn, { to: cta.primary.to, big: true, children: cta.primary.label }) })
    ] }) }) })
  ] });
}

// src/pages/About.jsx
import { Fragment as Fragment9, jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
function About() {
  return /* @__PURE__ */ jsxs12(Fragment9, { children: [
    /* @__PURE__ */ jsx14("header", { className: "page-head", children: /* @__PURE__ */ jsxs12("div", { className: "container", children: [
      /* @__PURE__ */ jsxs12("div", { className: "breadcrumb", children: [
        /* @__PURE__ */ jsx14("span", { className: "gold", children: "Home" }),
        " / About"
      ] }),
      /* @__PURE__ */ jsx14("h1", { className: "display h-xl", children: about.kicker })
    ] }) }),
    /* @__PURE__ */ jsx14("div", { className: "hazard" }),
    /* @__PURE__ */ jsx14("section", { className: "section", children: /* @__PURE__ */ jsx14("div", { className: "container", children: /* @__PURE__ */ jsxs12("div", { className: "split", children: [
      /* @__PURE__ */ jsx14(Reveal, { variant: "left", children: /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsx14("span", { className: "eyebrow", children: "Who we are" }),
        /* @__PURE__ */ jsx14("h2", { className: "display h-md", style: { marginBottom: 18 }, children: about.heading }),
        /* @__PURE__ */ jsx14("p", { className: "lead", style: { marginBottom: 16 }, children: about.lead }),
        about.paragraphs.map((t, i) => /* @__PURE__ */ jsx14("p", { className: "muted", style: { marginBottom: 12 }, children: t }, i)),
        /* @__PURE__ */ jsxs12("p", { className: "muted", style: { marginTop: 18 }, children: [
          /* @__PURE__ */ jsx14("strong", { style: { color: "var(--ink)" }, children: "Founder:" }),
          " ",
          brand.owner,
          " \xB7 ",
          /* @__PURE__ */ jsx14("strong", { style: { color: "var(--ink)" }, children: "Est." }),
          " ",
          brand.established
        ] })
      ] }) }),
      /* @__PURE__ */ jsx14(Reveal, { variant: "right", children: /* @__PURE__ */ jsx14(Placeholder, { icon: "building", label: "Site / team photo", minHeight: 420, className: "" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx14("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ jsx14("div", { className: "container", children: /* @__PURE__ */ jsx14("div", { className: "values-grid", children: about.values.map((v, i) => /* @__PURE__ */ jsx14(Reveal, { delay: i * 90, children: /* @__PURE__ */ jsxs12("div", { className: "value", children: [
      /* @__PURE__ */ jsx14("div", { className: "vi", children: /* @__PURE__ */ jsx14(Icon, { name: v.icon }) }),
      /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsx14("h4", { children: v.title }),
        /* @__PURE__ */ jsx14("p", { children: v.text })
      ] })
    ] }) }, v.title)) }) }) }),
    /* @__PURE__ */ jsx14("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ jsx14("div", { className: "container", children: /* @__PURE__ */ jsx14("div", { className: "stats-row", children: stats.map((s, i) => /* @__PURE__ */ jsx14(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsx14(Stat, { ...s }) }, s.label)) }) }) }),
    /* @__PURE__ */ jsx14("section", { className: "section cta-band", children: /* @__PURE__ */ jsx14("div", { className: "container", children: /* @__PURE__ */ jsxs12(Reveal, { children: [
      /* @__PURE__ */ jsx14("span", { className: "eyebrow", children: brand.tagline }),
      /* @__PURE__ */ jsx14("h2", { className: "display h-lg", children: finalCta.heading }),
      /* @__PURE__ */ jsx14("div", { className: "cta-actions", children: /* @__PURE__ */ jsx14(Btn, { to: finalCta.primary.to, big: true, children: finalCta.primary.label }) })
    ] }) }) })
  ] });
}

// src/pages/Contact.jsx
import { useState as useState5 } from "react";
import { Fragment as Fragment10, jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
function Contact() {
  const [sent, setSent] = useState5(false);
  const tel = contact.phonePrimary.replace(/\s/g, "");
  return /* @__PURE__ */ jsxs13(Fragment10, { children: [
    /* @__PURE__ */ jsx15("header", { className: "page-head", children: /* @__PURE__ */ jsxs13("div", { className: "container", children: [
      /* @__PURE__ */ jsxs13("div", { className: "breadcrumb", children: [
        /* @__PURE__ */ jsx15("span", { className: "gold", children: "Home" }),
        " / Contact"
      ] }),
      /* @__PURE__ */ jsx15("h1", { className: "display h-xl", children: "Get a Quote" }),
      /* @__PURE__ */ jsx15("p", { className: "lead", style: { marginTop: 16 }, children: "Tell us about your site and timeline. We\u2019ll get back with machines, crew and a clear price." })
    ] }) }),
    /* @__PURE__ */ jsx15("div", { className: "hazard" }),
    /* @__PURE__ */ jsx15("section", { className: "section", children: /* @__PURE__ */ jsx15("div", { className: "container", children: /* @__PURE__ */ jsxs13("div", { className: "contact-grid", children: [
      /* @__PURE__ */ jsx15(Reveal, { variant: "left", children: /* @__PURE__ */ jsx15("div", { className: "contact-card", children: sent ? /* @__PURE__ */ jsxs13("div", { style: { textAlign: "center", padding: "40px 10px" }, children: [
        /* @__PURE__ */ jsx15("div", { className: "card-icon", style: { margin: "0 auto 16px" }, children: /* @__PURE__ */ jsx15(Icon, { name: "check" }) }),
        /* @__PURE__ */ jsx15("h3", { className: "display h-md", style: { marginBottom: 10 }, children: "Thanks!" }),
        /* @__PURE__ */ jsxs13("p", { className: "muted", children: [
          "This is a demo form. Once connected, your enquiry will reach the ",
          brand.name,
          " team directly."
        ] })
      ] }) : /* @__PURE__ */ jsxs13("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, children: [
        /* @__PURE__ */ jsxs13("div", { className: "field", children: [
          /* @__PURE__ */ jsx15("label", { children: "Name" }),
          /* @__PURE__ */ jsx15("input", { required: true, placeholder: "Your name" })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "field", children: [
          /* @__PURE__ */ jsx15("label", { children: "Phone" }),
          /* @__PURE__ */ jsx15("input", { required: true, placeholder: "Your phone number" })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "field", children: [
          /* @__PURE__ */ jsx15("label", { children: "Email" }),
          /* @__PURE__ */ jsx15("input", { type: "email", placeholder: "you@email.com" })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "field", children: [
          /* @__PURE__ */ jsx15("label", { children: "What do you need?" }),
          /* @__PURE__ */ jsxs13("select", { children: [
            /* @__PURE__ */ jsx15("option", { value: "", children: "Select a service\u2026" }),
            services.map((s) => /* @__PURE__ */ jsx15("option", { value: s.id, children: s.title }, s.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "field", children: [
          /* @__PURE__ */ jsx15("label", { children: "Project details" }),
          /* @__PURE__ */ jsx15("textarea", { placeholder: "Site location, scope, timeline\u2026" })
        ] }),
        /* @__PURE__ */ jsxs13("button", { className: "btn btn-gold btn-lg", type: "submit", style: { width: "100%", justifyContent: "center" }, children: [
          "Send enquiry ",
          /* @__PURE__ */ jsx15(Icon, { name: "send" })
        ] }),
        /* @__PURE__ */ jsx15("p", { className: "note", style: { marginTop: 14 }, children: "Demo form \u2014 not yet connected to a backend." })
      ] }) }) }),
      /* @__PURE__ */ jsx15(Reveal, { variant: "right", children: /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsxs13("div", { className: "contact-card", style: { marginBottom: 22 }, children: [
          /* @__PURE__ */ jsxs13("a", { className: "contact-line", href: `tel:${tel}`, children: [
            /* @__PURE__ */ jsx15("span", { className: "ci", children: /* @__PURE__ */ jsx15(Icon, { name: "phone" }) }),
            /* @__PURE__ */ jsxs13("span", { children: [
              /* @__PURE__ */ jsx15("b", { children: "Call" }),
              contact.phonePrimary,
              /* @__PURE__ */ jsx15("br", {}),
              contact.phoneSecondary
            ] })
          ] }),
          /* @__PURE__ */ jsxs13("a", { className: "contact-line", href: `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`, children: [
            /* @__PURE__ */ jsx15("span", { className: "ci", children: /* @__PURE__ */ jsx15(Icon, { name: "whatsapp" }) }),
            /* @__PURE__ */ jsxs13("span", { children: [
              /* @__PURE__ */ jsx15("b", { children: "WhatsApp" }),
              contact.whatsapp
            ] })
          ] }),
          /* @__PURE__ */ jsxs13("a", { className: "contact-line", href: `mailto:${contact.email}`, children: [
            /* @__PURE__ */ jsx15("span", { className: "ci", children: /* @__PURE__ */ jsx15(Icon, { name: "mail" }) }),
            /* @__PURE__ */ jsxs13("span", { children: [
              /* @__PURE__ */ jsx15("b", { children: "Email" }),
              contact.email,
              /* @__PURE__ */ jsx15("br", {}),
              contact.emailSales
            ] })
          ] }),
          /* @__PURE__ */ jsxs13("div", { className: "contact-line", children: [
            /* @__PURE__ */ jsx15("span", { className: "ci", children: /* @__PURE__ */ jsx15(Icon, { name: "mappin" }) }),
            /* @__PURE__ */ jsxs13("span", { children: [
              /* @__PURE__ */ jsx15("b", { children: "Address" }),
              contact.addressLines.map((l, i) => /* @__PURE__ */ jsxs13("span", { children: [
                l,
                /* @__PURE__ */ jsx15("br", {})
              ] }, i))
            ] })
          ] }),
          /* @__PURE__ */ jsxs13("div", { className: "contact-line", children: [
            /* @__PURE__ */ jsx15("span", { className: "ci", children: /* @__PURE__ */ jsx15(Icon, { name: "clock" }) }),
            /* @__PURE__ */ jsxs13("span", { children: [
              /* @__PURE__ */ jsx15("b", { children: "Hours" }),
              contact.hours.map((h) => /* @__PURE__ */ jsxs13("span", { children: [
                h.day,
                ": ",
                h.time,
                /* @__PURE__ */ jsx15("br", {})
              ] }, h.day))
            ] })
          ] })
        ] }),
        contact.mapEmbedUrl ? /* @__PURE__ */ jsx15("iframe", { title: "Map", src: contact.mapEmbedUrl, style: { width: "100%", height: 240, border: 0, borderRadius: 10 }, loading: "lazy" }) : /* @__PURE__ */ jsx15("div", { className: "ph", style: { minHeight: 240 }, children: /* @__PURE__ */ jsxs13("span", { className: "ph-label", children: [
          /* @__PURE__ */ jsx15(Icon, { name: "mappin" }),
          " Map embed goes here"
        ] }) })
      ] }) })
    ] }) }) })
  ] });
}

// src/App.jsx
import { Fragment as Fragment11, jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
function ScrollToTop() {
  const { pathname } = useLocation2();
  useEffect4(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  return /* @__PURE__ */ jsxs14(Fragment11, { children: [
    /* @__PURE__ */ jsx16(ScrollProgress, {}),
    /* @__PURE__ */ jsx16(Navbar, {}),
    /* @__PURE__ */ jsx16(ScrollToTop, {}),
    /* @__PURE__ */ jsx16("main", { children: /* @__PURE__ */ jsxs14(Routes, { children: [
      /* @__PURE__ */ jsx16(Route, { path: "/", element: /* @__PURE__ */ jsx16(Home, {}) }),
      /* @__PURE__ */ jsx16(Route, { path: "/equipment", element: /* @__PURE__ */ jsx16(Equipment, {}) }),
      /* @__PURE__ */ jsx16(Route, { path: "/services", element: /* @__PURE__ */ jsx16(Services, {}) }),
      /* @__PURE__ */ jsx16(Route, { path: "/projects", element: /* @__PURE__ */ jsx16(Projects, {}) }),
      /* @__PURE__ */ jsx16(Route, { path: "/about", element: /* @__PURE__ */ jsx16(About, {}) }),
      /* @__PURE__ */ jsx16(Route, { path: "/contact", element: /* @__PURE__ */ jsx16(Contact, {}) }),
      /* @__PURE__ */ jsx16(Route, { path: "*", element: /* @__PURE__ */ jsx16(Home, {}) })
    ] }) }),
    /* @__PURE__ */ jsx16(Footer, {}),
    /* @__PURE__ */ jsx16(Chatbot, {})
  ] });
}

// test-ssr.jsx
var routes = ["/", "/equipment", "/services", "/projects", "/about", "/contact", "/bogus"];
var ok = 0;
for (const r of routes) {
  try {
    const html = renderToStaticMarkup(
      React.createElement(StaticRouter, { location: r }, React.createElement(App))
    );
    const hasNav = html.includes("Jain Earthmovers");
    console.log(`${r.padEnd(12)} -> OK  ${String(html.length).padStart(6)} chars  brand:${hasNav}`);
    ok++;
  } catch (e) {
    console.log(`${r.padEnd(12)} -> FAIL: ${e.message}`);
  }
}
console.log(`
${ok}/${routes.length} routes rendered without throwing`);
