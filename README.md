# Jain Earthmovers — Website

Bold, dark-industrial marketing site for Jain Earthmovers (hydraulic excavators,
Ajax concrete mixers, earthwork contracts). Built with Vite + React, with a real
**WebGL 3D excavator** (react-three-fiber) in the hero that articulates and turns
as you scroll.

## ✏️ Change any text, number, phone, spec, or list — ONE file
Everything you see on the site lives in **`src/content.js`**.
Nothing is hard-coded inside the pages. Edit a value there, save, and the whole
site updates. Add or remove items from any list (services, equipment, projects,
nav, footer links) and the pages adapt automatically.

Replace the bracketed `[PLACEHOLDER]` values (phone, email, address, etc.) with
the real details when ready.

## 👀 Preview it (use a local server — do NOT just double-click)
Modern browsers block ES-module sites loaded as a `file://` path, so opening
`dist/index.html` directly will show a blank page in Chrome. Run a server:

```bash
npm install        # first time only
npm run dev        # live preview at http://localhost:5173  (best while editing)
# or, to preview the production build:
npm run build
npm run preview    # serves the built site at http://localhost:4173
```

## 🧱 The 3D excavator
- `src/components/Excavator3D.jsx` — the model (geometry, materials, articulation)
- `src/components/HeroScene3D.jsx` — the canvas, lights, camera, scroll wiring
- Easy knobs: camera angle/zoom in `HeroScene3D` (`camera={{ position, fov }}`),
  paint colours at the top of `Excavator3D` (`GOLD`, `DARK`, `STEEL`…), and the
  scroll dig/turn keyframes in the `key(p, [...])` arrays.
- It is lazy-loaded, so the rest of the site stays fast; WebGL falls back
  gracefully (empty canvas) on unsupported devices.

## 🖼 Swapping placeholder images
Image boxes are striped placeholders. Drop a photo into `public/` and set its
path in `src/content.js` (e.g. `image: './je140.jpg'`). The box becomes the photo.

## 🤖 AI chatbot
The floating "Enquiries" chat is a front-end demo (welcome message, quick
replies, canned reply). Wire `chatbot.cannedReply` in `src/content.js` to a real
backend (e.g. Supabase) later.

## 🎨 Brand
- Dark grey `#15161a`, dirty-yellow `#d89a2b`, cream `#f1efe8`
- Logo variants in `public/`: `logo-dark.png` (for dark bg), `logo-light.png`

## 🧩 Use YOUR 3D model (Blender → web)
Browsers can't load `.blend`. In Blender: **File → Export → glTF 2.0 (.glb)**.
Put the file in `public/` (e.g. `public/excavator.glb`) and set it in
`src/content.js`:
```js
heroModel: './excavator.glb',
```
The hero auto-loads it (centered, scaled, grounded, turning with scroll). Leave
`heroModel: ''` to use the built-in procedural excavator.

## 🔖 Reusable logo
`<Logo />` (`src/components/Logo.jsx`) is used in the nav and footer.
- `variant="mark"` → JE monogram only (default, no by-line)
- `variant="full"` → full lockup with wordmark
- `tone="dark" | "light"`, `height={px}`, `link={false}` to disable the home link

All four logo images live in `public/` and are referenced from `brand` in
`src/content.js`, so you can swap them in one place.
