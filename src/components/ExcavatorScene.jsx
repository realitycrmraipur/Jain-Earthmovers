/* Scroll-driven hydraulic excavator. Pass `progress` 0..1 and the boom,
   stick and bucket articulate through a dig–scoop–lift cycle. Pure SVG. */
function lerp(a, b, t) { return a + (b - a) * t }
function track(p, stops, vals) {
  for (let i = 0; i < stops.length - 1; i++) {
    if (p <= stops[i + 1]) {
      const span = stops[i + 1] - stops[i] || 1
      const t = Math.max(0, Math.min(1, (p - stops[i]) / span))
      return lerp(vals[i], vals[i + 1], t)
    }
  }
  return vals[vals.length - 1]
}
const K = [0, 0.3, 0.55, 0.8, 1]

export default function ExcavatorScene({ progress = 0, className = '' }) {
  const p = Math.max(0, Math.min(1, progress))
  const boom = track(p, K, [-8, 8, 15, 0, -10])
  const stick = track(p, K, [6, 26, 42, 30, 12])
  const bucket = track(p, K, [-10, 8, 54, 62, 8])
  const dust = track(p, K, [0, 0, 1, 0.45, 0])
  const fill = track(p, K, [0, 0, 0.4, 1, 1])

  const S = { x: 560, y: 330 }   // boom pivot
  const E = { x: 372, y: 236 }   // elbow
  const W = { x: 300, y: 378 }   // wrist

  return (
    <svg className={className} viewBox="0 0 1000 640" fill="none" role="img"
      aria-label="Hydraulic excavator digging" preserveAspectRatio="xMidYMax meet">
      {/* dirt pile */}
      <ellipse cx="215" cy="556" rx="170" ry="40" fill="#1d1f25" />
      <ellipse cx="215" cy="540" rx="120" ry="34" fill="#23262d" />
      {/* dust */}
      <g opacity={dust} fill="#3a3d45">
        <circle cx="250" cy="470" r="16" /><circle cx="285" cy="455" r="12" />
        <circle cx="225" cy="450" r="10" /><circle cx="300" cy="478" r="9" />
        <circle cx="265" cy="438" r="7" />
      </g>

      {/* ---- crawler / tracks ---- */}
      <g>
        <rect x="470" y="556" width="380" height="58" rx="29" fill="#16181d" stroke="#2c2f37" strokeWidth="3" />
        {[505, 560, 615, 670, 725, 780, 815].map((x) => (
          <circle key={x} cx={x} cy="585" r="15" fill="#23262d" stroke="#34373f" strokeWidth="2" />
        ))}
        <rect x="470" y="548" width="380" height="12" rx="6" fill="#2c2f37" />
      </g>

      {/* ---- house / body ---- */}
      <g>
        <path d="M548 540 L548 392 Q548 372 568 372 L812 372 Q834 372 834 396 L834 540 Z" fill="#d89a2b" />
        <path d="M548 540 L548 392 Q548 372 568 372 L600 372 L600 540 Z" fill="#b07d1e" opacity=".5" />
        {/* cab */}
        <path d="M566 372 L566 300 Q566 286 582 286 L660 286 Q672 286 672 300 L672 372 Z" fill="#1c1e24" stroke="#34373f" strokeWidth="2" />
        <path d="M576 360 L576 304 Q576 298 584 298 L654 298 L654 360 Z" fill="#3a3d45" opacity=".7" />
        <path d="M576 318 L654 318" stroke="#d89a2b" strokeWidth="3" opacity=".5" />
        {/* counterweight */}
        <rect x="806" y="404" width="44" height="128" rx="8" fill="#16181d" />
        <path d="M690 372 L800 372 L800 408 L690 408 Z" fill="#b07d1e" />
        <circle cx="745" cy="500" r="22" fill="#16181d" stroke="#34373f" strokeWidth="3" />
        <text x="600" y="470" fontFamily="Anton, sans-serif" fontSize="34" fill="#1a1408" opacity=".85">JE</text>
      </g>

      {/* ---- articulated arm ---- */}
      <g transform={`rotate(${boom} ${S.x} ${S.y})`}>
        {/* boom */}
        <path d={`M${S.x} ${S.y} L${E.x} ${E.y}`} stroke="#d89a2b" strokeWidth="30" strokeLinecap="round" />
        <path d={`M${S.x} ${S.y} L${E.x} ${E.y}`} stroke="#b07d1e" strokeWidth="8" strokeLinecap="round" opacity=".6" />
        <line x1="540" y1="356" x2="430" y2="286" stroke="#52555e" strokeWidth="7" strokeLinecap="round" />
        <circle cx={S.x} cy={S.y} r="13" fill="#16181d" stroke="#52555e" strokeWidth="3" />

        <g transform={`rotate(${stick} ${E.x} ${E.y})`}>
          {/* stick */}
          <path d={`M${E.x} ${E.y} L${W.x} ${W.y}`} stroke="#d89a2b" strokeWidth="24" strokeLinecap="round" />
          <line x1="360" y1="250" x2="312" y2="356" stroke="#52555e" strokeWidth="6" strokeLinecap="round" />
          <circle cx={E.x} cy={E.y} r="12" fill="#16181d" stroke="#52555e" strokeWidth="3" />

          <g transform={`rotate(${bucket} ${W.x} ${W.y})`}>
            {/* bucket */}
            <path d="M300 366 L255 388 L243 432 Q243 446 262 448 L322 448 L322 392 Z" fill="#16181d" stroke="#d89a2b" strokeWidth="4" strokeLinejoin="round" />
            {/* dirt in bucket */}
            <path d="M262 430 Q285 414 318 422 L318 446 L262 446 Z" fill="#33363d" opacity={fill} />
            {/* teeth */}
            <g fill="#d89a2b">
              <path d="M246 432 l-7 12 9 -2 z" /><path d="M262 438 l-6 13 9 -2 z" />
              <path d="M280 442 l-6 13 9 -2 z" /><path d="M298 444 l-6 13 9 -2 z" />
            </g>
            <circle cx={W.x} cy={W.y} r="11" fill="#16181d" stroke="#52555e" strokeWidth="3" />
          </g>
        </g>
      </g>
    </svg>
  )
}
