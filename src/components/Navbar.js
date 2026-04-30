import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.4rem 2.5rem',
    transition: 'background 0.3s',
    background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
    borderBottom: scrolled ? '1px solid #1e1e1e' : 'none',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
  };

  return (
    <nav style={navStyle}>
      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-1px' }}>
        DKC<span style={{ color: '#c8f135' }}>.</span>
      </span>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontFamily: 'DM Mono, monospace', fontSize: '0.82rem' }}>
        {['About', 'Skills', 'Projects', 'Contact'].map(sec => (
          <li key={sec}>
            <a
              href={`#${sec}`}
              style={{ color: '#888', cursor: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#c8f135'}
              onMouseLeave={e => e.target.style.color = '#888'}
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>

      <span style={{
        fontFamily: 'DM Mono, monospace', fontSize: '0.72rem',
        color: '#c8f135', border: '1px solid #c8f13540',
        padding: '4px 12px', borderRadius: '20px', background: '#c8f13510'
      }}>
        ⬤ Available
      </span>
    </nav>
  );
}
