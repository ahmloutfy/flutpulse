import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav>
      <a href="#/" onClick={close} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginLeft: 0 }}>
        <img src="/flutpulse_logo.png" alt="FlutPulse Logo" loading="eager" decoding="async" style={{ height: 80 }} />
      </a>
      <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#/" onClick={close}>Home</a>
        <a href="#/#latest-articles" onClick={close}>Articles</a>
        <a href="#/categories" onClick={close}>Categories</a>
        <a href="#/about" onClick={close}>About</a>
        <a href="#/contact" onClick={close}>Contact</a>
      </div>
    </nav>
  )
}
