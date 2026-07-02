import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './src/App.jsx'

const routes = ['/', '/equipment', '/services', '/projects', '/about', '/contact', '/bogus']
let ok = 0
for (const r of routes) {
  try {
    const html = renderToStaticMarkup(
      React.createElement(StaticRouter, { location: r }, React.createElement(App))
    )
    const hasNav = html.includes('Jain Earthmovers')
    console.log(`${r.padEnd(12)} -> OK  ${String(html.length).padStart(6)} chars  brand:${hasNav}`)
    ok++
  } catch (e) {
    console.log(`${r.padEnd(12)} -> FAIL: ${e.message}`)
  }
}
console.log(`\n${ok}/${routes.length} routes rendered without throwing`)
