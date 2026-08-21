export default function PrivacyPolicy() {
  return (
    <div className="about-container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <img src="/flutpulse_logo.png" alt="FlutPulse Logo" style={{ maxWidth: 150, marginBottom: 20 }} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 10 }}>
          Privacy <span style={{ color: '#FFDE59' }}>Policy</span>
        </h1>
      </div>

      <hr style={{ border: 0, height: 1, background: 'linear-gradient(to right, transparent, #7ED957, transparent)', margin: '40px 0' }} />

      <div className="article-main-content" style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#e2e8f0' }}>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>1. Introduction</h2>
          <p>At <strong>FlutPulse</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul style={{ paddingLeft: 25, lineHeight: 1.8 }}>
            <li><strong>Personal Data:</strong> Name and email address when you contact us.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, device information, and pages visited.</li>
            <li><strong>Cookies:</strong> Small data files used to enhance your experience and analyze traffic.</li>
          </ul>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>3. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul style={{ paddingLeft: 25, lineHeight: 1.8 }}>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and provide support</li>
            <li>Use contact form submissions only to reply to your message and follow up on your request</li>
            <li>Understand how users interact with our content</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>4. Cookies &amp; Third-Party Services</h2>
          <p>We use Google AdSense and analytics tools. These third parties may collect data according to their own privacy policies. You can control cookies through your browser settings.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the internet is completely secure.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>6. Your Rights</h2>
          <p>You have the right to access, correct, or request deletion of your personal data. Feel free to contact us anytime.</p>
        </section>
      </div>

      <div style={{ textAlign: 'center', marginTop: 60, background: 'rgba(126, 217, 87, 0.1)', padding: 35, borderRadius: 12, border: '1px solid rgba(126, 217, 87, 0.2)' }}>
        <h3 style={{ marginTop: 0, fontSize: '1.45rem', color: '#FFDE59' }}>Questions or Concerns?</h3>
        <p style={{ color: '#cbd5e1', marginBottom: 25 }}>If you have any questions about this Privacy Policy, please don't hesitate to reach out.</p>
        <a href="mailto:flutpulse@proton.me" style={{ background: 'linear-gradient(90deg, #7ED957, #FFDE59)', color: '#1a202c', padding: '14px 34px', fontWeight: 'bold', borderRadius: 30, textDecoration: 'none', display: 'inline-block' }}>
          Contact Us
        </a>
      </div>
    </div>
  )
}
