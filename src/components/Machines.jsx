/* Open-licensed 2D machine silhouettes, shared between the parallax band and the
   page-header parallax art.
     crane      — ph:crane-tower (MIT, Phosphor)
     excavator  — mdi:excavator (Apache-2.0, MDI) — arm is a separate <path> so it digs
     dump-truck — mdi:dump-truck (Apache-2.0, MDI)
     bulldozer  — mdi:bulldozer (Apache-2.0, MDI)
     mixer      — original CC0 — drum ellipse spins on its own axis via travelling fins */

export const Crane = (p) => (
  <svg viewBox="0 0 256 256" fill="currentColor" {...p}>
    <path d="M240 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24a8 8 0 0 0 0 16h16v112H24a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16h-16V96h96v88h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 0-16M56 48h19.06l16 32H56Zm0 160v-48h40v48Zm40-64H56V96h40Z" />
  </svg>
)

export const Excavator = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.5 18.5c.54 0 1 .46 1 1s-.46 1-1 1h-12c-.54 0-1-.46-1-1s.46-1 1-1zm0-1.5h-12C5.13 17 4 18.13 4 19.5S5.13 22 6.5 22h12a2.5 2.5 0 0 0 0-5m2.5-6h-3V7h-5l-3 4v5h12zm-9.46 0l1.96-2.5H16V11z" />
    <path className="exc-arm" d="M9.76 3.41L4.76 2L2 11.83c-.34 1.28.41 2.61 1.7 2.97l1.16.32l3.29-2.83l-3.88-1.08l1.88-6.75l2.79.78c.56.29 1.77 1.1 2.53 2.13L12.5 6h.44c-1.26-1.59-3.09-2.54-3.18-2.59" />
  </svg>
)

export const DumpTruck = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20 8h-5v6H2v3h1a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5zM6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5m12 0a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5M17 12V9.5h2.5l1.96 2.5zm1-5h-4v6H3L1.57 8H1V6h12l1-1h4z" />
  </svg>
)

export const Bulldozer = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4 4a1 1 0 0 0-1 1v5c-.46 0-.86.31-.97.76v3.21h.26C2.65 13.37 3.3 13 4 13h9c.7 0 1.35.37 1.71.97h1.32L16 11a1 1 0 0 0-1-1h-2V8a1 1 0 0 0-1-1a1 1 0 0 0-1 1v2H9V5a1 1 0 0 0-1-1zm1 2h2v5H5z" />
    <path d="M17 11v8h5v-1l-3-1l-1-6z" />
    <path d="M4 15a2 2 0 0 0-2 2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2a2 2 0 0 0-2-2z" />
  </svg>
)

export const Mixer = (p) => (
  <svg viewBox="0 0 64 40" fill="currentColor" {...p}>
    <defs><clipPath id="mixerDrum"><ellipse cx="30" cy="15" rx="17" ry="9" /></clipPath></defs>
    <g><rect x="2" y="24" width="52" height="5" rx="1" /><path d="M46 12h6l4 8v9h-10z" /><polygon points="54,25 62,27 62,31 54,31" /></g>
    <g transform="rotate(-18 30 15)">
      <ellipse cx="30" cy="15" rx="17" ry="9" />
      <g className="mixer-fins" clipPath="url(#mixerDrum)" stroke="#14161d" strokeWidth="1.5" fill="none">
        <path d="M10 5 L16 25" /><path d="M18 5 L24 25" /><path d="M26 5 L32 25" />
        <path d="M34 5 L40 25" /><path d="M42 5 L48 25" /><path d="M50 5 L56 25" />
      </g>
    </g>
    <circle cx="14" cy="31" r="5" /><circle cx="42" cy="31" r="5" />
  </svg>
)
