export default function ContactThanks() {
  return (
    <div className="about-container" style={{ textAlign: 'center' }}>
      <img src="/flutpulse_logo.png" alt="FlutPulse Logo" style={{ maxWidth: 130, marginBottom: 22 }} />
      <h1 style={{ fontSize: '2.3rem', marginBottom: 12 }}>
        Thank you! <span style={{ color: '#FFDE59' }}>Your message was sent.</span>
      </h1>
      <p style={{ fontSize: '1.05rem', color: '#b5c1d1', lineHeight: 1.8, maxWidth: 620, margin: '0 auto 28px auto' }}>
        We received your message and will reply as soon as possible.
      </p>
      <a href="#/" style={{ background: 'linear-gradient(90deg, #7ED957, #FFDE59)', color: '#1a202c', padding: '12px 28px', fontWeight: 'bold', borderRadius: 30, textDecoration: 'none', display: 'inline-block' }}>
        Back to Home
      </a>
    </div>
  )
}
