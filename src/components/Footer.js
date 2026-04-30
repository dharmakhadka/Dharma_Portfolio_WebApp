import React from 'react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1e1e1e', padding: '2rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}>
          DK<span style={{ color: '#c8f135' }}>.</span>
        </span>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: '#333' }}>
          © {new Date().getFullYear()} Dharma Khadka Chhetri. Built with React.
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[['GitHub', 'https://github.com/dharmakhadka'], ['LinkedIn', 'https://linkedin.com/in/dharmakhadkachhetri']].map(([label, href]) => (
            <a
              key={label} href={href}
              style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: '#444', cursor: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#c8f135'}
              onMouseLeave={e => e.target.style.color = '#444'}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
