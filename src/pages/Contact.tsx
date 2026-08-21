import { useState } from 'react'

const WEB3FORMS_KEY = '75d4a52b-a44b-4725-98c8-8d44b5d8c641'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      const data = await response.json()
      if (response.ok && data.success) {
        window.location.hash = '#/contact/thanks'
        return
      }
      setErrorMsg((data && data.message) || 'Message could not be sent right now. Please try again later or email flutpulse@proton.me.')
      setStatus('error')
    } catch {
      setErrorMsg('Message could not be sent right now. Please try again later or email flutpulse@proton.me.')
      setStatus('error')
    }
  }

  return (
    <div className="about-container">
      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        <img src="/flutpulse_logo.png" alt="FlutPulse Logo" style={{ maxWidth: 140, marginBottom: 18 }} />
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: 10 }}>
          Contact <span style={{ color: '#FFDE59' }}>FlutPulse</span>
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#a0aec0', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
          Have a Flutter question, suggestion, or collaboration idea? Send a message and we'll get back to you by email.
        </p>
      </div>

      <div style={{ background: '#121821', border: '1px solid #263345', borderRadius: 12, padding: 24 }}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
          <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
          <input type="hidden" name="subject" value="New Contact Message - FlutPulse" />
          <input type="hidden" name="from_name" value="FlutPulse Contact Form" />

          <label htmlFor="name" style={{ fontWeight: 600, color: '#d6dee9' }}>Name</label>
          <input id="name" name="name" type="text" required style={inputStyle} />

          <label htmlFor="email" style={{ fontWeight: 600, color: '#d6dee9' }}>Email</label>
          <input id="email" name="email" type="email" required style={inputStyle} />

          <label htmlFor="message" style={{ fontWeight: 600, color: '#d6dee9' }}>Message</label>
          <textarea id="message" name="message" rows={7} required style={{ ...inputStyle, resize: 'vertical' }} />

          <button type="submit" disabled={status === 'sending'} style={{
            marginTop: 6, border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer', padding: '12px 18px', borderRadius: 8, fontWeight: 700, color: '#1a202c', background: 'linear-gradient(90deg, #7ED957, #FFDE59)'
          }}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status === 'error' && (
          <p style={{ textAlign: 'center', marginTop: 16, color: '#ff5370', fontSize: '0.95rem' }}>{errorMsg}</p>
        )}
      </div>

      <p style={{ textAlign: 'center', marginTop: 10, color: '#9ca9bb', fontSize: '0.95rem' }}>
        You can also email us directly at <a href="mailto:flutpulse@proton.me" style={{ color: '#7ED957' }}>flutpulse@proton.me</a>.
      </p>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '12px 14px', borderRadius: 8, border: '1px solid #304055', background: '#0b0f14', color: '#ffffff'
}
