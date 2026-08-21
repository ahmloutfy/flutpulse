export default function Terms() {
  return (
    <div className="about-container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <img src="/flutpulse_logo.png" alt="FlutPulse Logo" style={{ maxWidth: 150, marginBottom: 20 }} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 10 }}>
          Terms &amp; <span style={{ color: '#FFDE59' }}>Conditions</span>
        </h1>
        <p style={{ color: '#a0aec0', fontSize: '0.95rem' }}>Last updated: August 2026</p>
      </div>

      <hr style={{ border: 0, height: 1, background: 'linear-gradient(to right, transparent, #7ED957, transparent)', margin: '40px 0' }} />

      <div className="article-main-content" style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#e2e8f0' }}>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>1. Acceptance of Terms</h2>
          <p>By accessing or using <strong>FlutPulse</strong> (<a href="https://ahmloutfy.github.io" style={{ color: '#7ED957' }}>ahmloutfy.github.io</a>), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the website immediately.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>2. Use of Content</h2>
          <p>All articles, code snippets, and other content published on FlutPulse are provided for educational and informational purposes only. You may:</p>
          <ul style={{ paddingLeft: 25, lineHeight: 1.8 }}>
            <li>Read and share articles with proper attribution to FlutPulse.</li>
            <li>Use code examples in your own projects, personal or commercial.</li>
          </ul>
          <p style={{ marginTop: 12 }}>You may <strong>not</strong>:</p>
          <ul style={{ paddingLeft: 25, lineHeight: 1.8 }}>
            <li>Reproduce or republish full articles without prior written permission.</li>
            <li>Use FlutPulse content in a way that misrepresents its origin.</li>
          </ul>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>3. Intellectual Property</h2>
          <p>All original content on this website — including text, graphics, and the FlutPulse logo — is the intellectual property of FlutPulse and is protected under applicable copyright laws. Flutter and the Flutter logo are trademarks of Google LLC and are used here for reference only.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>4. Disclaimer of Warranties</h2>
          <p>FlutPulse provides content "as is" without any warranties, express or implied. We do not guarantee that the information on this website is always accurate, complete, or up to date. Use the content at your own risk, and always verify solutions in your own development environment.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>5. Limitation of Liability</h2>
          <p>FlutPulse and its authors shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, the content published on this website, including but not limited to bugs, data loss, or application errors resulting from following our guides.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>6. Third-Party Links</h2>
          <p>Our articles may contain links to third-party websites or resources. These links are provided for convenience only. FlutPulse has no control over the content or practices of those sites and accepts no responsibility for them.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>7. Advertising</h2>
          <p>FlutPulse may display advertisements served by third-party providers such as Google AdSense. These providers may use cookies to serve ads relevant to your interests. For more details, please review our <a href="#/privacy_policy" style={{ color: '#7ED957' }}>Privacy Policy</a>.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>8. Changes to These Terms</h2>
          <p>We reserve the right to update these Terms and Conditions at any time. Changes will be reflected by updating the "Last updated" date at the top of this page. Continued use of the website after any changes constitutes your acceptance of the new terms.</p>
        </section>
        <section style={{ marginBottom: 45 }}>
          <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 18 }}>9. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the relevant authorities.</p>
        </section>
      </div>

      <div style={{ textAlign: 'center', marginTop: 60, background: 'rgba(126, 217, 87, 0.1)', padding: 35, borderRadius: 12, border: '1px solid rgba(126, 217, 87, 0.2)' }}>
        <h3 style={{ marginTop: 0, fontSize: '1.45rem', color: '#FFDE59' }}>Questions or Concerns?</h3>
        <p style={{ color: '#cbd5e1', marginBottom: 25 }}>If you have any questions about these Terms and Conditions, feel free to reach out.</p>
        <a href="mailto:flutpulse@proton.me" style={{ background: 'linear-gradient(90deg, #7ED957, #FFDE59)', color: '#1a202c', padding: '14px 34px', fontWeight: 'bold', borderRadius: 30, textDecoration: 'none', display: 'inline-block' }}>
          Contact Us
        </a>
      </div>
    </div>
  )
}
