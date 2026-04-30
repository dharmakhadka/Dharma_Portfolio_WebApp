import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    background: '#111', border: '1px solid #1e1e1e', borderRadius: '4px',
    padding: '0.8rem 1rem', color: '#e8e8e8',
    fontFamily: 'DM Mono, monospace', fontSize: '0.84rem',
    outline: 'none', transition: 'border-color 0.2s', width: '100%',
  };

  return (
    <section id="contact" style={{ padding: '6rem 2.5rem', borderTop: '1px solid #1e1e1e', background: '#0a0a0a' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'start',
      }}>
        {/* Left */}
        <div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: '#c8f135', display: 'block', marginBottom: '0.6rem' }}>
            04 / Contact
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Let's work<br /><span style={{ color: '#c8f135' }}>together.</span>
          </h2>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.84rem', color: '#555', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
            Open to DevOps roles, freelance projects, and consulting. Drop me a message and I'll get back within 24 hours.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              ['Email', 'dharmakhadkachhetri.com'],
              ['GitHub', 'github.com/dharmakhadkachhetri'],
              ['Location', 'Kathmandu, Nepal 🇳🇵'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: '#333', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.84rem', color: '#888' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }} onSubmit={submit}>
          {sent && (
            <div style={{ background: '#c8f13515', border: '1px solid #c8f13440', color: '#c8f135', padding: '0.8rem 1rem', borderRadius: '4px', fontFamily: 'DM Mono, monospace', fontSize: '0.82rem' }}>
              ✔ Message sent! I'll be in touch soon.
            </div>
          )}
          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
          ].map(f => (
            <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#555', textTransform: 'uppercase', letterSpacing: '1px' }}>{f.label}</label>
              <input
                name={f.name} type={f.type} value={form[f.name]}
                onChange={handle} required placeholder={f.placeholder}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#c8f135'}
                onBlur={e => e.target.style.borderColor = '#1e1e1e'}
              />
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#555', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
            <textarea
              name="message" value={form.message} onChange={handle}
              required rows={5} placeholder="Tell me about your project..."
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = '#c8f135'}
              onBlur={e => e.target.style.borderColor = '#1e1e1e'}
            />
          </div>
          <button type="submit" style={{
            background: '#c8f135', color: '#0a0a0a', border: 'none',
            padding: '0.9rem 2rem', borderRadius: '4px',
            fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem',
            cursor: 'none', alignSelf: 'flex-start',
          }}>
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
