export default function About() {
  return (
    <div className="about-container">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <img src="/flutpulse_logo.png" alt="FlutPulse Logo" style={{ maxWidth: 150, marginBottom: 20 }} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 10 }}>
          Pulse of <span style={{ color: '#FFDE59' }}>Flutter</span> Innovation
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#a0aec0', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
          Practical Flutter UI resources, reusable components, and development insights to help you build polished applications faster.
        </p>
      </div>

      <hr style={{ border: 0, height: 1, background: 'linear-gradient(to right, transparent, #7ED957, transparent)', margin: '40px 0' }} />

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 15 }}>✨ About FlutPulse</h2>
        <p style={{ lineHeight: 1.8, color: '#e2e8f0', fontSize: '1.05rem' }}>
          FlutPulse is a growing collection of reusable Flutter UI components,
          design inspiration, and practical development articles. The goal is
          simple: reduce repetitive UI work and make it easier to build clean,
          consistent, and maintainable Flutter applications.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 15 }}>🧠 Design Philosophy</h2>
        <blockquote style={{ borderLeft: '4px solid #FFDE59', padding: '10px 20px', margin: '20px 0', fontStyle: 'italic', color: '#cbd5e1', background: 'rgba(255,222,89,.05)' }}>
          "Simple interfaces. Reusable code. Better developer experience."
        </blockquote>
        <p style={{ lineHeight: 1.8, color: '#e2e8f0', fontSize: '1.05rem' }}>
          Every component is designed with reusability and customization in mind.
          Rather than providing rigid templates, FlutPulse focuses on flexible
          building blocks that integrate naturally with different state
          management solutions and project architectures.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 15 }}>🚀 What You'll Find</h2>
        <ul style={{ lineHeight: 2, color: '#e2e8f0', paddingLeft: 22 }}>
          <li>Reusable Flutter UI components</li>
          <li>Responsive layouts and design patterns</li>
          <li>Clean implementation examples</li>
          <li>Flutter tips, tutorials, and best practices</li>
          <li>Resources to speed up everyday development</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ color: '#7ED957', fontSize: '1.8rem', marginBottom: 15 }}>❤️ Why FlutPulse?</h2>
        <p style={{ lineHeight: 1.8, color: '#e2e8f0', fontSize: '1.05rem' }}>
          Whether you're building your first Flutter application or refining an
          existing product, FlutPulse aims to provide practical resources that
          save time, improve consistency, and let you focus on solving real
          product problems instead of rebuilding common UI elements.
        </p>
      </section>

      <div style={{ textAlign: 'center', marginTop: 50, background: 'rgba(126, 217, 87, 0.1)', padding: 30, borderRadius: 12, border: '1px solid rgba(126, 217, 87, 0.2)' }}>
        <h3 style={{ marginTop: 0, fontSize: '1.4rem', color: '#FFDE59' }}>Ready to solve your next Flutter challenge?</h3>
        <p style={{ color: '#cbd5e1', marginBottom: 20, lineHeight: 1.7, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          Explore practical tutorials, real-world fixes, and production-ready techniques designed to help Flutter developers build faster and ship with confidence.
        </p>
        <a href="#/" style={{ background: 'linear-gradient(90deg, #7ED957, #FFDE59)', color: '#1a202c', padding: '12px 28px', fontWeight: 'bold', borderRadius: 30, textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
          Browse Articles →
        </a>
      </div>
    </div>
  )
}
